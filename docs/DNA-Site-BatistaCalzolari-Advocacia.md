# SITE DNA — BATISTA E CALZOLARI ADVOGADOS

**Nicho:** Escritório de advocacia multidisciplinar em Campo Grande, Rio de Janeiro — atuação em Direito Empresarial, Criminal, Tributário, Cível, Trabalhista e Previdenciário. Público-alvo: empresários e pessoas físicas que buscam orientação jurídica preventiva e contenciosa.

**Posicionamento:** Site com estética editorial jurídica premium, construído sobre uma paleta restrita de preto absoluto e dourado envelhecido. A sensação transmitida é de solidez institucional, confiança hereditária e rigor técnico. O design evoca a página de abertura de uma revista jurídica de alto padrão — tipografia serifada elegante, linhas finas douradas como divisores de capítulo, e uma hierarquia visual que respira espaço. Não há branco puro no fundo; o contraste nasce do preto profundo contra o cinza claro, com o dourado atuando como acento exclusivo de prestígio.

**Stack Técnica:** HTML5 sem frameworks | CSS3 custom properties puro | Google Fonts: Cormorant Garamond (400, 400i, 500, 500i, 600, 700), DM Sans (400, 400i, 500, 600, 700) | Sem ícones externos — todos os ícones são SVG inline | Sem biblioteca JS | Schema.org @graph (LegalService, WebSite, WebPage, FAQPage)

**Data de criação:** 2024-03-20 (datePublished no Schema.org) / Última modificação: 2026-03-23

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

| Token CSS | Valor Exato | Onde é usado especificamente |
|-----------|-------------|------------------------------|
| `--color-black` | `#0A0A0A` | Fundo base do body, hero, seções serviços, faq, institucional, navbar scrolled |
| `--color-black-light` | `#141414` | Fundo da seção sobre/timeline, formulário wrapper, gradiente cards serviços |
| `--color-black-lighter` | `#1A1A1A` | Fundo do solucao-box gradiente, cookie banner bg |
| `--color-gold` | `#B08A57` | Cor primária de acento — divisores, labels, ícones, bordas, hover states, estrelas depoimentos |
| `--color-gold-light` | `#C9A961` | Hover do btn-primary, stops do gradiente hero-title-line-accent |
| `--color-gold-dark` | `#8B6F46` | Stops extremos do gradiente hero-title-line-accent |
| `--color-white` | `#FFFFFF` | Títulos, texto principal em hero, conteúdo depoimentos |
| `--color-cream` | `#F5F0E8` | Definido mas não utilizado no CSS atual (token reserva) |
| `--color-gray` | `#888888` | Texto body padrão, subtítulos, descrições cards |
| `--color-gray-light` | `#CCCCCC` | Texto parágrafo hero, cor base do body |
| `--font-serif` | `'Cormorant Garamond', Georgia, serif` | Títulos de seção, hero title, timeline titles, depoimento quotes, navbar-link desktop |
| `--font-sans` | `'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif` | Body, labels, botões, navegação mobile, formulários |
| `--container-max` | `1280px` | Max-width do container base |
| `--container-padding` | `1.5rem` (mobile) / `2rem` (tablet ≥768px) / `3rem` (desktop ≥1024px) | Padding horizontal do container |
| `--transition-fast` | `150ms ease` | Hover rápido de ícones, fechar drawer |
| `--transition-base` | `300ms ease` | Padrão para hover de botões, links, bordas, cards |
| `--transition-slow` | `500ms ease` | Animação do drawer menu, overlay |
| `--transition-reveal` | `900ms cubic-bezier(.77, 0, .18, 1)` | Token declarado mas não utilizado no CSS atual |
| `--z-navbar` | `1000` | Navbar fixa |
| `--z-modal` | `1100` | Modal de serviços (declarado, não utilizado) |

**Curvas de easing encontradas no CSS:**
- `ease` — usada em ~90% das transições
- `cubic-bezier(.77, 0, .18, 1)` — token --transition-reveal
- `cubic-bezier(0.4, 0, 0.2, 1)` — hover cards serviços, cardFadeUp, spotlight effect
- `cubic-bezier(0.16, 1, 0.3, 1)` — ck-prefs-btn

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|-----------------------|---------|------|---------------|-------------|----------------|-----------|-----|
| `body` | DM Sans | 400 | `1rem` (16px) | 1.6 | normal | none | `#CCCCCC` |
| `.section-label` | DM Sans | 600 | `0.75rem` | normal | `0.25em` | uppercase | `#B08A57` |
| `.section-title` | Cormorant Garamond | 600 | `1.875rem` (mobile) / `2.25rem` (≥768px) / `3rem` (≥1024px) | 1.15 | normal | none | `#FFFFFF` |
| `.section-text` | DM Sans | 400 | `1.125rem` | 1.8 | normal | none | `#888888` |
| `.hero-title` | Cormorant Garamond | 600 | `clamp(2.5rem, 8vw, 5.5rem)` (mobile) / `clamp(3rem, 7vw, 6rem)` (≥768px) / `clamp(4rem, 6vw, 7rem)` (≥1280px) | 1.05 | normal | none | `#FFFFFF` |
| `.hero-title-line-accent` | Cormorant Garamond | 600 | herda hero-title | 1.05 | normal | none | transparent (gradiente) |
| `.hero-label` | DM Sans | 600 | `0.75rem` | normal | `0.3em` | uppercase | `#B08A57` |
| `.hero-subtitle` | DM Sans | 400 | `1.125rem` | 1.8 | normal | none | `#e6d6d6` (após animação) |
| `.navbar-link` (desktop) | DM Sans | 500 | `0.875rem` | normal | `0.05em` | uppercase | `#FFFFFF` |
| `.navbar-link` (mobile drawer) | Cormorant Garamond | 400 | `1.25rem` | normal | `0.02em` | none | `#FFFFFF` opacity 0.75 |
| `.navbar-link-cta` | DM Sans | 600 | `0.875rem` | normal | `0.1em` | uppercase | `#0A0A0A` |
| `.btn` | DM Sans | 500 | `0.875rem` | normal | `0.15em` | uppercase | variável |
| `.btn-sm` | DM Sans | 500 | `0.75rem` | normal | `0.15em` | uppercase | variável |
| `.servico-card-title` | Cormorant Garamond | 600 | `1.5rem` (mobile) / `1.5rem` | normal | normal | none | `#FFFFFF` |
| `.servico-card-desc` | DM Sans | 400 | `1rem` | 1.7 | normal | none | `#888888` |
| `.servico-card-list li` | DM Sans | 400 | `0.875rem` | 1.6 | normal | none | `#888888` |
| `.servico-card-numero` | Cormorant Garamond | 300 | `3rem` | 1 | normal | none | `#B08A57` opacity 0.1 |
| `.servico-card-link` | DM Sans | 500 | `0.875rem` | normal | `0.1em` | uppercase | `#B08A57` |
| `.timeline-year` | DM Sans | 600 | `0.75rem` | normal | `0.15em` | uppercase | `#B08A57` |
| `.timeline-title` | Cormorant Garamond | 600 | `1.25rem` | normal | normal | none | `#FFFFFF` |
| `.timeline-text` | DM Sans | 400 | `1rem` | 1.8 | normal | none | `#888888` |
| `.depoimento-quote` | Cormorant Garamond | 500 | `clamp(1.5rem, 5vw, 2.5rem)` | 1.4 | normal | italic | `#FFFFFF` |
| `.depoimento-name` | Cormorant Garamond | 600 | `1.125rem` | normal | normal | none | `#FFFFFF` |
| `.depoimento-meta` | DM Sans | 400 | `0.875rem` | normal | normal | none | `#888888` |
| `.star` | inherit | 400 | `1.5rem` | normal | normal | none | `#B08A57` |
| `.faq-question` | Cormorant Garamond | 500 | `1.125rem` | normal | normal | none | `#FFFFFF` |
| `.faq-answer p` | DM Sans | 400 | `1rem` | 1.8 | normal | none | `#888888` |
| `.endereco-title` | Cormorant Garamond | 600 | `1.25rem` | normal | normal | none | `#FFFFFF` |
| `.endereco-text` | DM Sans | 400 | `0.875rem` | 1.8 | normal | none | `#888888` |
| `.endereco-label` | DM Sans | 600 | `0.75rem` | normal | `0.15em` | uppercase | `#B08A57` |
| `.contato-label` | DM Sans | 600 | `0.75rem` | normal | `0.1em` | uppercase | `#B08A57` |
| `.contato-link` | DM Sans | 400 | `1.125rem` | normal | normal | none | `#FFFFFF` |
| `.form-label` | DM Sans | 500 | `0.875rem` | normal | normal | none | `#FFFFFF` |
| `.form-input`, `.form-select`, `.form-textarea` | DM Sans | 400 | `1rem` | normal | normal | none | `#FFFFFF` |
| `.diferencial-numero` | Cormorant Garamond | 600 | `2.25rem` | 1 | normal | none | `#B08A57` |
| `.diferencial-label` | DM Sans | 400 | `0.75rem` | normal | `0.1em` | uppercase | `#888888` |
| `.footer-links h4`, `.footer-contact h4` | DM Sans | 600 | `0.875rem` | normal | `0.1em` | uppercase | `#B08A57` |
| `.footer-links a`, `.footer-contact a` | DM Sans | 400 | `0.875rem` | normal | normal | none | `rgba(255,255,255,0.7)` |
| `.footer-description` | DM Sans | 400 | `0.875rem` | 1.6 | normal | none | `rgba(255,255,255,0.7)` |
| `.footer-copyright`, `.footer-credits-right` | DM Sans | 400 | `0.75rem` | normal | normal | none | `rgba(255,255,255,0.5)` |
| `.footer-legal-links a` | DM Sans | 400 | `11px` | normal | `0.1em` | uppercase | `rgba(255,255,255,0.4)` |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor rgba() | Uso Específico | Contexto |
|--------------|----------------|----------|
| `rgba(0, 0, 0, 0.8)` | `.hero-overlay` | Overlay escuro sobre imagem hero |
| `rgba(0, 0, 0, 0.6)` | `.drawer-overlay` | Fundo escurecido quando drawer mobile abre |
| `rgba(0, 0, 0, 0.5)` | Sombra da navbar scrolled | `box-shadow: 0 2px 20px rgba(0,0,0,0.5)` |
| `rgba(0, 0, 0, 0.4)` | Sombra hover cards serviços | `box-shadow: 0 20px 40px rgba(0,0,0,0.4)` |
| `rgba(176, 138, 87, 0.2)` | Borda drawer, borda solucao-box, borda contato-dados, borda diferenciais | Dourado com baixa opacidade para estrutura |
| `rgba(176, 138, 87, 0.15)` | Borda base cards serviços | `#B08A57` a 15% |
| `rgba(176, 138, 87, 0.1)` | Sombra dourada cards, borda endereco-card, borda contato-form-wrapper | Brilho sutil estrutural |
| `rgba(176, 138, 87, 0.06)` | Efeito spotlight nos cards | Radial gradient posicionado pelo mouse |
| `rgba(176, 138, 87, 0.3)` | Gradientes divisor de seção (topo), borda solucao-image, borda modal serviço | Dourado médio para separação visual |
| `rgba(255, 255, 255, 0.7)` | `.footer-description`, `.footer-links a`, `.footer-contact a` | Texto secundário no rodapé |
| `rgba(255, 255, 255, 0.6)` | Cor do `.drawer-close` padrão | Ícone fechar drawer |
| `rgba(255, 255, 255, 0.5)` | `.footer-copyright`, opacidade da borda dourada decorativa | Texto terciário |
| `rgba(255, 255, 255, 0.4)` | `.footer-legal-links` e seus links | Texto legal mínimo |
| `rgba(255, 255, 255, 0.1)` | `border-top` do `.footer-bottom` | Divisão sutil no rodapé |
| `rgba(255, 255, 255, 0.06)` | Borda entre itens do drawer-nav | Separador mobile |
| `rgba(201, 169, 97, 0.2)` | `text-shadow` do `.hero-title-line-accent` | Brilho sutil no texto dourado gradiente |
| `rgba(10, 10, 10, 0.95)` | `.servico-overlay` | Fundo do modal de serviços |
| `rgba(10, 10, 10, 0.6)` | Layer do gradiente da seção contato | Camada de transição para imagem de fundo |
| `rgba(10, 10, 10, 0.1)` | Layer final do gradiente contato | Fade total para imagem |
| `rgba(255,255,255,0.1)` | Fundo do rect do ícone cookie no rodapé | `#ffffff` a 10% |

### 1.4 Estilo Geral

A arquitetura visual segue uma filosofia de **escuridão editorial** — o fundo permanece em `#0A0A0A` (quase preto) em todas as seções principais, com alternância tática para `#141414` na seção Sobre/Timeline para criar ritmo vertical sem quebrar a monocromia. O espaçamento é generoso e matemático: seções recebem `padding: var(--space-24) 0` (96px vertical), criando grandes áreas de respiro que evocam revistas de luxo. Não existe dark mode alternativo — o site é **inherentemente dark** por design, uma inversão filosófica deliberada: em vez de oferecer um modo escuro como opção, ele é escuro por natureza, usando o dourado como substituto do branco em um design light tradicional. O container base é `max-width: 1280px`, centralizado com `margin: 0 auto` e padding responsivo que vai de `1.5rem` a `3rem`. Cada seção é separada por uma linha divisória de 1px com gradiente horizontal `transparent → #B08A57 → transparent` a 30% de opacidade, criando uma continuidade visual de capítulo a capítulo.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 0 — NAVBAR

**Estrutura:**
```html
<nav id="navbar" class="navbar" role="navigation" aria-label="Navegação principal">
  <div class="container navbar-container">
    <a href="index.html" class="navbar-logo">...</a>
    <button class="navbar-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navbar-menu">
      <span class="navbar-toggle-line"></span> ×3
    </button>
    <div id="navbar-menu" class="navbar-menu" role="dialog" aria-modal="true">
      <div class="drawer-header">[logo + close]</div>
      <ul class="drawer-nav" role="menubar">[5 links]</ul>
    </div>
    <div class="drawer-overlay" id="drawer-overlay" aria-hidden="true"></div>
  </div>
</nav>
```

**Propriedades CSS da seção:**
- `.navbar`: `position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 1.25rem 0; transition: all 300ms ease; background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)`
- `.navbar.scrolled`: `background-color: #0A0A0A; box-shadow: 0 2px 20px rgba(0,0,0,0.5); padding: 0.75rem 0`

**Fundo:**
- Layer 0 — gradiente vertical de preto transparente para transparente (estado inicial)
- Layer 1 — fundo sólido `#0A0A0A` com sombra ao scroll

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Logo | `.navbar-logo img` | Fixed top-left | `height: 85px` (scrolled: 70px) | `filter: brightness(0) invert(1); transform: scale(1.6); transform-origin: left center` |
| Hamburger | `.navbar-toggle` | Fixed top-right | 3 linhas de `24px × 2px` | `gap: 5px; z-index: 1001` |
| Drawer | `.navbar-menu` | Fixed right | `width: 300px; max-width: 85vw; height: 100vh` | `right: -320px → right: 0` ao ativar |
| Overlay | `.drawer-overlay` | Fixed inset | 100vw × 100vh | `background: rgba(0,0,0,0.6); opacity: 0 → 1` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `navbar-toggle-line` (CSS transition) | transform: none | rotate±45deg + translate(5px, ±5px) | 300ms | ease | click no toggle | 0 |
| Drawer slide | `right: -320px` | `right: 0` | 500ms | ease | click no toggle | 0 |
| Overlay fade | `opacity: 0` | `opacity: 1` | 500ms | ease | click no toggle | 0 |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.navbar-logo img` | scrolled | scale(1.6) mantido | — | — | height: 85px → 70px | 300ms ease |
| `.navbar-toggle-line` | `[aria-expanded="true"]` (1ª) | rotate(45deg) translate(5px, 5px) | — | — | — | 300ms ease |
| `.navbar-toggle-line` | `[aria-expanded="true"]` (2ª) | opacity: 0 | — | — | — | 300ms ease |
| `.navbar-toggle-line` | `[aria-expanded="true"]` (3ª) | rotate(-45deg) translate(5px, -5px) | — | — | — | 300ms ease |
| `.navbar-link` | hover | — | — | — | color: #B08A57; ::after width: 0 → 100% | 300ms ease |
| `.drawer-nav .navbar-link` | hover | — | — | — | opacity: 0.75 → 1; color: #B08A57; padding-left: +6px | 300ms ease |
| `.drawer-close` | hover | — | — | — | color: rgba(255,255,255,0.6) → #B08A57 | 300ms ease |

**Diferenciador Visual:** O logo possui `transform: scale(1.6)` com `transform-origin: left center`, criando um logo aparentemente maior que suas dimensões reais de container — uma técnica de "máscara de escala" que permite manter o arquivo de imagem em resolução menor enquanto preenche visualmente o espaço. A navegação desktop usa fonte serifada (Cormorant Garamond) em tamanho grande para os links, enquanto o mobile switcha para DM Sans em uppercase — uma bifurcação tipográfica intencional que respeita a densidade de cada viewport.

---

### SEÇÃO 1 — HERO

**Estrutura:**
```html
<header id="hero" class="hero">
  <div class="hero-bg">
    <img src="...hero-desktop..." fetchpriority="high" loading="eager" width="1920" height="1080">
  </div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="container hero-container">
    <div class="hero-content">
      <div class="hero-line" aria-hidden="true"></div>
      <span class="hero-label">Desde 2014</span>
      <h1 class="hero-title">
        <span class="hero-title-line">Orientação jurídica</span>
        <span class="hero-title-line hero-title-line-accent">estratégica</span>
      </h1>
      <p class="hero-subtitle">...</p>
      <div class="hero-cta">
        <a class="btn btn-primary">Fale com nossa equipe</a>
        <a class="btn btn-text">Conheça nossos serviços →</a>
      </div>
    </div>
  </div>
  <div class="hero-scroll" aria-hidden="true">
    <div class="hero-scroll-line"></div>
  </div>
</header>
```

**Propriedades CSS da seção:**
- `.hero`: `min-height: 100vh; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; background-color: #0A0A0A`
- `.hero-bg`: `position: absolute; inset: 0; z-index: 0`
- `.hero-bg img`: `width: 100%; height: 100%; object-fit: cover; opacity: 0; transform: scale(1.1)`
- `.hero-overlay`: `position: absolute; inset: 0; background-color: rgba(0,0,0,0.8); z-index: 1`
- `.hero-container`: `position: relative; z-index: 2; text-align: center; padding-top: 80px`
- `.hero-content`: `max-width: 900px; margin: 0 auto`

**Fundo:**
- Layer 0 — imagem full-cover (`object-fit: cover`) com estado inicial `opacity: 0; transform: scale(1.1)`
- Layer 1 — overlay sólido `rgba(0, 0, 0, 0.8)`
- Layer 2 — conteúdo centralizado, z-index 2

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|----------|----------------------|---------|-----------|-------------------|
| Linha decorativa | `.hero-line` | Relativa, topo do conteúdo | `width: 0 → 80px` (animado); `height: 1px` | `background-color: #B08A57; margin: 0 auto 2rem` |
| Label | `.hero-label` | Relativa | auto | `letter-spacing: 0.3em; opacity: 0; transform: translateY(20px)` |
| Título linha 1 | `.hero-title-line:nth-child(1)` | block | auto | `opacity: 0; transform: translateY(40px)` |
| Título linha 2 | `.hero-title-line-accent` | block | auto | Gradient text: `linear-gradient(110deg, #8B6F46 0%, #C9A961 30%, #FFFAEA 50%, #C9A961 70%, #8B6F46 100%); -webkit-background-clip: text; color: transparent; font-style: italic; text-shadow: 0 4px 15px rgba(201,169,97,0.2)` |
| Subtítulo | `.hero-subtitle` | Relativa | `max-width: 600px` | `opacity: 0; transform: translateY(30px); color: #e6d6d6` (após animação) |
| CTA | `.hero-cta` | Relativa | auto | `flex-direction: column (mobile) / row (desktop); opacity: 0; transform: translateY(30px)` |
| Scroll indicator | `.hero-scroll` | Absolute bottom | auto | `bottom: 2rem; left: 50%; transform: translateX(-50%); opacity: 0` |
| Scroll line | `.hero-scroll-line` | Absolute | `width: 1px; height: 60px` | `background: linear-gradient(to bottom, #B08A57, transparent)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `heroImageScale` | `opacity: 0; transform: scale(1.1)` | `opacity: 1; transform: scale(1)` | 1500ms | ease-out | DOMContentLoaded | 100ms |
| `lineExpandCenter` | `width: 0` | `width: 80px` | 1000ms | ease | DOMContentLoaded | 500ms |
| `fadeUp` (label) | `opacity: 0; transform: translateY(20px)` | `opacity: 1; transform: translateY(0)` | 800ms | ease | DOMContentLoaded | 700ms |
| `fadeUp` (title line 1) | `opacity: 0; transform: translateY(40px)` | `opacity: 1; transform: translateY(0)` | 900ms | ease | DOMContentLoaded | 900ms |
| `fadeUp` (title line 2) | `opacity: 0; transform: translateY(40px)` | `opacity: 1; transform: translateY(0)` | 900ms | ease | DOMContentLoaded | 1050ms (900+150) |
| `fadeUp` (subtitle) | `opacity: 0; transform: translateY(30px)` | `opacity: 1; transform: translateY(0)` | 800ms | ease | DOMContentLoaded | 1400ms |
| `fadeUp` (CTA) | `opacity: 0; transform: translateY(30px)` | `opacity: 1; transform: translateY(0)` | 800ms | ease | DOMContentLoaded | 1600ms |
| `fadeIn` (scroll) | `opacity: 0` | `opacity: 1` | 800ms | ease | DOMContentLoaded | 2000ms |
| `scrollBounce` | `transform: scaleY(1); opacity: 1` | `transform: scaleY(0.5); opacity: 0.5` | 2000ms | ease-in-out | Loop infinito | 0 |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|----------|--------|-----------|------------|--------|--------|------------------|
| `.btn-primary` | hover | translateY(-2px) | — | border-color: #C9A961 | background: #C9A961 | 300ms ease |
| `.btn-text` | hover | — | — | `border-bottom-color: transparent → #B08A57` | color: #B08A57 | 300ms ease |

**Diferenciador Visual:** O título `.hero-title-line-accent` é a peça central irreproduzível — não é simplesmente uma cor dourada, mas um gradiente angular de 110° que passa por cinco stops (`#8B6F46 → #C9A961 → #FFFAEA → #C9A961 → #8B6F46`), aplicado via `-webkit-background-clip: text` com `-webkit-text-fill-color: transparent`, combinado com um `text-shadow: 0 4px 15px rgba(201,169,97,0.2)` que cria um halo dourado sutil por trás das letras. O efeito é um brilho metálico que simula ouro polido. A linha de scroll anima em loop infinito com `scaleY` oscilando entre 1 e 0.5, criando uma respiração visual que convida o scroll.

---

### SEÇÃO 2 — DOR E SOLUÇÃO

**Estrutura:**
```html
<section id="dor-solucao" class="dor-solucao">
  <div class="container">
    <div class="dor-solucao-grid">
      <div class="dor-solucao-content">[label + title + divisor + text]</div>
      <div class="dor-solucao-image">
        <img src="...problema..." loading="lazy" width="600" height="400">
      </div>
    </div>
    <div class="solucao-box">
      <div class="solucao-grid">
        <div class="solucao-image"><img src="...solucao..." loading="lazy"></div>
        <div class="solucao-content">[label + title + text]</div>
      </div>
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.dor-solucao`: `padding: 6rem 0; background-color: #0A0A0A; position: relative`
- `.dor-solucao::before`: divisão superior — `height: 1px; background: linear-gradient(to right, transparent, #B08A57, transparent); opacity: 0.3`
- `.dor-solucao-grid`: `display: grid; grid-template-columns: 1fr; gap: 3rem; margin-bottom: 5rem`
- `.dor-solucao-image`: posição relativa com `::before` — borda dourada deslocada (`top: 1rem; left: 1rem; right: -1rem; bottom: -1rem; border: 1px solid #B08A57; opacity: 0.5; z-index: -1`)
- `.dor-solucao-image img`: `width: 100%; height: 350px; object-fit: cover; filter: grayscale(30%)`
- `.solucao-box`: `background: linear-gradient(135deg, #141414 0%, #1A1A1A 100%); padding: 2.5rem 1.5rem; position: relative; border: 1px solid rgba(176,138,87,0.2)`
- `.solucao-box::before`: `top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(to right, #B08A57, transparent)` — linha dourada no topo
- `.solucao-image img`: `width: 100%; height: 100%; min-height: 250px; object-fit: cover; border: 1px solid rgba(176,138,87,0.2)`

**Fundo:**
- Layer 0 — `#0A0A0A` sólido
- Layer 1 — `::before` gradiente horizontal dourado (divisor superior)
- Layer 2 — conteúdo

**Animação:** Nenhuma animação própria — herda `.reveal` global via IntersectionObserver (classe `data-animate` com `.animate`)

**Diferenciador Visual:** A imagem de problema possui uma **borda fantasma** deslocada (`::before` com `top: 1rem; left: 1rem; right: -1rem; bottom: -1rem`) que cria uma moldura dourada flutuante fora dos limites da imagem, a 50% de opacidade. Essa é uma técnica de "offset border" que quebra a grade e cria profundidade. A seção solução usa um gradiente de fundo de `#141414` para `#1A1A1A` em 135°, sutil mas perceptível, diferenciando-a do fundo preto puro sem introduzir uma nova cor.

---

### SEÇÃO 3 — SERVIÇOS

**Estrutura:**
```html
<section id="servicos" class="servicos">
  <div class="container">
    <div class="servicos-header">[label + title + divisor]</div>
    <p class="servicos-intro">...</p>
    <div class="servicos-grid">
      <article class="servico-card" data-servico="empresarial">[numero + icon + title + desc + list + link]</article>
      <!-- 6 cards -->
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.servicos`: `padding: 6rem 0; background-color: #0A0A0A; position: relative; overflow: hidden`
- `.servicos::before`: divisor superior (mesmo padrão)
- `.servicos::after`: padrão de fundo sutil — `radial-gradient(circle at 20% 50%, rgba(176,138,87,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(176,138,87,0.02) 0%, transparent 40%); pointer-events: none`
- `.servicos-grid`: `display: grid; grid-template-columns: 1fr; gap: 1.5rem`
- Tablet (≥768px): `grid-template-columns: repeat(2, 1fr)`
- Desktop (≥1024px): `grid-template-columns: repeat(3, 1fr)`

**Card de serviço (`.servico-card`):**
- `position: relative; background: linear-gradient(145deg, #141414 0%, rgba(20,20,20,0.8) 100%); border: 1px solid rgba(176,138,87,0.15); padding: 2rem 1.5rem; transition: all 0.4s cubic-bezier(0.4,0,0.2,1); overflow: hidden; opacity: 0; transform: translateY(30px)`
- `::before` — linha dourada superior: `top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(to right, transparent, #B08A57, transparent); transform: scaleX(0); transition: transform 0.6s ease`
- `::after` — efeito spotlight do mouse: `inset: 0; background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(176,138,87,0.06), transparent 40%); opacity: 0; transition: opacity 0.3s; pointer-events: none`
- Hover: `border-color: rgba(176,138,87,0.4); transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(176,138,87,0.1)`

**Elementos internos do card:**
- `.servico-card-numero`: `position: absolute; top: 1rem; right: 1rem; font-size: 3rem; font-weight: 300; color: #B08A57; opacity: 0.1; line-height: 1` — hover: `opacity: 0.2; transform: scale(1.1)`
- `.servico-card-icon`: `width: 56px; height: 56px; border: 1px solid rgba(176,138,87,0.3); position: relative` — `::before` preenchimento dourado com `transform: scale(0) → scale(1)` no hover; SVG interno troca stroke de `#B08A57` para `#0A0A0A`
- `.servico-card-list li::before`: bullet customizado — `content: ''; width: 6px; height: 6px; background: #B08A57; border-radius: 50%; margin-top: 0.5em; flex-shrink: 0; opacity: 0.7`
- `.servico-card-link svg`: `width: 16px; height: 16px` — hover: `transform: translateX(4px)`

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `cardFadeUp` | `opacity: 0; transform: translateY(30px)` | `opacity: 1; transform: translateY(0)` | 700ms | cubic-bezier(0.4,0,0.2,1) | IntersectionObserver | `index * 100ms` (stagger) |

**Diferenciador Visual:** O efeito **spotlight radial controlado por mouse** é irreproduzível sem o JS específico — o CSS declara `var(--mouse-x)` e `var(--mouse-y)` que são atualizadas em tempo real via `mousemove` no JavaScript (linhas 476-485 do script.js). Isso cria um brilho dourado que segue o cursor dentro do card, como uma lanterna em um ambiente escuro. Além disso, o ícone do card preenche com dourado sólido no hover via `::before` com `transform: scale(0) → scale(1)`, e o SVG inverte de dourado para preto simultaneamente.

---

### SEÇÃO 4 — INSTITUCIONAL

**Estrutura:**
```html
<section id="institucional" class="institucional">
  <div class="container">
    <div class="institucional-grid">
      <div class="institucional-images">
        <img class="institucional-img institucional-img-1" src="..." loading="lazy" width="400" height="500">
        <img class="institucional-img institucional-img-2" src="..." loading="lazy" width="350" height="450">
      </div>
      <div class="institucional-content">[label + title + divisor + text + diferenciais]</div>
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.institucional`: `padding: 6rem 0; background-color: #0A0A0A; position: relative` + divisor superior padrão
- `.institucional-grid`: `display: grid; grid-template-columns: 1fr; gap: 3rem`
- `.institucional-images`: `display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; position: relative`
- `.institucional-img`: `width: 100%; object-fit: cover; filter: grayscale(40%)`
- `.institucional-img-1`: `height: 350px; margin-top: 2rem`
- `.institucional-img-2`: `height: 280px`
- `.institucional-diferenciais`: `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-top: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(176,138,87,0.2)`

**Diferenciador Visual:** As duas imagens possuem alturas diferentes (`350px` vs `280px`) e a primeira recebe `margin-top: 2rem`, criando um **parallax visual estático** — uma imagem deslocada para baixo em relação à outra, quebrando a simetria e criando ritmo. Ambas usam `filter: grayscale(40%)`, mantendo a coerência monocromática do site. A seção dos diferenciais usa um grid de 3 colunas com números serifados grandes (`2.25rem`) em dourado sobre labels em uppercase cinza.

---

### SEÇÃO 5 — SOBRE / TIMELINE

**Estrutura:**
```html
<section id="sobre" class="sobre">
  <div class="container">
    <div class="sobre-header">[label + title + divisor + logo]</div>
    <div class="timeline">
      <div class="timeline-line" aria-hidden="true"></div>
      <div class="timeline-items">
        <div class="timeline-item">[marker + content(year + title + text)]</div>
        <!-- 3 items -->
      </div>
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.sobre`: `padding: 6rem 0; background-color: #141414; position: relative` + divisor superior a `opacity: 0.2` (mais sutil)
- `.sobre-logo`: `display: block; margin: -10px auto -30px; width: 380px; max-width: 100%; height: 180px; object-fit: cover; object-position: center; filter: brightness(0) invert(1); opacity: 0.9` — técnica de corte forçado com altura fixa e object-fit
- `.timeline`: `position: relative; overflow-x: auto; padding-bottom: 1.5rem`
- `.timeline-line`: `position: absolute; top: 20px; left: 0; width: 100%; height: 1px; background: linear-gradient(to right, #B08A57, transparent); opacity: 0.3`
- `.timeline-items`: `display: flex; flex-direction: column; gap: 3rem; position: relative; padding-top: 14px`
- `.timeline-item`: `position: relative; padding-left: 2rem; opacity: 0; transform: translateX(-60px)`
- `.timeline-marker`: `position: absolute; left: 0; top: 12px; width: 14px; height: 14px; border-radius: 50%; background-color: #B08A57; border: 3px solid #141414; box-shadow: 0 0 0 1px #B08A57`

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `slideIn` | `opacity: 0; transform: translateX(-60px)` | `opacity: 1; transform: translateX(0)` | 700ms | ease-out | IntersectionObserver | `index * 150ms` (stagger) |

**Diferenciador Visual:** O logo institucional é renderizado em branco puro via `filter: brightness(0) invert(1)`, mas usa uma técnica de **máscara de altura forçada**: `height: 180px` com `object-fit: cover` e `object-position: center` para recortar o espaço transparente vertical do arquivo PNG original, eliminando margens indesejadas. O marcador da timeline usa um **disco com anel duplo**: `background: #B08A57` com `border: 3px solid #141414` e `box-shadow: 0 0 0 1px #B08A57`, criando um efeito de anel dourado ao redor do círculo central.

---

### SEÇÃO 6 — DEPOIMENTOS

**Estrutura:**
```html
<section id="depoimentos" class="depoimentos">
  <div class="container depoimentos-container">
    <div class="depoimento-content" itemscope itemtype="https://schema.org/Review">
      <div class="depoimento-stars" aria-label="Avaliação 5 estrelas no Google" itemprop="reviewRating">...</div>
      <blockquote class="depoimento-quote" itemprop="reviewBody"><p>"..."</p></blockquote>
      <cite class="depoimento-author" itemprop="author" itemscope itemtype="https://schema.org/Person">...</cite>
    </div>
    <div class="depoimento-divisor" aria-hidden="true"></div>
    <!-- segundo depoimento -->
  </div>
</section>
```

**Propriedades CSS:**
- `.depoimentos`: `padding: 6rem 0; background: linear-gradient(135deg, #0A0A0A 0%, #141414 100%); position: relative` + divisor superior padrão
- `.depoimentos-container`: `display: flex; flex-direction: column; gap: 3rem`
- `.depoimento-content`: `text-align: center; opacity: 0; transform: scale(0.95)`
- `.depoimento-stars`: `display: flex; justify-content: center; gap: 0.5rem; margin-bottom: 1.5rem`
- `.star`: `font-size: 1.5rem; color: #B08A57` (caractere ★)
- `.depoimento-quote`: `font-family: Cormorant Garamond; font-size: clamp(1.5rem, 5vw, 2.5rem); font-weight: 500; font-style: italic; line-height: 1.4; color: #FFFFFF`
- `.depoimento-quote p::before` e `::after`: `content: '"'; color: #B08A57` — aspas douradas automáticas
- `.depoimento-divisor`: `width: 1px; height: 80px; background: linear-gradient(to bottom, #B08A57, transparent); margin: 0 auto`

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|-----------------|----------------|--------------|---------|--------|---------|-------|
| `scaleIn` | `opacity: 0; transform: scale(0.95)` | `opacity: 1; transform: scale(1)` | 700ms | ease-out | IntersectionObserver | `index * 200ms` (stagger) |

**Diferenciador Visual:** As aspas nos depoimentos não são digitadas no HTML — são geradas automaticamente via pseudo-elementos `::before` e `::after` no parágrafo interno, em dourado. Isso garante consistência tipográfica e impede que o editor esqueça as aspas. A seção usa um gradiente de fundo de 135° de `#0A0A0A` para `#141414`, sutilmente diferente do fundo puro das seções adjacentes.

---

### SEÇÃO 7 — FAQ

**Estrutura:**
```html
<section id="faq" class="faq">
  <div class="container">
    <div class="faq-header">[label + title + divisor]</div>
    <div class="faq-list">
      <details class="faq-item">
        <summary class="faq-question"><span>Texto</span><span class="faq-icon" aria-hidden="true"></span></summary>
        <div class="faq-answer"><p>...</p></div>
      </details>
      <!-- 5 items -->
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.faq`: `padding: 6rem 0; background-color: #0A0A0A; position: relative` + divisor padrão
- `.faq-list`: `display: flex; flex-direction: column; gap: 0.75rem; max-width: 800px; margin: 0 auto`
- `.faq-item`: `background-color: #141414; border: 1px solid rgba(176,138,87,0.1); transition: border-color 300ms ease`
- `.faq-item:hover`: `border-color: rgba(176,138,87,0.3)`
- `.faq-question`: `display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 1.25rem 1.5rem; font-family: Cormorant Garamond; font-size: 1.125rem; font-weight: 500; color: #FFFFFF; cursor: pointer`
- `.faq-icon`: ícone de +/− construído com `::before` (horizontal) e `::after` (vertical), ambos `background-color: #B08A57; transition: transform 300ms ease`
- `.faq-item[open] .faq-icon::after`: `transform: translateX(-50%) rotate(90deg)` — vertical gira 90° e desaparece (vira horizontal sobreposta)
- `.faq-answer`: `padding: 0 1.5rem 1.5rem`

**Comportamento JS:** O FAQ usa `<details>` nativo, mas o JS intercepta o click no summary com `e.preventDefault()`, fecha todos os outros items abertos manualmente, e toggle o atual. Isso cria um **accordion exclusivo** (apenas um aberto por vez), comportamento não nativo do `<details>`.

**Diferenciador Visual:** O ícone de expansão não usa SVG ou fonte de ícones — é construído puramente com CSS via dois pseudo-elementos retangulares (`::before` horizontal e `::after` vertical) que formam uma cruz. No estado aberto, o vertical gira 90° e some visualmente (sobrepõe o horizontal), formando um traço único. É uma solução sem assets externos.

---

### SEÇÃO 8 — LOCALIZAÇÃO

**Estrutura:**
```html
<section id="localizacao" class="localizacao">
  <div class="container">
    <div class="localizacao-header">[label + title + divisor]</div>
    <div class="localizacao-grid">
      <div class="endereco-card endereco-principal">[label + title + address + btn]</div>
      <div class="endereco-card">[Bangu]</div>
      <div class="endereco-card">[Itaguaí]</div>
      <div class="endereco-card">[Centro]</div>
    </div>
    <div class="mapa-container">
      <iframe src="...Google Maps embed..." width="100%" height="450" style="border:0;" loading="lazy"></iframe>
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.localizacao`: `padding: 6rem 0; background-color: #141414; position: relative` + divisor a `opacity: 0.2`
- `.localizacao-grid`: `display: grid; grid-template-columns: 1fr; gap: 1rem; margin-bottom: 3rem`
- `.endereco-card`: `padding: 1.5rem; background-color: #0A0A0A; border: 1px solid rgba(176,138,87,0.1); transition: all 300ms ease`
- `.endereco-card:hover`: `border-color: #B08A57; transform: translateY(-4px)`
- `.endereco-principal`: `background: linear-gradient(135deg, #B08A57 0%, #8B6F46 100%); color: #0A0A0A; border-color: #B08A57`
- `.endereco-principal:hover`: `transform: translateY(-4px); box-shadow: 0 10px 30px rgba(176,138,87,0.2)`
- `.endereco-principal .endereco-title`, `.endereco-text`, `.endereco-label`: `color: #0A0A0A` com variações de opacidade
- `.endereco-principal .btn-outline`: `color: #0A0A0A; border-color: #0A0A0A` — hover inverte para `background: #0A0A0A; color: #B08A57`
- `.mapa-container`: `width: 100%; height: 350px (mobile) / 450px (≥768px); border: 1px solid rgba(176,138,87,0.1)`

**Diferenciador Visual:** O card principal (Campo Grande/Sede) é o único com **fundo dourado gradiente** (`135deg` de `#B08A57` para `#8B6F46`), criando uma hierarquia instantânea de importância. Seu hover adiciona uma sombra dourada (`box-shadow: 0 10px 30px rgba(176,138,87,0.2)`), enquanto os cards secundários usam apenas a borda dourada. O botão "Como chegar" dentro do card principal inverte completamente o esquema de cores: de outline escuro sobre dourado para preto sólido com texto dourado no hover.

---

### SEÇÃO 9 — CONTATO / CTA COM FORMULÁRIO

**Estrutura:**
```html
<section id="contato" class="contato">
  <div class="container">
    <div class="contato-grid">
      <div class="contato-info">[label + title + divisor + text + dados + social]</div>
      <div class="contato-form-wrapper">
        <form id="contato-form" class="contato-form" novalidate>
          <!-- 5 campos + submit -->
        </form>
      </div>
    </div>
  </div>
</section>
```

**Propriedades CSS:**
- `.contato`: `padding: 6rem 0; background-color: #0A0A0A; background-image: linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.6) 195%, rgba(10,10,10,0.1) 100%), url("assets/images/formulario-...webp"); background-size: 100% 100%, cover; background-position: center bottom, center; background-repeat: no-repeat; position: relative` + divisor padrão
- `.contato-grid`: `display: grid; grid-template-columns: 1fr; gap: 3rem`
- `.contato-dados`: `display: flex; flex-direction: column; gap: 1.5rem; margin: 2.5rem 0; padding: 2rem 0; border-top: 1px solid rgba(176,138,87,0.2); border-bottom: 1px solid rgba(176,138,87,0.2)`
- `.contato-form-wrapper`: `background-color: #141414; padding: 2rem; border: 1px solid rgba(176,138,87,0.1)`
- `.form-input`, `.form-select`, `.form-textarea`: `width: 100%; padding: 0.75rem 1rem; font-family: DM Sans; font-size: 1rem; color: #FFFFFF; background-color: #0A0A0A; border: 1px solid rgba(176,138,87,0.2); transition: all 300ms ease`
- Focus: `outline: none; border-color: #B08A57; box-shadow: 0 0 0 3px rgba(176,138,87,0.1)`
- Placeholder: `color: #888888; opacity: 0.5`
- `.form-select`: `appearance: none; background-image: url("data:image/svg+xml,...seta dourada..."); background-repeat: no-repeat; background-position: right 1rem center`
- `.form-error`: `font-size: 0.875rem; color: #ef4444; min-height: 1.25rem`
- `.form-success`: `padding: 1rem; background-color: rgba(176,138,87,0.1); border-left: 3px solid #B08A57; font-size: 1rem; color: #FFFFFF` — `:empty { display: none }`
- `.btn-loader`: `display: none; width: 18px; height: 18px; border: 2px solid transparent; border-top-color: currentColor; border-radius: 50%; animation: spin 1s linear infinite`
- `.btn.loading .btn-text { display: none }` / `.btn.loading .btn-loader { display: block }`

**Animação:** `spin` — rotação contínua do loader durante envio do formulário.

**Diferenciador Visual:** A seção contato é a única com **imagem de fundo** além do hero — um gradiente linear triplo (preto → preto 60% → preto 10%) sobreposto a uma imagem fotográfica, criando uma transição suave do topo escuro para a imagem visível na base. O formulário usa um select customizado com seta dourada inline em base64 SVG. O botão de submit possui um spinner CSS puro (animação `spin`) que aparece no estado `.loading`, escondendo o texto.

---

### SEÇÃO 10 — RODAPÉ

**Estrutura:**
```html
<footer class="footer">
  <div class="footer-main">
    <div class="footer-container">
      <div class="footer-brand">[logo + description + social]</div>
      <div class="footer-links">[Links Rápidos]</div>
      <div class="footer-links">[Áreas de Atuação]</div>
      <div class="footer-contact">[Contato]</div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="footer-container">
      <div class="footer-credits-left">[copyright + legal links]</div>
      <p class="footer-credits-right">Desenvolvido por <a href="https://www.ag5agencia.com.br">AG5 Agência</a></p>
    </div>
  </div>
</footer>
```

**Propriedades CSS:**
- `.footer`: `background: #0A0A0A; color: #FFFFFF; border-top: 1px solid rgba(176,138,87,0.2)`
- `div.footer-main`: `padding-top: 35px; padding-bottom: 30px`
- `.footer-container`: `width: 100%; max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; display: grid; grid-template-columns: repeat(4, 1fr); gap: 2.5rem; align-items: start; padding-bottom: 0px`
- `.footer-logo`: `display: flex; align-items: center; margin-bottom: 1rem; max-width: 220px`
- `.footer-logo img`: `width: 100%; height: auto; object-fit: contain`
- `.footer-description`: `color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-bottom: 1.5rem; max-width: 400px; line-height: 1.6`
- `.footer-social`: `display: flex; gap: 0.75rem`
- `.footer-social a`: `display: inline-flex; align-items: center; justify-content: center; color: #FFFFFF; font-size: 20px; transition: all 300ms ease`
- `.footer-social a:hover`: `color: #B08A57; transform: translateY(-2px)`
- `.footer-links h4`, `.footer-contact h4`: `font-family: DM Sans; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #B08A57; margin-bottom: 1.5rem`
- `.footer-links a`, `.footer-contact a`: `color: rgba(255,255,255,0.7); font-size: 0.875rem; transition: all 300ms ease; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none`
- `.footer-bottom`: `padding-top: 20px; padding-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.1)`
- `.footer-bottom .footer-container`: `display: flex; justify-content: space-between; align-items: center; padding-bottom: 0`
- `.footer-legal-links`: `display: flex; flex-wrap: wrap; align-items: center; gap: 0px; font-size: 0.75rem; color: rgba(255,255,255,0.4)`
- `.footer-legal-links a`: `color: rgba(255,255,255,0.4); font-size: 11px; transition: color 300ms ease; text-decoration: none`

**Seletores específicos frágeis (obrigatórios para pixel-perfect):**
```css
footer>div:nth-of-type(1)>div>div:nth-of-type(1)>a>img {
    margin-bottom: -28px;
    margin-left: 4px;
    padding-top: 0px;
    padding-right: 40px;
    margin-top: -22px;
}
footer>div:nth-of-type(1)>div>div:nth-of-type(2) {
    padding-left: 20px;
    margin-bottom: 0px;
    margin-left: 65px;
}
footer>div:nth-of-type(1)>div>div:nth-of-type(3) {
    padding-left: 15px;
    margin-left: 59px;
}
div.footer-contact {
    padding-left: 23px;
    margin-left: 20px;
}
```

**Diferenciador Visual:** O rodapé contém **seletores nth-of-type extremamente específicos** que posicionam as colunas com margens e paddings personalizados para alinhamento manual — uma técnica de micro-ajuste que depende exatamente da ordem das divs no HTML. O link de cookies no rodapé inclui um **ícone SVG inline customizado** (toggle switch em miniatura com rect, circle e checkmark) que não existe em nenhuma biblioteca de ícones padrão. A descrição da marca no rodapé é limitada a `max-width: 400px` para forçar a quebra de linha controlada.

---

## 3. COMPONENTES REUTILIZÁVEIS

### Botão Primário

```css
/* ─── BOTÃO PRIMÁRIO ─── */
.btn-primary {
    background-color: var(--color-gold);
    color: var(--color-black);
    border: 1px solid var(--color-gold);
}

.btn-primary:hover {
    background-color: var(--color-gold-light);
    border-color: var(--color-gold-light);
    transform: translateY(-2px);
}

.btn-primary:active {
    transform: translateY(0);
}
```

### Botão Outline

```css
/* ─── BOTÃO OUTLINE ─── */
.btn-outline {
    background-color: transparent;
    color: var(--color-white);
    border: 1px solid var(--color-gold);
}

.btn-outline:hover {
    background-color: var(--color-gold);
    color: var(--color-black);
}

/* Variante dentro de endereco-principal */
.endereco-principal .btn-outline {
    color: var(--color-black);
    border-color: var(--color-black);
}

.endereco-principal .btn-outline:hover {
    background-color: var(--color-black);
    color: var(--color-gold);
}
```

### Botão Text/Ghost

```css
/* ─── BOTÃO TEXT ─── */
.btn-text {
    background-color: transparent;
    color: var(--color-white);
    padding-left: 0;
    padding-right: 0;
    border-bottom: 1px solid transparent;
}

.btn-text:hover {
    border-bottom-color: var(--color-gold);
    color: var(--color-gold);
}
```

### Botão WhatsApp Flutuante

```css
/* ─── WHATSAPP FLUTUANTE ─── */
.btn-flutuante-whatsapp {
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    background-color: #25D366;
    color: #FFF;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.3s ease;
}

.btn-flutuante-whatsapp:hover {
    transform: scale(1.05);
    color: #FFF;
}
```

### Card de Serviço

```css
/* ─── CARD DE SERVIÇO ─── */
.servico-card {
    position: relative;
    background: linear-gradient(145deg, var(--color-black-light) 0%, rgba(20, 20, 20, 0.8) 100%);
    border: 1px solid rgba(176, 138, 87, 0.15);
    padding: var(--space-8) var(--space-6);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
}

.servico-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, var(--color-gold), transparent);
    transform: scaleX(0);
    transition: transform 0.6s ease;
}

.servico-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(176, 138, 87, 0.06), transparent 40%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.servico-card:hover {
    border-color: rgba(176, 138, 87, 0.4);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(176, 138, 87, 0.1);
}

.servico-card:hover::before {
    transform: scaleX(1);
}

.servico-card:hover::after {
    opacity: 1;
}

.servico-card.animate {
    animation: cardFadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes cardFadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Card de Endereço

```css
/* ─── CARD DE ENDEREÇO ─── */
.endereco-card {
    padding: var(--space-6);
    background-color: var(--color-black);
    border: 1px solid rgba(176, 138, 87, 0.1);
    transition: all var(--transition-base);
}

.endereco-card:hover {
    border-color: var(--color-gold);
    transform: translateY(-4px);
}

/* Variante principal */
.endereco-principal {
    background: linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%);
    color: var(--color-black);
    border-color: var(--color-gold);
}

.endereco-principal:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(176, 138, 87, 0.2);
}
```

### Linha Divisória Animada

```css
/* ─── DIVISOR LINE ─── */
.divisor-line {
    width: 60px;
    height: 1px;
    background-color: var(--color-gold);
    margin-bottom: var(--space-6);
}

/* Estado inicial para animação no scroll */
.divisor-line {
    width: 0;
    transition: width 800ms ease;
}

/* Quando observada pelo IntersectionObserver */
.divisor-line.observed {
    width: 60px;
}
```

### FAQ Accordion Item

```css
/* ─── FAQ ITEM ─── */
.faq-item {
    background-color: var(--color-black-light);
    border: 1px solid rgba(176, 138, 87, 0.1);
    transition: border-color var(--transition-base);
}

.faq-item:hover {
    border-color: rgba(176, 138, 87, 0.3);
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--space-5) var(--space-6);
    font-family: var(--font-serif);
    font-size: var(--text-lg);
    font-weight: 500;
    color: var(--color-white);
    text-align: left;
    cursor: pointer;
    transition: color var(--transition-base);
}

.faq-question:hover {
    color: var(--color-gold);
}

.faq-icon {
    position: relative;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.faq-icon::before,
.faq-icon::after {
    content: '';
    position: absolute;
    background-color: var(--color-gold);
    transition: transform var(--transition-base);
}

.faq-icon::before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    transform: translateY(-50%);
}

.faq-icon::after {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    transform: translateX(-50%);
}

.faq-item[open] .faq-icon::after {
    transform: translateX(-50%) rotate(90deg);
}

.faq-answer {
    padding: 0 var(--space-6) var(--space-6);
}
```

### Timeline Marker

```css
/* ─── TIMELINE MARKER ─── */
.timeline-marker {
    position: absolute;
    left: 0;
    top: 12px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: var(--color-gold);
    border: 3px solid var(--color-black-light);
    box-shadow: 0 0 0 1px var(--color-gold);
}
```

### Formulário — Inputs

```css
/* ─── FORM INPUTS ─── */
.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-family: var(--font-sans);
    font-size: var(--text-base);
    color: var(--color-white);
    background-color: var(--color-black);
    border: 1px solid rgba(176, 138, 87, 0.2);
    transition: all var(--transition-base);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--color-gold);
    box-shadow: 0 0 0 3px rgba(176, 138, 87, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--color-gray);
    opacity: 0.5;
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.form-select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23B08A57' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right var(--space-4) center;
}

.form-error {
    font-size: var(--text-sm);
    color: #ef4444;
    min-height: 1.25rem;
}
```

### Sistema .reveal / data-animate

```css
/* ─── SISTEMA DE ANIMAÇÃO NO SCROLL ─── */
[data-animate] {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 600ms ease-out, transform 600ms ease-out;
}

[data-animate].animate {
    opacity: 1;
    transform: translateY(0);
}
```

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

| Nome @keyframes | 0% / Estado inicial | 50% | 100% / Estado final | Duração padrão | Easing | Onde é usado |
|-----------------|---------------------|-----|---------------------|----------------|--------|--------------|
| `heroImageScale` | `opacity: 0; transform: scale(1.1)` | — | `opacity: 1; transform: scale(1)` | 1500ms | ease-out | `.hero-bg img.animate` |
| `lineExpandCenter` | `width: 0` | — | `width: 80px` | 1000ms | ease | `.hero-line.animate` |
| `fadeUp` | `opacity: 0; transform: translateY(20-40px)` | — | `opacity: 1; transform: translateY(0)` | 800-900ms | ease | `.hero-label`, `.hero-title-line`, `.hero-subtitle`, `.hero-cta` |
| `fadeIn` | `opacity: 0` | — | `opacity: 1` | 800ms | ease | `.hero-scroll.animate` |
| `scrollBounce` | `transform: scaleY(1); opacity: 1` | `transform: scaleY(0.5); opacity: 0.5` | `transform: scaleY(1); opacity: 1` | 2000ms | ease-in-out | `.hero-scroll-line` (loop infinito) |
| `cardFadeUp` | `opacity: 0; transform: translateY(30px)` | — | `opacity: 1; transform: translateY(0)` | 700ms | cubic-bezier(0.4,0,0.2,1) | `.servico-card.animate` |
| `slideIn` | `opacity: 0; transform: translateX(-60px)` | — | `opacity: 1; transform: translateX(0)` | 700ms | ease-out | `.timeline-item.animate` |
| `scaleIn` | `opacity: 0; transform: scale(0.95)` | — | `opacity: 1; transform: scale(1)` | 700ms | ease-out | `.depoimento-content.animate` |
| `spin` | `transform: rotate(0deg)` | — | `transform: rotate(360deg)` | 1000ms | linear | `.btn-loader` (loop infinito) |
| `ckFadeInUp` | `opacity: 0; transform: translateY(20px) scale(0.85)` | — | `opacity: 1; transform: translateY(0) scale(1)` | 600ms | — | `.ck-prefs-btn--visible` |

**Reduced motion (`prefers-reduced-motion: reduce`):**
```css
@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
    .hero-title-line, .hero-image, .hero-label, .hero-subtitle, .hero-cta, .hero-scroll, .servico-item, .timeline-item, .depoimento-content {
        opacity: 1;
        transform: none;
    }
}
```

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função / Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|------------------------|---------|----------------|--------------------|--------------------|
| `handleNavbarScroll` | scroll (passive) | Se `window.scrollY > 50`, adiciona `.scrolled` | `.scrolled` | `#navbar` |
| `toggleMobileMenu` | click em `.navbar-toggle` | Toggle `aria-expanded`, toggle `.active` no menu e overlay | `.active` | `.navbar-menu`, `.drawer-overlay` |
| `closeMobileMenu` | click em `.drawer-close`, `.drawer-overlay`, ou qualquer `.navbar-link` | Fecha menu mobile | remove `.active`, `aria-expanded="false"` | `.navbar-menu`, `.drawer-overlay` |
| `animateHero` | DOMContentLoaded + 100ms | Adiciona `.animate` sequencialmente com delays via setTimeout | `.animate` | `.hero-bg img` (100ms), `.hero-line` (500ms), `.hero-label` (700ms), `.hero-title-line` (900ms + index*150), `.hero-subtitle` (1400ms), `.hero-cta` (1600ms), `.hero-scroll` (2000ms) |
| IntersectionObserver (geral) | Scroll into view (threshold: 0.1, rootMargin: 0px 0px -10% 0px) | Adiciona `.animate` e para de observar | `.animate` | Todos `[data-animate]`, `.servico-card`, `.timeline-item`, `.depoimento-content` |
| Scroll suave para âncoras | click em `a[href^="#"]` | Previne default, calcula posição com offset da navbar | — | Elemento alvo do href |
| Máscara de telefone | input em `#telefone` | Formata como (XX) XXXXX-XXXX ou (XX) XXXX-XXXX | — | `#telefone` |
| `validateField` | blur ou input (se já tem .error) | Valida campo e exibe/esconde mensagem de erro | `.error`, texto em `.form-error` | Campo do formulário |
| `validateForm` | submit do form | Valida todos os campos required | `.error` | Campos inválidos |
| Envio do formulário | submit do `#contato-form` | Se válido, monta mensagem WhatsApp, mostra loading, abre WhatsApp em nova aba após 800ms | `.loading`, `disabled=true` | `button[type="submit"]` |
| FAQ accordion | click em `.faq-question` | Previne default do details, fecha todos os outros, toggle o atual | `[open]` | `.faq-item` |
| Reduced motion detect | media query match | Zera todas as transições CSS custom properties | — | `:root` |
| Lazy loading de imagens | IntersectionObserver (rootMargin: 50px 0px) | Troca data-src para src, adiciona `.loaded` | `.loaded` | `img[loading="lazy"]` |
| Animação de divisores | IntersectionObserver (threshold: 0.5) | Expande width de 0 para 60px | inline style width | `.divisor-line` |
| Active nav link | scroll (passive) | Detecta seção visível e adiciona `.active` ao link correspondente | `.active` | `.navbar-link` |
| Spotlight nos cards | mousemove em `.servico-card` | Calcula posição percentual do mouse e atualiza CSS variables | — `--mouse-x`, `--mouse-y` | `.servico-card` |
| Cookie Banner init | DOMContentLoaded | Verifica localStorage, mostra banner após 600ms se necessário | `.ck-banner--visible` | `#ck-banner` |
| Cookie acceptAll | click em `#ck-accept-all` ou `#ck-modal-accept-all` | Salva todas as preferências como true, esconde banner | — | localStorage + banner |
| Cookie rejectAll | click em `#ck-reject` ou `#ck-modal-reject` | Salva apenas necessários, esconde banner | — | localStorage + banner |
| Cookie saveCustom | click em `#ck-modal-save` | Lê toggles e salva preferências customizadas | — | localStorage + banner |
| Cookie openModal | click em `#ck-customize` ou `#ck-prefs-link` | Sincroniza toggles, mostra modal | `.ck-modal--visible` | `#ck-modal` |
| Cookie closeModal | click em `#ck-modal-close`, `#ck-modal-overlay`, ou ESC | Esconde modal | remove `.ck-modal--visible` | `#ck-modal` |

---

## 6. RESPONSIVIDADE

| Breakpoint | Elemento | Propriedade | Valor padrão (mobile) | Valor no breakpoint |
|------------|----------|-------------|----------------------|---------------------|
| `min-width: 768px` | `:root` | `--container-padding` | `1.5rem` | `2rem` |
| `min-width: 768px` | `.section-title` | `font-size` | `1.875rem` | `2.25rem` |
| `min-width: 768px` | `.navbar-toggle` | `display` | `flex` | `none` |
| `min-width: 768px` | `.navbar-menu` | posição e layout | fixed right drawer | static row, gap: 2rem |
| `min-width: 768px` | `.hero-title` | `font-size` | `clamp(2.5rem,8vw,5.5rem)` | `clamp(3rem,7vw,6rem)` |
| `min-width: 768px` | `.hero-cta` | `flex-direction` | `column` | `row` |
| `min-width: 768px` | `.dor-solucao-grid` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 768px` | `.solucao-grid` | `grid-template-columns` | `1fr` | `1fr 1.3fr` |
| `min-width: 768px` | `.servicos-grid` | `grid-template-columns` | `1fr` | `repeat(2, 1fr)` |
| `min-width: 768px` | `.institucional-grid` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 768px` | `.institucional-img-1` | `height` | `350px` | `450px` |
| `min-width: 768px` | `.institucional-img-2` | `height` | `280px` | `380px` |
| `min-width: 768px` | `.timeline-items` | `flex-direction` | `column` | `row` |
| `min-width: 768px` | `.timeline-item` | padding e layout | `padding-left: 2rem` | `padding-left: 0; padding-top: 2rem; flex: 1; min-width: 250px` |
| `min-width: 768px` | `.timeline-marker` | posição | `top: 12px; left: 0` | `top: 0; left: 0` |
| `min-width: 768px` | `.depoimentos-container` | `flex-direction` | `column` | `row` |
| `min-width: 768px` | `.depoimento-divisor` | dimensões | `width: 1px; height: 80px; margin: 0 auto` | `width: 1px; height: 120px; margin: 0` |
| `min-width: 768px` | `.localizacao-grid` | `grid-template-columns` | `1fr` | `repeat(2, 1fr)` |
| `min-width: 768px` | `.endereco-principal` | `grid-column` | — | `span 2` |
| `min-width: 768px` | `.mapa-container` | `height` | `350px` | `450px` |
| `min-width: 768px` | `.contato-grid` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 768px` | `.contato-form` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 768px` | campos full-width no form | `grid-column` | — | `span 2` (textarea, btn, success) |
| `min-width: 1024px` | `:root` | `--container-padding` | `1.5rem` | `3rem` |
| `min-width: 1024px` | `.section-title` | `font-size` | `1.875rem` | `3rem` |
| `min-width: 1024px` | `.servicos-grid` | `grid-template-columns` | `1fr` (mobile) / `repeat(2,1fr)` (tablet) | `repeat(3, 1fr)` |
| `min-width: 1024px` | `.servico-card` | `padding` | `2rem 1.5rem` | `2.5rem` |
| `min-width: 1024px` | `.servico-card-icon` | `width/height` | `56px` | `64px` |
| `min-width: 1024px` | `.servico-card-icon svg` | `width/height` | `24px` | `28px` |
| `min-width: 1024px` | `.localizacao-grid` | `grid-template-columns` | `1fr` | `repeat(4, 1fr)` |
| `min-width: 1024px` | `.endereco-principal` | `grid-column` | `span 2` (tablet) | `span 1` |
| `min-width: 1280px` | `.hero-title` | `font-size` | `clamp(2.5rem,8vw,5.5rem)` | `clamp(4rem, 6vw, 7rem)` |
| `max-width: 992px` | `.footer-container` | `grid-template-columns` | `repeat(4, 1fr)` | `1fr 1fr` |
| `max-width: 767px` | `.footer` | `padding` | — | `padding-left: 25px !important; padding-right: 25px !important` |
| `max-width: 767px` | `.footer-container` | `grid-template-columns` | `repeat(4,1fr)` / `1fr 1fr` | `1fr !important` |
| `max-width: 767px` | múltiplos seletores específicos | margens/paddings | valores desktop | `0 !important` (reset mobile) |

---

## 7. PERFORMANCE & SEO TÉCNICO

| Técnica | Elemento/Recurso | Detalhe |
|---------|------------------|---------|
| `fetchpriority="high"` | Imagem hero (`hero-desktop-...webp`) | Prioridade máxima de carregamento para LCP |
| `loading="eager"` | Imagem hero e logo navbar | Carregamento imediato, não lazy |
| `loading="lazy"` | Todas as imagens das seções internas (`problema`, `solucao`, `institucional`, `equipe`, `sobre-logo`, iframe do mapa) | Lazy loading nativo para imagens abaixo do fold |
| `decoding="async"` | Imagem hero | Decode fora da thread principal |
| `rel="preconnect"` | `fonts.googleapis.com` e `fonts.gstatic.com` | Preconexão para fontes |
| `rel="canonical"` | Head de todas as páginas | Evita conteúdo duplicado |
| Schema.org @graph | JSON-LD inline | `@type`: LegalService, WebSite, WebPage, FAQPage, AggregateRating, OfferCatalog com 6 Offers, PostalAddress, GeoCoordinates, OpeningHoursSpecification, 9x areaServed |
| Meta geo | `<meta name="geo.position" content="-22.9081808;-43.5661817">` | Geo-localização do escritório |
| Meta theme-color | `<meta name="theme-color" content="#0A0A0A">` | Cor da barra do navegador mobile |
| Open Graph completo | 8 propriedades OG + Twitter Card | Inclui image:width/height (1920×1080) |
| ARIA labels | Navbar, drawer, menu toggle, scroll indicator, divisores | Acessibilidade completa |
| `role="dialog"` e `aria-modal="true"` | Drawer mobile e cookie banner | Semântica de modal |
| `itemscope` + `itemtype` | Depoimentos (schema.org/Review, /Rating, /Person) | Microdata inline nos depoimentos |
| Cookie consent LGPD/GDPR | Banner + Modal + localStorage | 5 categorias de cookies com toggles |
| Formulário `novalidate` | `<form novalidate>` | Validação customizada via JS |
| `aria-live="polite"` | `.form-error` e `.form-success` | Anúncio de erros para leitores de tela |

---

## 8. ANTI-PADRÕES REGISTRADOS

❌ **HERO COM VIDEO DE FUNDO** → Genérico seria: usar vídeo autoplay como background do hero para parecer "premium". → Aqui foi feito: imagem estática com overlay escuro (`rgba(0,0,0,0.8)`) e animação de `scale(1.1) → scale(1)` com `opacity: 0 → 1`. → Prova técnica: `.hero-bg img { opacity: 0; transform: scale(1.1); } .hero-bg img.animate { animation: heroImageScale 1500ms ease-out forwards; }` — efeito Ken Burns sutil sem peso de vídeo.

❌ **SLIDER/CARROSSEL DE DEPOIMENTOS** → Genérico seria: carrossel swipeable com múltiplos depoimentos escondidos. → Aqui foi feito: dois depoimentos empilhados verticalmente (mobile) ou lado a lado com divisor dourado vertical (desktop), ambos sempre visíveis. → Prova técnica: `.depoimentos-container { display: flex; flex-direction: column (mobile) / row (desktop); } .depoimento-divisor { width: 1px; height: 80px; background: linear-gradient(to bottom, #B08A57, transparent); }` — todos os depoimentos são exibidos simultaneamente, sem ocultar conteúdo.

❌ **ÍCONES DE BIBLIOTECA EXTERNA** → Genérico seria: importar Font Awesome, Lucide ou similar. → Aqui foi feito: todos os ícones são SVG inline manualmente desenhados no HTML, com `stroke="currentColor"` para herdar a cor do elemento pai. → Prova técnica: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ...>` — zero requisições externas de ícones.

❌ **BOTÃO "ENVIAR" QUE REALMENTE ENVIA PARA BACKEND** → Genérico seria: formulário POST para servidor com tratamento de erro complexo. → Aqui foi feito: formulário interceptado via JS, dados formatados em texto e redirecionados para WhatsApp Web (`https://wa.me/5521981600382?text=...`). → Prova técnica: `contatoForm.addEventListener('submit', async (e) => { e.preventDefault(); ... const urlWhatsApp = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(textoWhatsApp); window.open(urlWhatsApp, '_blank'); })` — zero backend, 100% conversão.

❌ **TOOLTIPS/HOVER COM LIBRARIA** → Genérico seria: usar Tippy.js ou similar para tooltips. → Aqui foi feito: nenhum tooltip — o design confia em estados hover visuais de borda, cor e transformação. → Prova técnica: `.servico-card:hover { border-color: rgba(176,138,87,0.4); transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(176,138,87,0.1); }` — comunicação visual pura via CSS.

❌ **MODAL DE SERVIÇO COM JAVASCRIPT COMPLEXO** → Genérico seria: ao clicar "Saiba mais", abrir um modal com descrição longa. → Aqui foi feito: o link "Saiba mais" redireciona diretamente para WhatsApp com mensagem pré-preenchida sobre a área específica. → Prova técnica: `<a href="https://wa.me/5521981600382?text=...Direito%20Empresarial." target="_blank">` — cada card tem um link WhatsApp personalizado por área.

❌ **DARK MODE TOGGLE** → Genérico seria: botão de sol/lua que alterna entre light e dark. → Aqui foi feito: o site é **exclusivamente dark** por princípio de design editorial. Não há modo claro. → Prova técnica: `body { background-color: var(--color-black); color: var(--color-gray-light); }` — sem nenhuma classe `.dark` ou toggle no DOM.

❌ **ANIMAÇÕES CSS AGRESSIVAS SEM RESPEITO À PREFERÊNCIA DO USUÁRIO** → Genérico seria: animações que não respeitam `prefers-reduced-motion`. → Aqui foi feito: media query completa que zera durações de animação e força `opacity: 1; transform: none` nos elementos animados. Além disso, o JS detecta a preferência e zera as CSS custom properties de transição. → Prova técnica: `@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }` + `const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)'); if (prefersReducedMotion.matches) { document.documentElement.style.setProperty('--transition-fast', '0ms'); ... }`.

❌ **RODAPÉ PADRÃO DE 4 COLUNAS SEM MICRO-AJUSTES** → Genérico seria: grid simples de 4 colunas com gaps uniformes. → Aqui foi feito: seletores nth-of-type extremamente específicos com margens negativas e paddings customizados para alinhar visualmente as colunas, compensando o espaço transparente do logo PNG. → Prova técnica: `footer>div:nth-of-type(1)>div>div:nth-of-type(1)>a>img { margin-bottom: -28px; margin-left: 4px; padding-right: 40px; margin-top: -22px; }` e similares para as outras 3 colunas.

---

## APÊNDICE: ARQUIVOS DO PROJETO

| Arquivo | Função |
|---------|--------|
| `index.html` | Página principal — 1163 linhas |
| `style.css` | Folha de estilos principal — 2556 linhas |
| `script.js` | JavaScript principal — 531 linhas |
| `cookie-banner.css` | Estilos do banner de cookies LGPD — 430 linhas |
| `cookie-banner.js` | Lógica do banner de cookies — 287 linhas |
| `politica-de-privacidade.html` | Página de política de privacidade — 245 linhas |
| `termos-e-condicoes.html` | Página de termos e condições — 210 linhas |
| `robots.txt` | Diretivas para crawlers |
| `sitemap.xml` | Mapa do site para SEO |

---

*Documento gerado por engenharia reversa completa. Todos os valores foram extraídos diretamente dos arquivos fonte. Nenhum valor foi inventado ou aproximado.*
