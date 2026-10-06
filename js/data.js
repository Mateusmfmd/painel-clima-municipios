export const MUNICIPALITIES = [
  {
    id: 'curitiba-pr', name: 'Curitiba', state: 'PR', region: 'Sul', climate: 'Subtropical', lat: -25.4284, lon: -49.2733,
    localWeather: { current: 18, min: 14, max: 22, rain: 12, humidity: 78, wind: 14, windDirection: 'sudeste', summary: 'Nublado com aberturas de sol', feels: 'sensação confortável', hourly: [17, 17, 18, 19, 20, 21, 22], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [6, 8, 2, 11, 4, 9, 12], days: [{label:'Hoje', min:14, max:22, rain:12, icon:'cloud'}, {label:'Ter', min:13, max:24, rain:8, icon:'sun-cloud'}, {label:'Qua', min:15, max:25, rain:4, icon:'sun'}, {label:'Qui', min:16, max:26, rain:0, icon:'sun'}, {label:'Sex', min:17, max:24, rain:18, icon:'rain'}, {label:'Sáb', min:15, max:22, rain:20, icon:'rain'}, {label:'Dom', min:14, max:23, rain:9, icon:'cloud'}] }
  },
  {
    id: 'sao-paulo-sp', name: 'São Paulo', state: 'SP', region: 'Sudeste', climate: 'Tropical sazonal', lat: -23.5505, lon: -46.6333,
    localWeather: { current: 23, min: 18, max: 27, rain: 9, humidity: 72, wind: 11, windDirection: 'sul', summary: 'Parcialmente nublado', feels: 'sensação amena', hourly: [21, 22, 23, 25, 26, 24, 22], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [2, 7, 16, 4, 0, 10, 9], days: [{label:'Hoje', min:18, max:27, rain:9, icon:'sun-cloud'}, {label:'Ter', min:17, max:28, rain:5, icon:'sun'}, {label:'Qua', min:18, max:27, rain:11, icon:'cloud'}, {label:'Qui', min:17, max:26, rain:18, icon:'rain'}, {label:'Sex', min:16, max:25, rain:20, icon:'rain'}, {label:'Sáb', min:17, max:26, rain:6, icon:'sun-cloud'}, {label:'Dom', min:18, max:28, rain:3, icon:'sun'}] }
  },
  {
    id: 'rio-de-janeiro-rj', name: 'Rio de Janeiro', state: 'RJ', region: 'Sudeste', climate: 'Tropical úmido', lat: -22.9068, lon: -43.1729,
    localWeather: { current: 28, min: 23, max: 32, rain: 4, humidity: 74, wind: 18, windDirection: 'leste', summary: 'Sol entre nuvens', feels: 'sensação quente', hourly: [27, 29, 30, 31, 31, 28, 26], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [0, 3, 7, 0, 5, 2, 4], days: [{label:'Hoje', min:23, max:32, rain:4, icon:'sun-cloud'}, {label:'Ter', min:23, max:33, rain:3, icon:'sun'}, {label:'Qua', min:24, max:33, rain:5, icon:'sun-cloud'}, {label:'Qui', min:23, max:31, rain:12, icon:'rain'}, {label:'Sex', min:22, max:30, rain:16, icon:'rain'}, {label:'Sáb', min:22, max:31, rain:8, icon:'cloud'}, {label:'Dom', min:23, max:32, rain:2, icon:'sun'}] }
  },
  {
    id: 'recife-pe', name: 'Recife', state: 'PE', region: 'Nordeste', climate: 'Tropical úmido', lat: -8.0476, lon: -34.877, 
    localWeather: { current: 29, min: 25, max: 31, rain: 18, humidity: 82, wind: 21, windDirection: 'sudeste', summary: 'Pancadas rápidas', feels: 'sensação abafada', hourly: [28, 29, 30, 30, 29, 28, 27], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [18, 24, 11, 6, 15, 9, 20], days: [{label:'Hoje', min:25, max:31, rain:18, icon:'rain'}, {label:'Ter', min:25, max:31, rain:22, icon:'rain'}, {label:'Qua', min:25, max:32, rain:19, icon:'rain'}, {label:'Qui', min:25, max:31, rain:13, icon:'cloud'}, {label:'Sex', min:24, max:31, rain:20, icon:'rain'}, {label:'Sáb', min:25, max:32, rain:9, icon:'sun-cloud'}, {label:'Dom', min:25, max:31, rain:17, icon:'rain'}] }
  },
  {
    id: 'salvador-ba', name: 'Salvador', state: 'BA', region: 'Nordeste', climate: 'Tropical úmido', lat: -12.9777, lon: -38.5016,
    localWeather: { current: 27, min: 24, max: 30, rain: 10, humidity: 80, wind: 19, windDirection: 'leste', summary: 'Nuvens passageiras', feels: 'sensação úmida', hourly: [26, 27, 28, 29, 29, 28, 27], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [5, 8, 12, 4, 11, 7, 10], days: [{label:'Hoje', min:24, max:30, rain:10, icon:'cloud'}, {label:'Ter', min:24, max:30, rain:12, icon:'rain'}, {label:'Qua', min:24, max:31, rain:8, icon:'sun-cloud'}, {label:'Qui', min:24, max:30, rain:7, icon:'cloud'}, {label:'Sex', min:24, max:31, rain:15, icon:'rain'}, {label:'Sáb', min:25, max:31, rain:6, icon:'sun-cloud'}, {label:'Dom', min:24, max:30, rain:9, icon:'cloud'}] }
  },
  {
    id: 'fortaleza-ce', name: 'Fortaleza', state: 'CE', region: 'Nordeste', climate: 'Tropical úmido', lat: -3.7319, lon: -38.5267,
    localWeather: { current: 30, min: 26, max: 32, rain: 7, humidity: 75, wind: 24, windDirection: 'leste', summary: 'Sol com vento constante', feels: 'sensação quente', hourly: [29, 30, 31, 31, 32, 31, 29], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [7, 6, 3, 12, 8, 4, 10], days: [{label:'Hoje', min:26, max:32, rain:7, icon:'sun-cloud'}, {label:'Ter', min:26, max:32, rain:8, icon:'sun-cloud'}, {label:'Qua', min:26, max:33, rain:4, icon:'sun'}, {label:'Qui', min:26, max:32, rain:11, icon:'rain'}, {label:'Sex', min:25, max:32, rain:12, icon:'rain'}, {label:'Sáb', min:26, max:33, rain:6, icon:'sun'}, {label:'Dom', min:26, max:32, rain:5, icon:'sun-cloud'}] }
  },
  {
    id: 'brasilia-df', name: 'Brasília', state: 'DF', region: 'Centro-Oeste', climate: 'Tropical sazonal', lat: -15.7939, lon: -47.8828,
    localWeather: { current: 24, min: 17, max: 29, rain: 2, humidity: 49, wind: 13, windDirection: 'leste', summary: 'Céu aberto e seco', feels: 'sensação agradável', hourly: [22, 24, 27, 29, 28, 24, 21], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [0, 3, 1, 0, 2, 0, 2], days: [{label:'Hoje', min:17, max:29, rain:2, icon:'sun'}, {label:'Ter', min:17, max:30, rain:1, icon:'sun'}, {label:'Qua', min:18, max:30, rain:3, icon:'sun-cloud'}, {label:'Qui', min:18, max:29, rain:5, icon:'sun-cloud'}, {label:'Sex', min:18, max:28, rain:7, icon:'cloud'}, {label:'Sáb', min:17, max:29, rain:4, icon:'sun-cloud'}, {label:'Dom', min:17, max:30, rain:2, icon:'sun'}] }
  },
  {
    id: 'goiania-go', name: 'Goiânia', state: 'GO', region: 'Centro-Oeste', climate: 'Tropical sazonal', lat: -16.6869, lon: -49.2648,
    localWeather: { current: 26, min: 18, max: 31, rain: 4, humidity: 55, wind: 12, windDirection: 'norte', summary: 'Sol com nuvens altas', feels: 'sensação quente', hourly: [24, 26, 29, 31, 30, 26, 23], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [3, 4, 0, 5, 2, 3, 4], days: [{label:'Hoje', min:18, max:31, rain:4, icon:'sun-cloud'}, {label:'Ter', min:18, max:32, rain:2, icon:'sun'}, {label:'Qua', min:19, max:31, rain:5, icon:'cloud'}, {label:'Qui', min:19, max:30, rain:8, icon:'rain'}, {label:'Sex', min:18, max:30, rain:6, icon:'rain'}, {label:'Sáb', min:18, max:31, rain:3, icon:'sun-cloud'}, {label:'Dom', min:19, max:32, rain:2, icon:'sun'}] }
  },
  {
    id: 'manaus-am', name: 'Manaus', state: 'AM', region: 'Norte', climate: 'Tropical úmido', lat: -3.119, lon: -60.0217,
    localWeather: { current: 28, min: 24, max: 31, rain: 22, humidity: 88, wind: 9, windDirection: 'noroeste', summary: 'Trovoadas isoladas', feels: 'sensação abafada', hourly: [27, 28, 29, 29, 28, 27, 26], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [22, 16, 28, 19, 12, 25, 20], days: [{label:'Hoje', min:24, max:31, rain:22, icon:'rain'}, {label:'Ter', min:24, max:31, rain:26, icon:'rain'}, {label:'Qua', min:24, max:30, rain:24, icon:'rain'}, {label:'Qui', min:24, max:31, rain:18, icon:'rain'}, {label:'Sex', min:24, max:31, rain:16, icon:'rain'}, {label:'Sáb', min:24, max:30, rain:20, icon:'rain'}, {label:'Dom', min:24, max:31, rain:19, icon:'rain'}] }
  },
  {
    id: 'belem-pa', name: 'Belém', state: 'PA', region: 'Norte', climate: 'Tropical úmido', lat: -1.4558, lon: -48.4902,
    localWeather: { current: 29, min: 25, max: 32, rain: 16, humidity: 84, wind: 10, windDirection: 'nordeste', summary: 'Calor com pancadas', feels: 'sensação abafada', hourly: [28, 29, 30, 31, 30, 29, 28], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [12, 18, 10, 22, 14, 19, 16], days: [{label:'Hoje', min:25, max:32, rain:16, icon:'rain'}, {label:'Ter', min:25, max:32, rain:17, icon:'rain'}, {label:'Qua', min:25, max:31, rain:20, icon:'rain'}, {label:'Qui', min:25, max:32, rain:12, icon:'cloud'}, {label:'Sex', min:25, max:31, rain:15, icon:'rain'}, {label:'Sáb', min:25, max:32, rain:13, icon:'rain'}, {label:'Dom', min:25, max:32, rain:18, icon:'rain'}] }
  },
  {
    id: 'porto-alegre-rs', name: 'Porto Alegre', state: 'RS', region: 'Sul', climate: 'Subtropical', lat: -30.0346, lon: -51.2177,
    localWeather: { current: 20, min: 15, max: 24, rain: 14, humidity: 76, wind: 16, windDirection: 'sul', summary: 'Nublado e fresco', feels: 'sensação amena', hourly: [18, 19, 20, 22, 23, 21, 19], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [8, 12, 4, 11, 9, 16, 14], days: [{label:'Hoje', min:15, max:24, rain:14, icon:'cloud'}, {label:'Ter', min:14, max:23, rain:12, icon:'cloud'}, {label:'Qua', min:13, max:22, rain:6, icon:'sun-cloud'}, {label:'Qui', min:15, max:25, rain:3, icon:'sun'}, {label:'Sex', min:17, max:26, rain:1, icon:'sun'}, {label:'Sáb', min:17, max:25, rain:8, icon:'cloud'}, {label:'Dom', min:16, max:23, rain:17, icon:'rain'}] }
  },
  {
    id: 'florianopolis-sc', name: 'Florianópolis', state: 'SC', region: 'Sul', climate: 'Subtropical', lat: -27.5954, lon: -48.548, 
    localWeather: { current: 21, min: 17, max: 25, rain: 10, humidity: 79, wind: 20, windDirection: 'nordeste', summary: 'Sol entre nuvens', feels: 'sensação agradável', hourly: [20, 21, 22, 24, 25, 23, 21], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [4, 8, 12, 6, 7, 10, 10], days: [{label:'Hoje', min:17, max:25, rain:10, icon:'sun-cloud'}, {label:'Ter', min:17, max:26, rain:7, icon:'sun'}, {label:'Qua', min:18, max:25, rain:13, icon:'rain'}, {label:'Qui', min:17, max:24, rain:18, icon:'rain'}, {label:'Sex', min:16, max:23, rain:11, icon:'cloud'}, {label:'Sáb', min:16, max:24, rain:8, icon:'sun-cloud'}, {label:'Dom', min:17, max:25, rain:5, icon:'sun'}] }
  },
  {
    id: 'juazeiro-do-norte-ce', name: 'Juazeiro do Norte', state: 'CE', region: 'Nordeste', climate: 'Semiárido', lat: -7.2131, lon: -39.3151,
    localWeather: { current: 31, min: 23, max: 34, rain: 1, humidity: 42, wind: 15, windDirection: 'sudeste', summary: 'Sol forte e ar seco', feels: 'sensação quente', hourly: [28, 30, 32, 34, 33, 30, 27], hours: ['08h', '10h', '12h', '14h', '16h', '18h', '20h'], rainDays: [0, 1, 0, 2, 0, 1, 1], days: [{label:'Hoje', min:23, max:34, rain:1, icon:'sun'}, {label:'Ter', min:23, max:35, rain:0, icon:'sun'}, {label:'Qua', min:24, max:35, rain:1, icon:'sun'}, {label:'Qui', min:23, max:34, rain:2, icon:'sun-cloud'}, {label:'Sex', min:23, max:34, rain:0, icon:'sun'}, {label:'Sáb', min:24, max:35, rain:1, icon:'sun'}, {label:'Dom', min:23, max:34, rain:0, icon:'sun'}] }
  }
];
