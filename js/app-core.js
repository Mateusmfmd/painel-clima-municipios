export function normalizeText(value = '') {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function filterMunicipalities(municipalities, { query = '', region = 'all', climate = 'all' } = {}) {
  const normalizedQuery = normalizeText(query);
  return municipalities.filter((municipality) => {
    const matchesQuery = !normalizedQuery || [municipality.name, municipality.state, municipality.region, municipality.climate].some((value) => normalizeText(value).includes(normalizedQuery));
    const matchesRegion = region === 'all' || municipality.region === region;
    const matchesClimate = climate === 'all' || municipality.climate === climate;
    return matchesQuery && matchesRegion && matchesClimate;
  });
}

export function formatTemperature(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
  return `${Math.round(Number(value))}°`;
}

export function formatMillimeters(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return '—';
  return `${Math.round(Number(value))} mm`;
}

export function buildSparklinePoints(values = [], width = 720, height = 220, padding = { top: 24, right: 16, bottom: 18, left: 16 }) {
  const numbers = values.map(Number).filter(Number.isFinite);
  if (!numbers.length) return [];
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const range = max - min || 1;
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const step = numbers.length === 1 ? 0 : plotWidth / (numbers.length - 1);
  return numbers.map((value, index) => ({
    x: padding.left + (step * index),
    y: padding.top + ((max - value) / range * plotHeight),
    value
  }));
}

export function buildOpenMeteoUrl({ lat, lon }) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,precipitation,wind_speed_10m,weather_code',
    hourly: 'temperature_2m,precipitation_probability',
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max',
    forecast_days: '7',
    timezone: 'auto'
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

export function getWeatherLabel(code) {
  const numericCode = Number(code);
  if (numericCode === 0) return 'Céu limpo';
  if ([1, 2].includes(numericCode)) return 'Parcialmente nublado';
  if (numericCode === 3) return 'Nublado';
  if ([45, 48].includes(numericCode)) return 'Neblina';
  if ([51, 53, 55, 56, 57].includes(numericCode)) return 'Garoa';
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(numericCode)) return 'Pancadas de chuva';
  if ([71, 73, 75, 77, 85, 86].includes(numericCode)) return 'Neve ou granizo';
  if ([95, 96, 99].includes(numericCode)) return 'Trovoadas';
  return 'Condição variável';
}

export function weatherIconFromCode(code) {
  const numericCode = Number(code);
  if (numericCode === 0) return 'sun';
  if ([1, 2].includes(numericCode)) return 'sun-cloud';
  if ([3, 45, 48].includes(numericCode)) return 'cloud';
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(numericCode)) return 'rain';
  return 'cloud';
}

export function normalizeWeatherPayload(payload, municipality = {}) {
  if (!payload || typeof payload !== 'object' || !payload.current || !payload.daily) throw new Error('Resposta climática incompleta.');
  const current = payload.current;
  const daily = payload.daily;
  const hourly = payload.hourly || {};
  const currentTime = current.time ? new Date(current.time).getTime() : Date.now();
  const hourlyTimes = Array.isArray(hourly.time) ? hourly.time.map((time) => new Date(time).getTime()) : [];
  const nearestHour = hourlyTimes.reduce((best, time, index) => Math.abs(time - currentTime) < Math.abs(hourlyTimes[best] - currentTime) ? index : best, 0);
  const temperatures = Array.isArray