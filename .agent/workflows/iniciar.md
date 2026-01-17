---
description: iniciar
---

# Instruções

Você está iniciando um novo projeto de landing page usando o template Método Zero v15.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Lê os arquivos base do template
- Faz perguntas ao usuário sobre o projeto
- Explica o fluxo de trabalho

Este workflow NÃO:
- Cria a página
- Escreve código
- Cria copy
- Faz design
- Executa nenhuma etapa seguinte

## Estrutura do Projeto

Este é um template estático sem build step:
- `index.html` - Página principal
- `style.css` - Reset CSS + estilos
- `script.js` - AOS (animações scroll) + Form com intl-tel-input
- `netlify.toml` - CDN de imagens + redirects
- `images/` - Pasta para imagens

## Fluxo de Trabalho v15

O Método Zero v15 segue um fluxo em etapas:

1. **/copy** - Preparar os textos persuasivos
2. **/design** - Definir identidade visual com demonstração real (hero + 1 seção)
3. **/layout** - Especificação detalhada de diretor de arte para todas as seções
4. **/build** - Execução da especificação em código

## Sua Primeira Tarefa

1. Leia o arquivo `index.html` para entender a estrutura atual
2. Leia o arquivo `style.css` para ver os estilos base
3. Pergunte ao usuário sobre o projeto:
   - Qual é o produto/serviço?
   - Quem é o público-alvo?
   - Qual é o objetivo principal da página? (capturar leads, vender, informar)
   - O usuário já tem copy pronta ou precisa criar?
   - O usuário já tem imagens ou vai precisar de placeholders?

## Regras Importantes

- Comunique-se sempre em Português do Brasil
- NUNCA instale pacotes npm/node
- NUNCA use emojis
- Use sempre o Netlify CDN para imagens: `/.netlify/images?url=/images/foto.jpg&w=800&q=80`
- O hero NUNCA deve ter animação de entrada (mas deve ter animações pós-carregamento)
- Todos os outros elementos devem ter `data-aos="fade-up"` ou similar
- Preserve a estrutura do form existente (intl-tel-input + Netlify Forms)
- Use caminhos absolutos (começando com `/`)

## Ao Finalizar

Após coletar as informações do usuário:

1. Faça um resumo do que foi entendido sobre o projeto
2. Sugira a próxima etapa: "Quando quiser, use `/copy` para começarmos a criar os textos da página."
3. **PARE COMPLETAMENTE**

## IMPORTANTE: Regras de Comportamento

- NUNCA continue para a próxima etapa automaticamente
- NUNCA comece a criar código, copy ou design
- NUNCA execute ações sem o usuário solicitar explicitamente
- Após apresentar o resumo e sugerir o próximo passo, AGUARDE instrução do usuário
- Se o usuário não der instrução, NÃO faça nada
