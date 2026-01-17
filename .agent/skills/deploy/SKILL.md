---
name: deploy
description: Use when the user wants to publish, deploy, upload the site, put it online, or host it. Covers Git, GitHub via gh CLI, Netlify init, Deploy Previews via PR to save build minutes, and pre-deploy checks.
---

# Skill: Deploy

GitHub + Netlify. Deploy automático via CI/CD.

---

## Fluxo Completo

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Versão inicial"

# 2. Criar repositório no GitHub e fazer push
gh repo create nome-do-projeto --public --source=. --push

# 3. Conectar ao Netlify
netlify init
```

Quando solicitado no `netlify init`:
- Create & configure a new site: Yes
- Team: selecione o time do usuário
- Site name: nome desejado (será a URL: nome.netlify.app)
- Build command: deixe VAZIO (Enter)
- Publish directory: . (ponto)

---

## Deploy Previews (IMPORTANTE)

**O Netlify cobra por minutos de build.** Para evitar custos desnecessários:

- Commits para `main` = deploy de produção (usa minutos de build)
- Pull Requests = Deploy Preview (link temporário para testar)

**Fluxo recomendado para alterações:**

```bash
# Criar branch para alterações
git checkout -b feat/nome-da-feature

# Fazer alterações...
git add .
git commit -m "Descrição das alterações"
git push -u origin feat/nome-da-feature

# Criar PR no GitHub
gh pr create --title "Título" --body "Descrição"
```

O Netlify automaticamente cria um Deploy Preview com URL tipo:
`deploy-preview-123--nome-do-site.netlify.app`

Use este link para testar. Só faça merge para main quando aprovado.

---

## Verificações Pré-Deploy

Antes de subir, verifique:

- Todas as imagens usam Netlify CDN (`/.netlify/images?url=`)
- Imagens têm width, height e alt
- Hero não tem animação de entrada
- Formulário funcionando (teste o envio)
- Site responsivo (teste no mobile)
- Console sem erros
- Links funcionando

---

## Comandos Úteis

**Git:**
- `git status` - ver status
- `git add .` - adicionar tudo
- `git commit -m "msg"` - commitar
- `git push` - enviar

**GitHub CLI:**
- `gh repo create nome --public --source=. --push` - criar repositório
- `gh pr create --title "x" --body "y"` - criar PR
- `gh pr list` - listar PRs

**Netlify CLI:**
- `netlify dev` - servidor local
- `netlify status` - status do site
- `netlify open` - abrir site no navegador
- `netlify deploy --prod` - deploy manual (emergência)

---

## Domínio Personalizado

No dashboard do Netlify: Site settings > Domain management > Add custom domain

DNS necessário:
- A Record: @ > 75.2.60.5
- CNAME: www > seu-site.netlify.app
