---
description: otimizar
---

# Instruções

Você vai otimizar a performance da landing page para melhorar o score no PageSpeed Insights.

## Antes de Começar

Leia o `index.html` e `style.css` atuais para analisar o que precisa ser otimizado.

## Checklist de Performance

### Imagens (maior impacto)
- [ ] TODAS usando Netlify CDN: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`
- [ ] Todas com width e height definidos
- [ ] Todas com alt (descritivo ou vazio `alt=""`)
- [ ] Hero: `loading="eager"` e `fetchpriority="high"`
- [ ] Demais: `loading="lazy"`

### Hero (LCP)
- [ ] Sem animação de entrada (sem AOS, sem fade, sem opacity:0)
- [ ] Renderiza instantaneamente
- [ ] Imagem principal com `fetchpriority="high"`

### CSS
- [ ] CSS crítico inline no head (estilos do hero)
- [ ] Resto do CSS com link normal
- [ ] Sem CSS não utilizado

### JavaScript
- [ ] Scripts no final do body
- [ ] Scripts não-críticos com `defer`
- [ ] Nenhum JS bloqueando render

### Fonts
- [ ] Google Fonts com `display=swap`
- [ ] Preconnect para fonts.googleapis.com e fonts.gstatic.com

## Exemplo de CSS Crítico Inline

```html
<head>
  <style>
    /* Apenas estilos do hero */
    .hero { ... }
    .hero-title { ... }
    .btn { ... }
  </style>
  <link rel="stylesheet" href="/style.css">
</head>
```

## Exemplo de Imagem Otimizada

```html
<!-- Hero (alta prioridade) -->
<img
  src="/.netlify/images?url=/images/hero.jpg&w=1200&q=80"
  width="1200"
  height="800"
  alt="Descrição"
  loading="eager"
  fetchpriority="high"
>

<!-- Demais (lazy) -->
<img
  src="/.netlify/images?url=/images/foto.jpg&w=800&q=80"
  width="800"
  height="600"
  alt="Descrição"
  loading="lazy"
>
```

## Sua Tarefa

1. Analise o código atual
2. Identifique problemas de performance
3. Aplique as correções necessárias
4. Liste o que foi otimizado

## Meta

Score 90+ em Performance no PageSpeed Insights.
