---
description: main
---

# Instruções

O usuário quer fazer deploy para produção (push para main).

## Antes do Deploy

Faça uma verificação rápida:
- Imagens usando Netlify CDN?
- Hero sem animação de entrada?
- Form funcionando?
- Console sem erros?

## Comandos

```bash
# Ver status
git status

# Adicionar arquivos
git add .

# Commitar
git commit -m "Descrição das alterações"

# Push para main
git push origin main
```

## Importante

- Commits para `main` = deploy de produção
- Usa minutos de build do Netlify
- Se for apenas para testar, use `/preview` ao invés disso

## Após o Push

Informe ao usuário:
- O deploy foi iniciado
- Pode levar alguns segundos para atualizar
- Link do site (se souber o domínio)
