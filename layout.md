# Layout Specification - Workshop Ecossistema Google Jurídico na Prática

## Linguagem Visual
**Tema:** Futuristic AI 2050 / Cyberpunk Clean / Scientific Sci-Fi
**Conceito:** Uma interface de "Gabinete Digital do Futuro". Não é apenas um site, é um HUD (Heads-Up Display) de uma nave ou supercomputador.

### Cores
- **Background Principal:** `#030014` (Deep Space Black)
- **Background Secundário:** `#0A051E` (Darker Nebula)
- **Texto Principal:** `#FFFFFF` (Pure White)
- **Texto Secundário:** `#94A3B8` (Starlight Silver)
- **Primary Neon:** `#00F0FF` (Cian Elétrico / Tron Blue) - Usado para tecnologia, dados, racionalidade.
- **Secondary Neon:** `#BD00FF` (Ultra Violet) - Usado para criatividade, magia da IA, transformação.
- **Accent Error:** `#FF2E2E` (Hologram Red) - Para "Problemas" e "Erros".
- **Accent Success:** `#00FF94` (Matrix Green) - Para "Soluções" e "Validado".
- **Glass Border:** `rgba(255, 255, 255, 0.1)`
- **Glass Surface:** `rgba(255, 255, 255, 0.03)`

### Tipografia
- **Headline/Display:** 'Space Grotesk', sans-serif
  - Pesos: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)
  - Uso: Títulos impactantes, números grandes, CTAs.
- **Body/UI:** 'Inter', sans-serif
  - Pesos: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Uso: Textos corridos, labels, cards de informação.

### Espaçamentos e Grid
- **Container Max-width:** 1200px
- **Padding Seção Desktop:** 120px vertical
- **Padding Seção Mobile:** 80px vertical
- **Grid Gap Padrão:** 32px
- **Border Radius Padrão:** 20px (Cards), 100px (Pills/Buttons)

### Tom de Animação
- **Physics:** Suave, magnética. Nada é estático.
- **Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (Exponencial suave)
- **Scroll:** Elementos deslizam para cima (`fade-up`) com sensação de peso.
- **Hover:** Brilho intenso, distorção cromática leve, levitação.

---

## Global Elements
- **Scanline Overlay:** Mantém em todas as seções (já implementado).
- **Cursor:** Se possível, customizado (círculo com dot central `#00F0FF`) que reage a links expandindo.
- **Selection:** `background: #00F0FF; color: #000;`

---

## Seção 1: Hero (Já implementado, manter refinamentos)

### Conteúdo
- **Headline:** "Apenas 1 dia para você dominar o Ecossistema Google na Análise Processual..."
- **Subheadline:** "Integre o poder de análise de provas do NotebookLM..."
- **Info Extra:** "Online e ao vivo | 09h30 às 17h | 28 de fevereiro"
- **CTA:** "QUERO ADQUIRIR AGORA"

### Layout & Visual
- **Background:** Canvas Neural Network (Partículas conectadas, "cérebro digital").
- **Headline:** Glow intenso. Efeito "Glitch" na palavra "dominar o Ecossistema Google".
- **CTA:** Botão Hollow com borda Neon Cyan. Hover: Preenchimento Cyan + Glow externo.

### Animações
- **Entrada:** Hero carrega instantaneamente.
- **Texto:** Fade-in com leve blur.
- **Background:** Canvas interativo (já especificado anterior).

---

## Seção 2: O Fim do Trabalho Braçal (Problema/Solução)

### Conteúdo
- **Título:** "O Fim do trabalho braçal no Direito e inteligência estratégica para todos os atores jurídicos."
- **Texto:** "Não importa se você redige sentenças..."
- **Cards:** Advogado, Magistrado, Servidor.

### Layout
- **Estrutura:** Cabeçalho centralizado (max-width 800px) + Grid de 3 Cards.
- **Cards Style:** Glassmorphism V2 (com Spotlight effect).
  - Ícones: Phosphor Icons (Thin/Light), 48px, cor Cyan Neon.
  - Advogado: Ícone `Gavel` ou `Scales`.
  - Magistrado: Ícone `Court` ou `Bank` (Coluna Romana).
  - Servidor: Ícone `Files` ou `Stack`.

### Interatividade
- **Spotlight:** Ao mover o mouse sobre o grid de cards, um "holofote" circular de luz (`radial-gradient`) segue o cursor, revelando as bordas dos cards.
- **Tilt:** Leve inclinação 3D nos cards ao mover o mouse.

### Tipografia
- **Título:** H2 Space Grotesk Bold 48px (Desktop). Destaque em "Fim do trabalho braçal" com gradiente Cyan -> Violet.
- **Card Title:** H3 Space Grotesk 24px.
- **Card Body:** Inter 16px, cor muted.

---

## Seção 3: Como Funciona (Revolução Jurídica)

### Conteúdo
- **Título:** "Como a IA e o Ecossistema Google Revoluciona a Produção Jurídica"
- **Subtítulo:** "A união do NotebookLM com o Gemini cria o 'Gabinete Digital' perfeito."
- **Cards:** Análise de Prova, Redação Jurídica, Segurança Técnica.

### Layout
- **Estrutura:** Z-Pattern ou 3 Colunas Horizontal (Step-by-Step).
- **Estilo:** Visual de "Pipeline de Processamento".
  - Card 1 (Input/Análise) -> Seta Neon Animada -> Card 2 (Processamento/Redação) -> Seta Neon Animada -> Card 3 (Output Seguro).

### Elementos Visuais
- **Fluxo:** Conectar os cards com uma linha pontilhada svg que tem um pulso de luz percorrendo-a infinitamente.
- **Card 1 (NotebookLM):** Ícone de "Brain" ou "Scan". Cor predominante: Azul Google.
- **Card 2 (Gemini):** Ícone de "Sparkle" ou "Pen". Cor predominante: Roxo Gemini.
- **Card 3 (Segurança):** Ícone de "ShieldCheck". Cor predominante: Verde Matrix.

### Animações
- **Scroll:** Os cards aparecem em sequência (Staggered fade-up).
- **Loop:** O pulso de luz na linha de conexão nunca para.

---

## Seção 4: Transformação (Benefícios Práticos)

### Conteúdo
- **Título:** "Como o Ecossistema Google Transforma Sua Rotina Jurídica"
- **Itens:** Análise Rápida, Gestão Inteligente, Argumentos Precisos, Organização Avançada.

### Layout
- **Grid:** 2x2 Bento Grid (Grid assimétrico se possível, ou 4 caixas iguais grandes).
- **Estilo:** "Data Blocks". Parecem blocos de dados de um servidor futurista.
- **Background:** Grid sutil ao fundo (`background-image` linear-gradient) apenas nesta seção.

### Tipografia & Ícones
- **Ícones:** Grandes (64px), opacidade 0.2 ao fundo do card, ou alinhados no topo-esquerda.
- **Item 1:** Ícone `MagnifyingGlass`.
- **Item 2:** Ícone `FileSearch`.
- **Item 3:** Ícone `Lightning`.
- **Item 4:** Ícone `Folders`.

### Interatividade
- **Hover:** O card acende (glow interno) na cor Cyan. O ícone fica sólido (opacidade 1).

---

## Seção 5: Expectativa

### Conteúdo
- **Título:** "O que esperar do Workshop"
- **Itens:** Instrutores Autoridade, Metodologia Prática, Inovação, Suporte.

### Layout
- **Style:** Lista Horizontal com ícones grandes flutuantes ou layout "Feature List" com checks estilizados.
- **Sugestão:** 4 Colunas simples. Ícones circulares com "halo" de neon.

### Cores
- **Checks/Ícones:** Gradiente Cyan -> Violet.

---

## Seção 6: Cronograma (Timeline Futurista)

### Conteúdo
- **Data/Hora:** 28 fev, 09h30 - 17h.
- **Pontos:** Início, Almoço, Retorno, Encerramento.

### Layout
- **Conceito:** Uma linha do tempo vertical brilhante (Laser Beam).
- **Estrutura:** Linha central neon vertical. Pontos (nós) brilham nos horários.
- **Cards de Horário:** Alternam esquerda/direita da linha (Desktop) ou todos à direita (Mobile).

### Visual Timeline
- **Linha:** `width: 2px`, background: `linear-gradient(to bottom, transparent, #00F0FF, #BD00FF, transparent)`.
- **Nós:** Círculos com `box-shadow` pulsante.
- **Typo:** Horários em Space Grotesk Mono (ou similar numérico), grandes (`32px`).

### Animação
- **Scroll Draw:** A linha "desce" (cresce height) conforme o usuário rola a página.

---

## Seção 7: Comparativo (Tabela "TvsX")

### Conteúdo
- **Título:** "Quem usa o Ecossistema Google..." vs "Quem Não Usa..."
- **Itens:** Gestão, Análise, Redação, etc.

### Layout
- **Estilo:** Tabela "Comparison Chart" estilo SaaS Pricing.
- **Colunas:**
  1. Feature (Texto alinhado esquerda)
  2. "Gabinete Digital" (Coluna destaque, fundo vidro sutil, borda neon verde/cyan)
  3. "Modo Antigo" (Coluna apagada, cinza, texto strike-through opcional ou cor muted)

### Visual Details
- **Coluna Good:** Checkmarks verdes neon ou Cyan.
- **Coluna Bad:** X vermelhos ou ícones de "Wait/Loading" laranja.
- **Row Hover:** Highlight na linha inteira para facilitar leitura.

---

## Seção 8: Por Que Participar + Conteúdo Programático

### Layout Combinação
- Vamos manter visualmente distintas mas conectadas.

### Por Que Participar
- **Estilo:** Texto grande, persuasivo. Lado esquerdo.
- **Bullets:** Lista com ícones de "Check-Circle" brilhantes.
- **CTA:** Botão grande, pulsando suavemente.

### Conteúdo Programático
- **Estilo:** Accordion (Sanfona) Futurista ou Lista Numerada Gigante.
- **Lista Numerada:**
  - Números (01, 02, 03...) enormes, fonte Outline (apenas contorno), opacidade baixa (0.3).
  - Título do módulo sobreposto.
  - Hover: Número preenche de cor sólida.

---

## Seção 9: Instrutores

### Conteúdo
- Felipe Damous e Rodrigo Terças. Bios.

### Layout
- **Grid:** 2 Colunas (Split).
- **Fotos:** Recortadas sem fundo (PNG), grayscale.
- **Efeito Hover:** Ao passar o mouse, a foto ganha cor e um "glitch" rápido revela o nome. Ou, foto em Circle Frame com borda anel de neon girando lentamente.
- **Bio:** Texto abaixo da foto, centralizado.

---

## Seção 10: Oferta (Pricing)

### Conteúdo
- **Preço:** R$47,00 (Destaque absurdo).
- **Lote:** Lote 0 (Escassez).
- **Barra de Progresso:** 35% preenchido.

### Layout
- **Card Principal:** O "Artefato". Um card central, largo, border multicolorida (Cyan+Purple animated).
- **Tipografia Preço:** Space Grotesk, 80px (Desktop), Bold. Cor: Neon Green ou White.
- **Barra de Progresso:** Estilo "Loading System Update". Background escuro, barra interna listrada (striped) animada movendo para direita.
- **CTA:** Botão "QUERO ADQUIRIR AGORA" o maior da página. Shake sutil a cada 5s.

### Elementos de Urgência
- Um contador regressivo (Countdown) estilo "Lançamento de Foguete" se houver data limite (opcional, foco no lote).

---

## Seção 11: Depoimentos & FAQ

### Depoimentos
- **Estilo:** Marquee horizontal (Scroll infinito lateral).
- **Cards:** Estilo "Tweet" ou "Chat Bubble" glassmorphism.

### FAQ
- **Estilo:** Accordion limpo.
- **Comportamento:** Apenas um aberto por vez.
- **Icon:** `+` vira `x` com rotação 45deg suave.

---

## Footer

### Conteúdo
- Disclaimer, Copyright.

### Layout
- Simples, centralizado.
- Logo discreto.
- Links sociais com efeito hover de "preenchimento líquido".

---

## Resumo Tecnologias CSS
- **Glassmorphism:** `backdrop-filter: blur(12px)`, `background: rgba(255,255,255,0.03)`.
- **Neon Glow:** `box-shadow`, `text-shadow`.
- **Gradients:** `linear-gradient` em textos e bordas.
- **Grid/Flexbox:** Layout estrutural.
- **Animations:** `@keyframes` para glitch, float, pulse.

---

**Nota Final do Diretor de Arte:**
Esta página não deve parecer um site de curso de direito. Deve parecer o site de uma startup de IA do Vale do Silício que acabou de captar Series A. O contraste entre o tema "Jurídico" (sério, tradicional) e "Futurista" (neon, tech) é o que vai vender a ideia de **inovação disruptiva**.

**APROVADO PARA BUILD.**
