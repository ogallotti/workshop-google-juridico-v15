---
name: forms
description: Use when creating or modifying contact forms, lead capture forms, or any form with a phone field. Includes intl-tel-input with masks, email validation, and Netlify Forms integration.
---

# Skill: Forms

Formulários com validação internacional de telefone e Netlify Forms.

---

## Estrutura Base

O template já inclui um formulário funcional no index.html. Use-o como base.

```html
<form
  name="contato"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  data-form
>
  <input type="hidden" name="form-name" value="contato">
  <p hidden><label>Não preencha: <input name="bot-field"></label></p>

  <div class="form-group">
    <label class="form-label" for="nome">Nome</label>
    <input type="text" id="nome" name="nome" class="form-input" required autocomplete="name">
  </div>

  <div class="form-group">
    <label class="form-label" for="email">E-mail</label>
    <input type="email" id="email" name="email" class="form-input" required autocomplete="email">
  </div>

  <div class="form-group">
    <label class="form-label" for="telefone">WhatsApp</label>
    <input type="tel" id="telefone" name="telefone" class="form-input" required autocomplete="tel">
  </div>

  <div class="form-feedback"></div>
  <button type="submit" class="btn">Enviar</button>
</form>
```

---

## Atributos Necessários para Netlify Forms

- `name="nome-do-form"` - identificador no dashboard do Netlify
- `data-netlify="true"` - ativa o Netlify Forms
- `netlify-honeypot="bot-field"` - anti-spam
- `<input type="hidden" name="form-name" value="nome-do-form">` - necessário para funcionar

---

## intl-tel-input

Já configurado no script.js com:
- Strict mode (strictMode: true) - máscara obrigatória
- Brasil como país padrão
- Validação automática do número
- Formato internacional no envio

CDNs já estão no index.html:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/css/intlTelInput.css">
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/intlTelInput.min.js"></script>
```

---

## Validações Incluídas

O script.js já valida:
- Campos obrigatórios
- E-mail (formato + bloqueia domínios temporários)
- Telefone (via intl-tel-input)
- Feedback visual de erro/sucesso

---

## Dashboard do Netlify Forms

Após o deploy, os envios aparecem em: Site > Forms > [nome do formulário]

Configure notificações: Site > Forms > Form notifications (Email, Slack, Webhook)

---

## Solução de Problemas

**Formulário não aparece no Netlify:** Verifique data-netlify="true" e o campo hidden form-name. Faça deploy para produção.

**Telefone não valida:** Verifique se o utils.js do intl-tel-input carregou.

**Bandeiras não aparecem:** Verifique se o CSS do intl-tel-input carregou.
