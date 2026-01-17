---
name: optimize
description: Use when the user wants to optimize performance, improve PageSpeed score, check if the site is optimized, or before deploying to production. Covers images via CDN, critical CSS, defer, lazy loading, hero without animation, and Core Web Vitals.
---

# Skill: Optimize

Verificações e otimizações para melhorar o score no PageSpeed Insights.

---

## Checklist de Performance

### Imagens (maior impacto)

- TODAS usando Netlify CDN: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`
- Todas com width e height definidos
- Todas com alt (descritivo ou vazio `alt=""`)
- Hero: `loading="eager"` e `fetchpriority="high"`
- Demais: `loading="lazy"`

### Hero (LCP)

- Sem animação de entrada (sem AOS, sem fade, sem opacity:0)
- Renderiza instantaneamente
- Imagem principal com `fetchpriority="high"`

### CSS

- CSS crítico inline no head (estilos do hero)
- Resto do CSS com link normal
- Sem CSS não utilizado

### JavaScript

- Scripts no final do body
- Scripts não-críticos com `defer`
- Nenhum JS bloqueando render

### Fonts

- Google Fonts com `display=swap`
- Preconnect para fonts.googleapis.com e fonts.gstatic.com

---

## CSS Crítico (Inline)

Para melhorar o LCP, coloque os estilos do hero inline no head:

```html
<head>
  <style>
    /* Apenas estilos do hero */
    .hero { ... }
    .hero-title { ... }
    .btn { ... }
  </style>
  <link rel="stylesheet" href="style.css">
</head>
```

---

## Netlify Image CDN

Sempre use. Otimiza formato e tamanho automaticamente.

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

---

## Defer para Scripts

```html
<!-- Scripts não-críticos -->
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js" defer></script>
<script src="script.js" defer></script>
```

---

## Testando

1. Execute o PageSpeed Insights: https://pagespeed.web.dev/
2. Meta: 90+ em Performance
3. Verifique Core Web Vitals: LCP, FID, CLS

---

## Problemas Comuns

**LCP alto:** Imagem do hero muito grande ou sem CDN. Use CDN com w= apropriado.

**CLS alto:** Imagens sem width/height. Adicione as dimensões.

**Render blocking:** CSS ou JS no head sem defer. Mova para o final do body ou use defer.

**Fonts piscando:** Falta display=swap no Google Fonts.
