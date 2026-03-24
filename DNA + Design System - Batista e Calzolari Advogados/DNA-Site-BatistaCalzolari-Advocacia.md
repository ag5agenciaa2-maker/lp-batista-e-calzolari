# SITE DNA — BATISTA E CALZOLARI ADVOGADOS

**Nicho:** Advocacia Empresarial — Campo Grande, RJ. Foco em contencioso e consultivo para empresas (trabalhista, tributário, civil, contratos, recuperação de crédito, imobiliário).
**Posicionamento:** Escritório com décadas de solidez, transmitido via estética premium escura — o visitante sente autoridade silenciosa, seriedade institucional e confiança antes de ler uma linha do texto.
**Data de criação:** 2025 — Versão documentada em 2026-03-23

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--color-black` | `#0A0A0A` | Fundo primário de todas as seções principais |
| `--color-black-light` | `#141414` | Fundo de seções alternadas (Sobre, Localização, cards de serviço) |
| `--color-black-lighter` | `#1A1A1A` | Superfície de cards internos, gradientes de fundo |
| `--color-gold` | `#B08A57` | Acento primário: bordas, ícones, CTAs, labels |
| `--color-gold-light` | `#C9A961` | Estado hover de elementos dourados |
| `--color-gold-dark` | `#8B6F46` | Extremidades de gradientes dourados |
| `--color-white` | `#FFFFFF` | Textos principais, headings |
| `--color-cream` | `#F5F0E8` | Reservado (backgrounds claros alternativos, não usado no dark mode) |
| `--color-gray` | `#888888` | Textos secundários, body text, descrições |
| `--color-gray-light` | `#CCCCCC` | Textos terciários, metadados, datas |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| H1 (hero title) | Cormorant Garamond | 600 | `clamp(2.5rem, 8vw, 5.5rem)` → `clamp(3rem, 7vw, 6rem)` (768px+) → `clamp(4rem, 6vw, 7rem)` (1280px+) | Linha 3 com gradient clip dourado shimmer |
| H2 (section titles) | Cormorant Garamond | 600 | `1.875rem` (mobile) → `2.25rem` (768px+) → `3rem` (1024px+) | `line-height: 1.15` |
| H3 (card titles) | Cormorant Garamond | 600 | `1.5rem` | Transição de `#fff` → `#B08A57` no hover |
| H3 (depoimentos quote) | Cormorant Garamond | 400 italic | `1.5rem` (mobile) → `2.5rem` (768px+) | Aspas decorativas em ouro via `::before` |
| Labels de seção | DM Sans | 600 | `0.75rem` | `text-transform: uppercase`, `letter-spacing: 0.25em`, cor `--color-gold` |
| Body text | DM Sans | 400 | `1.125rem` | `line-height: 1.8`, cor `--color-gray` |
| Body small | DM Sans | 400 | `1rem` | Cards de serviço e FAQ |
| Navbar links | DM Sans | 500 | `0.875rem` | `letter-spacing: 0.05em`, efeito underline no `::after` |
| Números decorativos (timeline) | Cormorant Garamond | 700 | `2.25rem` | Cor `--color-gold`, contextualiza marcos históricos |
| Número dos cards | Cormorant Garamond | 600 | `~4rem` | `opacity: 0.1` normal → `0.2` hover, posição `top-right` |

### Estilo Geral

Interface **Editorial Jurídico-Luxo** construída sobre uma base quase completamente preta (`#0A0A0A`/`#141414`), onde o dourado quente (`#B08A57`) funciona como o único acento cromático com alta restrição de uso — nunca em fundos extensos, sempre em bordas, ícones, linhas divisoras e micro-textos. A tipografia combina o serif clássico Cormorant Garamond (para prestígio, autoiridade e elegância institucional) com o sans-serif neutro DM Sans (para legibilidade e modernidade funcional), criando o contraste arquetípico da advocacia premium contemporânea. O layout é denso, estruturado em seções de `padding: 6rem` com `max-width: 1280px`, priorizando hierarquia visual rigorosa e movimento de entrada controlado por `Intersection Observer` — nenhum elemento entra na tela sem coreografia.

---

## LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — NAVBAR

**Estrutura:** `position: fixed`, `top: 0`, `width: 100%`, `z-index: 1000`. Container flex com `justify-content: space-between`, `align-items: center`, `max-width: 1280px`. Padding lateral: `1.5rem` (mobile) → `3rem` (desktop).

**Fundo:** Pré-scroll: `background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)`. Pós-scroll (classe `.scrolled`): `background: rgba(10, 10, 10, 0.95)`, `backdrop-filter: blur(10px)`, `border-bottom: 1px solid rgba(176, 138, 87, 0.1)`. Todas as transições: `300ms ease`.

**Elementos Restritos:** Logo à esquerda com `transform: scale(1.6)` (altura `85px` → `70px` ao scrollar). Links de navegação centrais com `role="menubar"`. Botão CTA dourado à direita com `background: --color-gold`, `color: #000`, `padding: 0.625rem 1.25rem`, `text-transform: uppercase`, `letter-spacing: 0.1em`. Hamburger toggle visível apenas abaixo de `768px`.

**Animação:** Transição de fundo: `background 300ms ease`, `padding 300ms ease`, `box-shadow 300ms ease`. Logo height: `300ms ease`.

**Micro-interações:** Links: `::after` pseudo-element com `width: 0 → 100%` no hover, `height: 1px`, `background: --color-gold`, `transition: width 300ms ease`. CTA: `translateY(-2px)`, `background: --color-gold-light`, `box-shadow: 0 4px 20px rgba(176, 138, 87, 0.3)` — `300ms ease`.

**Diferenciador Visual:** O navbar usa gradiente transparente que se integra com o hero ao invés de fundo opaco fixo — cria profundidade imediata. O logo escalado 1.6x quebra proporções convencionais, gerando impacto de identidade ao primeiro acesso.

---

### SEÇÃO 2 — HERO

**Estrutura:** `height: 100vh`, `position: relative`, `overflow: hidden`. Container flex column com `justify-content: center`, padding-top para compensar navbar. Content com `max-width: 700px`.

**Fundo:** Imagem `hero-desktop-batistaecalzolari-...webp` (1920x1080px) em `background-size: cover`, `background-position: center`. Overlay: `rgba(0, 0, 0, 0.8)` em `position: absolute, inset: 0`.

**Elementos Restritos:** Linha decorativa `.hero-line` (ouro, `height: 2px`) acima do label. Label `.hero-label` "Desde 2014" — ouro, uppercase, `letter-spacing: 0.3em`, `font-size: 0.75rem`. Título H1 em 3 linhas empilhadas — linha 3 com gradient clip: `linear-gradient(110deg, #8B6F46 0%, #C9A961 30%, #FFFAEA 50%, #C9A961 70%, #8B6F46 100%)`, `-webkit-background-clip: text`, `color: transparent`. Subtítulo em gray. Dois CTAs em coluna: primário (ouro) + secundário (texto branco com underline dourado). Scroll indicator na base: linha vertical animada.

**Animação:** Sequência temporal orquestrada por `setTimeout`:
- `100ms–1500ms`: Imagem — `heroImageScale` (`scale(1.1) → scale(1)`, `opacity: 0 → 1`, `ease-out`)
- `500ms–1000ms`: Linha — `lineExpandCenter` (`width: 0 → 80px`, `ease`)
- `700ms–1500ms`: Label — `fadeUp` (`translateY(20px) → 0`, `opacity: 0 → 1`, `800ms ease`)
- `900ms/1050ms/1200ms`: Título (3 linhas com stagger 150ms cada) — `fadeUp` (`translateY(20px) → 0`, `900ms ease`)
- `1400ms–2200ms`: Subtítulo — `fadeUp` (`800ms`)
- `1600ms–2400ms`: CTAs — `fadeUp` (`800ms`)
- `2000ms–2800ms`: Scroll indicator — `fadeIn` (`800ms`)

**Micro-interações:** CTA primário: `translateY(-2px)`, `box-shadow: 0 8px 30px rgba(176, 138, 87, 0.4)`, `300ms ease`. CTA texto: border-bottom ouro aparece `300ms ease`. Scroll indicator: `scrollBounce` (`scaleY(1) → 0.5 → 1`, `2s ease-in-out infinite`).

**Diferenciador Visual:** O efeito shimmer na terceira linha do título (gradiente que vai de bronze escuro → ouro → quase branco → ouro → bronze) cria um destaque visual único sem depender de imagem ou ícone. A coreografia de entrada é rigorosamente cronometrada, transformando o carregamento em apresentação.

---

### SEÇÃO 3 — DOR E SOLUÇÃO

**Estrutura:** `padding: 6rem 0` (var `--space-24`). Grid de 1 coluna (mobile) → separação visual em duas sub-seções (problema acima, solução abaixo). `max-width: 1280px`, container com padding lateral.

**Fundo:** `background: #0A0A0A`. Linha de acento gold no topo da seção: `height: 1px`, `background: linear-gradient(to right, transparent, #B08A57, transparent)`. Solução box: `background: linear-gradient(135deg, #141414 0%, #1A1A1A 100%)`, `border: 1px solid rgba(176, 138, 87, 0.2)`, linha de acento gold no top da box.

**Elementos Restritos:** Seção Problema — label gold, título serif, `divisor-line` (60px ouro), corpo text gray, imagem à direita com borda-frame dourado via `::before` (`border: 1px solid rgba(176, 138, 87, 0.3)`, offset `12px 12px`). Seção Solução — card com imagem à esquerda (500px) e conteúdo à direita; label "Nossa Solução", título branco, texto gray.

**Animação:** Elementos com `[data-animate]`: `fadeUp` (`opacity: 0 → 1`, `translateY(30px) → 0`) ativado por `IntersectionObserver` com threshold `0.1`, rootMargin `-10%`.

**Micro-interações:** Imagem problema: hover `filter: grayscale(0%)` (de `grayscale(30%)`), `transform: scale(1.02)`, `300ms ease`. Card solução: border ouro intensifica de `0.2 → 0.4` no hover, `300ms ease`.

**Diferenciador Visual:** A estrutura narrativa problema→solução na mesma seção com hierarquia visual clara — a solução está visualmente "dentro de um card premium" (dark gradient + border gold), criando distinção sem mudança de seção ou scroll.

---

### SEÇÃO 4 — SERVIÇOS

**Estrutura:** `padding: 6rem 0`. Header centralizado. Grid: `grid-template-columns: 1fr` (mobile) → `repeat(2, 1fr)` (768px) → `repeat(3, 1fr)` (1024px). `gap: 1.5rem`.

**Fundo:** `background: #0A0A0A`. Dois radial gradients sutis nos cantos: `radial-gradient(ellipse 800px 600px at top-left, rgba(176,138,87,0.03), transparent)` e `at bottom-right`. Linha gold no topo da seção.

**Elementos Restritos:** Cada `.servico-card` — `position: relative`, ícone em box 56px (64px no desktop) com `border: 1px solid rgba(176,138,87,0.3)`, número decorativo `top: 1.5rem; right: 1.5rem` em `opacity: 0.1`. Título, descrição, lista com marcadores ouro (6px circle), link "ver mais" em uppercase gold.

**Animação:** `cardFadeUp` (`700ms cubic-bezier(0.4, 0, 0.2, 1)`): `opacity: 0 → 1`, `translateY(30px) → 0`. Stagger por índice: cada card com `delay: índice × 100ms`. Ativado por `IntersectionObserver`.

**Micro-interações:**
```css
.servico-card:hover {
  transform: translateY(-8px);
  border-color: rgba(176, 138, 87, 0.4);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(176,138,87,0.1);
  transition: all 300ms ease;
}
.servico-card:hover .servico-card-title { color: #B08A57; }
.servico-card:hover .servico-card-numero { opacity: 0.2; }
.servico-card:hover .servico-card-icon { transform: scale(1.1); }
/* Linha top: scaleX 0 → 1 no hover, 300ms ease */
```
Spotlight effect via `mousemove`:
```css
/* JavaScript injeta --mouse-x e --mouse-y */
background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),
  rgba(176, 138, 87, 0.06), transparent 40%);
```

**Diferenciador Visual:** O número decorativo em `opacity: 0.1` no canto superior direito de cada card cria profundidade sem poluir — ao hover ele intensifica (`0.2`), revelando informação contextual. O spotlight mouse-tracking por card é raro em sites jurídicos.

---

### SEÇÃO 5 — INSTITUCIONAL

**Estrutura:** `padding: 6rem 0`. Grid: `1fr` (mobile) → `1fr 1fr` (768px), `gap: 4rem`. Imagens em sub-grid `2 columns`, alturas `350px / 280px` (mobile) → `450px / 380px` (tablet).

**Fundo:** `background: #0A0A0A`.

**Elementos Restritos:** Imagens à direita (desktop) com `filter: grayscale(40%)`. Conteúdo à esquerda: label, título, divisor, texto. Diferenciais em grid `3 colunas`: número gold serif `2.25rem`, label uppercase gray, `border-top: 1px solid rgba(176,138,87,0.2)`.

**Animação:** `[data-animate]` com `fadeUp`, ativado por `IntersectionObserver`. Imagens com `slideIn` lateral.

**Micro-interações:** Imagens: `filter: grayscale(40%) → grayscale(0%)` no hover, `transform: scale(1.03)`, `500ms ease`. Diferenciais: `border-top-color` intensifica no hover, `300ms ease`.

**Diferenciador Visual:** As duas imagens em grid com alturas diferentes (escalonadas) criam ritmo visual assimétrico que evita o layout "foto quadrada genérica". O grayscale parcial mantém a austeridade sem apagar o contexto visual.

---

### SEÇÃO 6 — SOBRE / TIMELINE

**Estrutura:** `padding: 6rem 0`. `background: #141414`. Layout: logo centralizado no topo (250px × 180px), seguido de linha do tempo.

**Fundo:** `background: var(--color-black-light)` (`#141414`). Logo com `filter: invert(1) brightness(2)` (versão branca).

**Elementos Restritos:** Timeline horizontal (768px+) / vertical (mobile). Linha de conexão: `1px solid rgba(176, 138, 87, 0.3)`, `top: 20px`. Marcadores: círculo `14px`, `border: 3px solid #B08A57`, `background: #B08A57`. Cada item: ano em gold uppercase, título serif white, texto gray.

**Animação:** `slideIn` (`700ms ease-out`): `translateX(-60px) → 0`, `opacity: 0 → 1`. Stagger `150ms` por item. Ativado por `IntersectionObserver`.

**Micro-interações:** Marcadores da timeline: `transform: scale(1.3)`, `box-shadow: 0 0 10px rgba(176,138,87,0.5)` no hover, `300ms ease`. Títulos: cor `#fff → #B08A57`, `300ms ease`.

**Diferenciador Visual:** A timeline de fundação com marcos históricos é incomum em landing pages — transmite longevidade e confiança institucional de forma visual em vez de textual. A entrada lateral (`translateX`) contrasta com o `fadeUp` padrão do restante.

---

### SEÇÃO 7 — DEPOIMENTOS

**Estrutura:** `padding: 6rem 0`. `background: linear-gradient(135deg, #0A0A0A 0%, #141414 100%)`. Layout flex: `column` (mobile) → `row` (768px).

**Fundo:** Gradiente diagonal sutil entre os dois tons de preto, criando profundidade sem cor.

**Elementos Restritos:** 5 estrelas douradas `★` com `aria-label`. Aspas tipográficas em gold via `::before` com Cormorant Garamond italic grande (`font-size: 6rem`, `opacity: 0.3`, `position: absolute`). Quote em serif italic. Nome do autor em serif white. Meta (cargo/empresa) em gray small. Entre depoimentos: linha divisora vertical gold (`width: 1px`, `height: 80px` mobile → `120px` desktop, `background: linear-gradient(to bottom, transparent, #B08A57, transparent)`).

**Animação:** `scaleIn` (`700ms ease-out`): `scale(0.95) → scale(1)`, `opacity: 0 → 1`. Stagger `200ms` por item.

**Micro-interações:** Card de depoimento: `border-color rgba(176,138,87,0.2) → 0.4` no hover, `translateY(-4px)`, `300ms ease`.

**Diferenciador Visual:** As aspas decorativas tipográficas gigantes (via `::before`, `opacity: 0.3`) atrás do texto criam camada Z visual sem js. A linha divisora com gradiente entre depoimentos substitui o separador genérico (linha horizontal opaca).

---

### SEÇÃO 8 — FAQ

**Estrutura:** `padding: 6rem 0`. `max-width: 800px`, `margin: 0 auto`. Lista de `<details>` elements para acessibilidade semântica nativa.

**Fundo:** `background: #0A0A0A`. Cards `<details>`: `background: #141414`.

**Elementos Restritos:** Cada item: `border: 1px solid rgba(176,138,87,0.1)`, `border-radius: 4px`. Question em `.faq-question` com flex `space-between`: texto serif `1.125rem` + ícone plus/minus (via `::before` e `::after`). Answer: `padding: 0 1.5rem 1.5rem`, texto gray, `line-height: 1.8`.

**Animação:** Entrada por `[data-animate]` com `fadeUp`. Abertura/fechamento: `max-height` transition via JS (não CSS nativo `<details>`) para controlar animação suave.

**Micro-interações:** Item hover: `border-color rgba(176,138,87,0.1) → 0.3`, `300ms ease`. Question hover: `color: #fff → #B08A57`, `300ms ease`. Ícone plus: rotação `0° → 45°` ao abrir via transform, `300ms ease`.

**Diferenciador Visual:** `<details>` semântico nativo para acessibilidade máxima, com comportamento de acordeão (fecha os outros ao abrir um) implementado via JS. O ícone não é uma seta genérica — é um `+` formado por `::before` e `::after` que rota para `×`.

---

### SEÇÃO 9 — LOCALIZAÇÃO

**Estrutura:** `padding: 6rem 0`. `background: #141414`. Grid de endereços: `1fr` (mobile) → `repeat(2, 1fr)` (768px) → `repeat(4, 1fr)` (1024px). Mapa abaixo em `height: 350px` (mobile) → `450px` (tablet).

**Fundo:** `background: var(--color-black-light)`. Card principal com `background: linear-gradient(135deg, #B08A57 0%, #8B6F46 100%)` — único elemento com fundo dourado sólido extenso em todo o site.

**Elementos Restritos:** Cards `.endereco-card`: `padding: 1.5rem`, `border: 1px solid rgba(176,138,87,0.2)`. Card principal `.endereco-principal`: fundo gold, `color: #000` (texto preto), destaque visual máximo. Label uppercase gold `0.75rem`, título serif `1.125rem`, endereço `0.875rem`.

**Animação:** `[data-animate]` com `fadeUp`. Mapa: `opacity: 0 → 1` com `800ms ease`.

**Micro-interações:**
```css
.endereco-card:hover {
  border-color: rgba(176, 138, 87, 0.5);
  transform: translateY(-4px);
  transition: all 300ms ease;
}
.endereco-principal:hover {
  box-shadow: 0 10px 30px rgba(176, 138, 87, 0.2);
}
```

**Diferenciador Visual:** O card principal com fundo dourado sólido (único em todo o site) cria hierarquia visual imediata entre unidades. A inversão de cor (texto preto em fundo dourado) é o único momento de paleta reversa.

---

### SEÇÃO 10 — CONTATO

**Estrutura:** `padding: 6rem 0`. `background: #0A0A0A`. Grid: `1fr` (mobile) → `1fr 1fr` (1024px). Lado esquerdo: info de contato. Lado direito: formulário.

**Fundo:** Background multi-layer no lado esquerdo: gradiente escuro + imagem `formulario-batistaecalzolari-...webp` com overlay `rgba(0,0,0,0.85)`. Formulário wrapper: `background: #141414`, `border: 1px solid rgba(176,138,87,0.1)`, `padding: 2rem`.

**Elementos Restritos:** Info: label, título, divisor, dados de contato (telefone, WhatsApp, horário), links sociais. Formulário: grid `1fr` (mobile) → `1fr 1fr` (1024px). Campos: nome, email (linha), telefone, assunto (linha), mensagem (full-width). Botão submit full-width mobile, normal desktop.

**Animação:** `[data-animate]` com `fadeUp` bilateral.

**Micro-interações:**
```css
.form-input:focus, .form-select:focus, .form-textarea:focus {
  border-color: #B08A57;
  box-shadow: 0 0 0 3px rgba(176, 138, 87, 0.1);
  outline: none;
  transition: all 150ms ease;
}
.form-input:hover { border-color: rgba(176, 138, 87, 0.4); }
.form-error { color: #ef4444; font-size: 0.875rem; }
.form-success {
  background: rgba(176, 138, 87, 0.1);
  border-left: 3px solid #B08A57;
  padding: 1rem;
}
```
Botão submit com estado loading: spinner `spin` (`1s linear infinite`), texto muda para "Redirecionando para o WhatsApp...".

**Diferenciador Visual:** Formulário que não envia e-mail — redireciona para WhatsApp com mensagem pré-formatada com todos os dados. O sucesso não é uma página nova, é feedback inline com border-left dourada. A integração WhatsApp reduz fricção no nicho jurídico.

---

### SEÇÃO 11 — FOOTER

**Estrutura:** `border-top: 1px solid rgba(176,138,87,0.15)`. Footer main: `padding: 35px 0 30px`. Grid: `repeat(4, 1fr)` (1024px) → `repeat(2, 1fr)` (768px) → `1fr` (mobile). Footer bottom: `padding: 20px`, flex `space-between` (desktop) → stacked (mobile).

**Fundo:** `background: #0A0A0A`.

**Elementos Restritos:** 4 colunas — (1) Brand: logo `filter: invert(1)`, descrição, redes sociais. (2) Links rápidos. (3) Áreas de atuação. (4) Dados de contato. Bottom: copyright + links legais + crédito dev.

**Animação:** Sem animação de entrada — footer é estático intencionalmente.

**Micro-interações:** Links: `color: #888 → #B08A57`, `150ms ease`. Social icons: `background: rgba(176,138,87,0.1) → 0.2`, `border-color` intensifica, `translateY(-2px)`, `300ms ease`.

**Diferenciador Visual:** Footer com 4 colunas informativas completas ao invés do rodapé mínimo genérico — reforça autoridade e facilita navegação interna sem volta ao topo.

---

## COMPONENTES REUTILIZÁVEIS

### Botões

```css
/* .btn-primary */
background: #B08A57;
color: #000000;
border: 1px solid #B08A57;
padding: 1rem 2rem;        /* var(--space-4) var(--space-8) */
font-family: 'DM Sans', sans-serif;
font-size: 0.875rem;
font-weight: 500;
text-transform: uppercase;
letter-spacing: 0.15em;
border-radius: 0;          /* SEM border-radius — intencionalmente rígido */
cursor: pointer;
transition: all 300ms ease;

/* hover state */
background: #C9A961;
transform: translateY(-2px);
box-shadow: 0 8px 30px rgba(176, 138, 87, 0.4);
```

```css
/* .btn-outline */
background: transparent;
color: #FFFFFF;
border: 1px solid #B08A57;
padding: 1rem 2rem;
/* hover: background #B08A57, color #000, translateY(-2px) */
transition: all 300ms ease;
```

```css
/* .btn-text */
background: transparent;
color: #FFFFFF;
border: none;
border-bottom: 1px solid transparent;
padding: 0;
font-weight: 500;
/* hover: border-bottom-color #B08A57, translateY(-1px) */
transition: all 300ms ease;
```

### Inputs e Formulário

```css
/* .form-input, .form-select, .form-textarea */
background: #0A0A0A;
border: 1px solid rgba(176, 138, 87, 0.2);
color: #FFFFFF;
padding: 0.75rem 1rem;
font-family: 'DM Sans', sans-serif;
font-size: 1rem;
border-radius: 0;          /* SEM border-radius */
width: 100%;
transition: border-color 150ms ease, box-shadow 150ms ease;

/* :hover */
border-color: rgba(176, 138, 87, 0.4);

/* :focus */
border-color: #B08A57;
box-shadow: 0 0 0 3px rgba(176, 138, 87, 0.1);
outline: none;

/* .form-label */
color: #FFFFFF;
font-size: 0.875rem;
font-weight: 500;
margin-bottom: 0.5rem;
display: block;

/* .form-error */
color: #ef4444;
font-size: 0.875rem;
margin-top: 0.25rem;
```

### Cards de Serviço

```css
/* .servico-card */
position: relative;
background: linear-gradient(145deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%);
border: 1px solid rgba(176, 138, 87, 0.15);
padding: 2rem;             /* mobile: 2rem | tablet/desktop: 2.5rem */
border-radius: 0;
overflow: hidden;
transition: transform 300ms ease, border-color 300ms ease, box-shadow 300ms ease;

/* :hover */
transform: translateY(-8px);
border-color: rgba(176, 138, 87, 0.4);
box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(176, 138, 87, 0.1);

/* .servico-card-icon */
width: 56px;               /* desktop: 64px */
height: 56px;              /* desktop: 64px */
border: 1px solid rgba(176, 138, 87, 0.3);
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1.5rem;
transition: transform 300ms ease;
/* :hover → transform: scale(1.1) */
```

### Section Label (reutilizável)

```css
/* .section-label */
font-family: 'DM Sans', sans-serif;
font-size: 0.75rem;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.25em;
color: #B08A57;
margin-bottom: 1rem;
display: block;
```

### Divisor Line (reutilizável)

```css
/* .divisor-line */
width: 0;                  /* inicia em 0, animado para 60px */
height: 1px;
background: #B08A57;
margin-bottom: 1.5rem;
transition: width 800ms ease;
/* ao entrar na viewport: width → 60px */
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **Hero com imagem de "aperto de mão" ou "balança da justiça" em stock photo genérica** — O hero usa fotografia real do escritório/equipe com overlay escuro e efeito de entrada `heroImageScale`, resultando em identidade única e não clip-art jurídico.

❌ **Fundo branco ou cinza claro com azul corporativo genérico** — O site inteiro opera em paleta escura (`#0A0A0A/141414`) com único acento dourado quente (`#B08A57`), quebrando o padrão "azul de escritório" ubíquo em sites jurídicos.

❌ **Botões com `border-radius: 8px` ou arredondamentos amigáveis** — Todos os botões, inputs e cards usam `border-radius: 0` — cantos retos que comunicam rigor, seriedade e postura formal sem suavização desnecessária.

❌ **CTA "Fale Conosco" enviando para um e-mail genérico ou formulário com noreply@** — O formulário inteiro é convertido em mensagem WhatsApp pré-formatada via `wa.me`, eliminando fricção e aumentando taxa de conversão com ferramentas que o público jurídico já usa.

❌ **Seção "Nossos Serviços" como lista de texto corrido sem hierarquia** — Cards de serviço com número decorativo, ícone em box com border, spotlight mouse-tracking e `translateY(-8px)` no hover — cada serviço é tratado como produto com identidade visual própria.

❌ **Tipografia monofamiliar: sans-serif em tudo** — Combinação deliberada de Cormorant Garamond (prestígio, elegância, peso institucional) para headings + DM Sans (clareza, modernidade) para body, criando contraste tipográfico que posiciona o escritório acima da concorrência digital.

❌ **Animações de entrada simultâneas (tudo aparece de uma vez)** — Cada seção tem orquestração temporal própria: hero com 8 elementos em sequência cronometrada por `setTimeout`, cards com stagger de `100ms`, timeline com `150ms`, depoimentos com `200ms` — nenhum elemento entra sem coreografia.

❌ **Footer minimalista com apenas copyright** — Footer informativo em 4 colunas (brand, navegação, áreas de atuação, contato) transforma o rodapé em recurso de conversão secundário e reforço de autoridade.

❌ **Navbar que some (hidden on scroll) ou sempre sólida** — Navbar híbrida: `gradient-to-transparent` pré-scroll (integração visual com hero) + `rgba(10,10,10,0.95)` com `backdrop-filter: blur(10px)` pós-scroll. Logo redimensiona de `85px → 70px`, reforçando a transição sem saltos visuais.

❌ **FAQ com accordion JavaScript pesado ou lib externa** — FAQ usa `<details>` semântico nativo com comportamento de acordeão controlado por ~15 linhas de JS vanilla, sem dependências externas, com acessibilidade completa e ícone `+/×` formado por pseudo-elementos CSS puros.
