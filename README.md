# Painel Clima Municípios

Painel web responsivo para consultar municípios de uma base local e exibir clima atual e previsão horária. A interface funciona offline com dados locais e pode consultar o Open-Meteo quando a opção de atualização online é usada.

## Recursos

- Busca e filtro de municípios brasileiros.
- Estado local para a demonstração funcionar sem API.
- Consulta opcional ao Open-Meteo.
- Estados de carregamento, erro e offline.
- Gráficos SVG acessíveis com `aria-label`.
- Layout responsivo e navegação por teclado.

## Executar

Abra `index.html` no navegador ou sirva a pasta com:

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`. A busca e o modo local funcionam sem dependências ou build.

## Estrutura

- `index.html`: marcação e acessibilidade.
- `css/styles.css`: estilos responsivos.
- `js/data.js`: municípios e dados locais de demonstração.
- `js/app-core.js`: busca, integração climática e renderização.

## Fonte online

A atualização online utiliza a API pública [Open-Meteo](https://open-meteo.com/). O projeto mantém uma base local para que a interface continue demonstrável sem rede. Dados de demonstração não representam uma previsão oficial.

## Licença

MIT. Veja [LICENSE](LICENSE).

## Autor

Mateus Florido Pena — [GitHub](https://github.com/Mateusmfmd)
