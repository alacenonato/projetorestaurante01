Sim. Vou deixar o **Projeto 03 – Bella Tavola V2.1** funcionando sem nenhuma imagem local.

Para evitar URLs inventadas, vou usar imagens remotas do **Unsplash** com URLs de imagem conhecidas. O Unsplash disponibiliza fotos de comida italiana, restaurantes, pizza etc. ([Unsplash][1])

> **Importante:** as imagens remotas precisam de internet para aparecer. Para um projeto de estudo/portfólio isso é ótimo; posteriormente podemos aprender a baixar, otimizar e hospedar as imagens localmente.

## 📁 Estrutura da V2.1

Agora podemos simplificar para:

```text
projeto-03-restaurante/
│
├── index.html
│
└── css/
    └── style.css
```

Não precisamos mais de:

```text
assets/images/
```

---

# 🍝 `index.html` — V2.1 completa

Substitua o seu `index.html` atual por este:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Bella Tavola - Restaurante italiano com massas artesanais, pizzas e pratos especiais."
    >

    <title>Bella Tavola | Cucina Italiana</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
    >

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- =========================
         HEADER
    ========================== -->

    <header class="header">

        <div class="container header-container">

            <a href="#" class="logo">
                Bella Tavola
            </a>

            <nav class="nav">

                <a href="#inicio">Início</a>

                <a href="#cardapio">Cardápio</a>

                <a href="#sobre">Sobre</a>

                <a href="#depoimentos">Depoimentos</a>

                <a href="#contato">Contato</a>

            </nav>

            <a href="#reservas" class="btn btn-primary">
                Reservar mesa
            </a>

        </div>

    </header>


    <main>

        <!-- =========================
             HERO
        ========================== -->

        <section class="hero" id="inicio">

            <div class="hero-overlay"></div>

            <div class="container hero-content">

                <span class="hero-label">
                    Cucina Italiana
                </span>

                <h1>
                    Uma mesa,<br>
                    mil histórias.
                </h1>

                <p>
                    Sabores italianos preparados com ingredientes
                    selecionados, tradição e um toque contemporâneo.
                </p>

                <div class="hero-buttons">

                    <a href="#cardapio" class="btn btn-primary">
                        Ver cardápio
                    </a>

                    <a href="#reservas" class="btn btn-outline">
                        Fazer reserva
                    </a>

                </div>

            </div>

        </section>


        <!-- =========================
             INTRODUÇÃO
        ========================== -->

        <section class="intro section">

            <div class="container intro-container">

                <div>

                    <span class="section-label">
                        Benvenuti
                    </span>

                    <h2>
                        O sabor da Itália
                        em cada detalhe.
                    </h2>

                </div>

                <div>

                    <p>
                        No Bella Tavola, acreditamos que uma boa refeição
                        é muito mais do que comida. É encontro, conversa,
                        memória e celebração.
                    </p>

                    <p>
                        Nossa cozinha combina receitas tradicionais italianas
                        com ingredientes frescos e uma apresentação moderna.
                    </p>

                </div>

            </div>

        </section>


        <!-- =========================
             CARDÁPIO
        ========================== -->

        <section class="menu section" id="cardapio">

            <div class="container">

                <div class="section-header">

                    <div>

                        <span class="section-label">
                            Nosso cardápio
                        </span>

                        <h2>
                            Feito para<br>
                            despertar os sentidos.
                        </h2>

                    </div>

                    <p>
                        Uma seleção de pratos preparados diariamente
                        pela nossa equipe.
                    </p>

                </div>


                <div class="menu-grid">


                    <!-- PIZZA -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza italiana artesanal"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Margherita
                                </h3>

                                <span>
                                    R$ 42
                                </span>

                            </div>

                            <p>
                                Molho de tomate, mozzarella fresca,
                                manjericão e azeite extravirgem.
                            </p>

                        </div>

                    </article>


                    <!-- MASSA -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
                                alt="Massa italiana artesanal"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pasta della Casa
                                </h3>

                                <span>
                                    R$ 48
                                </span>

                            </div>

                            <p>
                                Massa artesanal preparada na casa,
                                molho especial e parmesão italiano.
                            </p>

                        </div>

                    </article>


                    <!-- CARNE -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85"
                                alt="Filé grelhado servido em restaurante"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Bistecca Toscana
                                </h3>

                                <span>
                                    R$ 79
                                </span>

                            </div>

                            <p>
                                Corte selecionado grelhado,
                                ervas frescas e legumes assados.
                            </p>

                        </div>

                    </article>


                    <!-- SALADA -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
                                alt="Salada fresca com vegetais"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Insalata Mediterrânea
                                </h3>

                                <span>
                                    R$ 34
                                </span>

                            </div>

                            <p>
                                Folhas frescas, tomates, queijo,
                                ervas e molho da casa.
                            </p>

                        </div>

                    </article>


                    <!-- SOBREMESA -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
                                alt="Sobremesa italiana"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Dolce Italiano
                                </h3>

                                <span>
                                    R$ 28
                                </span>

                            </div>

                            <p>
                                Sobremesa artesanal preparada
                                diariamente pelo nosso chef.
                            </p>

                        </div>

                    </article>


                </div>

            </div>

        </section>


        <!-- =========================
             SOBRE
        ========================== -->

        <section class="about section" id="sobre">

            <div class="container about-container">

                <div class="about-image">

                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
                        alt="Interior elegante de restaurante"
                        loading="lazy"
                    >

                </div>


                <div class="about-content">

                    <span class="section-label">
                        Nossa história
                    </span>

                    <h2>
                        Uma paixão que começou
                        na cozinha da família.
                    </h2>

                    <p>
                        O Bella Tavola nasceu inspirado nas tradicionais
                        trattorias italianas, onde comida e família sempre
                        estiveram juntas à mesa.
                    </p>

                    <p>
                        Hoje mantemos essa mesma essência, combinando
                        receitas tradicionais, ingredientes selecionados
                        e criatividade.
                    </p>

                    <a href="#contato" class="text-link">
                        Conheça nossa história →
                    </a>

                </div>

            </div>

        </section>


        <!-- =========================
             DEPOIMENTOS
        ========================== -->

        <section class="testimonials section" id="depoimentos">

            <div class="container">

                <div class="section-header centered">

                    <span class="section-label">
                        O que dizem nossos clientes
                    </span>

                    <h2>
                        Experiências que ficam
                        na memória.
                    </h2>

                </div>


                <div class="testimonial-grid">


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Um dos melhores restaurantes italianos
                            que já visitei. A massa estava simplesmente
                            perfeita."
                        </p>

                        <strong>
                            Mariana Souza
                        </strong>

                    </article>


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Ambiente maravilhoso, atendimento excelente
                            e comida realmente deliciosa."
                        </p>

                        <strong>
                            Rafael Oliveira
                        </strong>

                    </article>


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Perfeito para um jantar especial.
                            Voltaremos com certeza."
                        </p>

                        <strong>
                            Camila Martins
                        </strong>

                    </article>


                </div>

            </div>

        </section>


        <!-- =========================
             CTA
        ========================== -->

        <section class="cta" id="reservas">

            <div class="container cta-content">

                <span class="section-label">
                    Sua próxima experiência
                </span>

                <h2>
                    Reserve sua mesa.
                </h2>

                <p>
                    Venha experimentar a verdadeira essência
                    da cozinha italiana.
                </p>

                <a href="#contato" class="btn btn-light">
                    Fazer uma reserva
                </a>

            </div>

        </section>


        <!-- =========================
             CONTATO
        ========================== -->

        <section class="contact section" id="contato">

            <div class="container contact-container">


                <div>

                    <span class="section-label">
                        Onde estamos
                    </span>

                    <h2>
                        Venha nos visitar.
                    </h2>

                    <p>
                        Rua das Oliveiras, 250<br>
                        Centro — São Paulo, SP
                    </p>

                </div>


                <div class="contact-info">

                    <div>

                        <span>
                            Telefone
                        </span>

                        <strong>
                            (11) 99999-9999
                        </strong>

                    </div>


                    <div>

                        <span>
                            Horário
                        </span>

                        <strong>
                            Terça a Domingo<br>
                            18h às 23h
                        </strong>

                    </div>


                    <div>

                        <span>
                            E-mail
                        </span>

                        <strong>
                            contato@bellatavola.com
                        </strong>

                    </div>

                </div>

            </div>

        </section>

    </main>


    <!-- =========================
         FOOTER
    ========================== -->

    <footer class="footer">

        <div class="container footer-container">

            <div>

                <a href="#" class="logo">
                    Bella Tavola
                </a>

                <p>
                    Cucina Italiana
                </p>

            </div>


            <div class="footer-links">

                <a href="#inicio">
                    Início
                </a>

                <a href="#cardapio">
                    Cardápio
                </a>

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#contato">
                    Contato
                </a>

            </div>

        </div>


        <div class="container footer-bottom">

            <p>
                © 2026 Bella Tavola. Projeto fictício para estudo.
            </p>

            <p class="photo-credit">
                Fotos: Unsplash
            </p>

        </div>

    </footer>

</body>

</html>
```

## 🎨 Pequena alteração no CSS

O seu CSS da **V2** continua praticamente todo aproveitável.

Só precisamos garantir que as imagens tenham um comportamento profissional.

Adicione/substitua estas regras:

```css
.menu-image {
    width: 100%;
    height: 260px;
    overflow: hidden;
}

.menu-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
}

.menu-card:hover .menu-image img {
    transform: scale(1.06);
}

.about-image {
    width: 100%;
    height: 520px;
    overflow: hidden;
    border-radius: var(--radius-lg);
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}
```

E, se o seu `.hero` da V2 estava usando:

```css
background-image: url("../assets/images/hero.jpg");
```

troque por:

```css
.hero {
    background-image:
        url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85");
}
```

Assim você também elimina completamente a necessidade do `hero.jpg`.

---

# 🖼️ O que está acontecendo agora

Seu projeto passa a carregar:

| Área         | Imagem                  |
| ------------ | ----------------------- |
| 🏠 Hero      | Restaurante             |
| 🍕 Pizza     | Pizza italiana          |
| 🍝 Massa     | Massa                   |
| 🥩 Carne     | Filé/carne              |
| 🥗 Salada    | Salada                  |
| 🍰 Sobremesa | Sobremesa               |
| 🏛️ Sobre    | Interior de restaurante |

E todas são carregadas diretamente pela internet.

O `loading="lazy"` que coloquei nas imagens também é importante: o navegador pode adiar o carregamento das imagens que ainda não estão próximas da área visível.

### Uma observação importante sobre os créditos

Como estamos usando **Pexels/Unsplash**, é importante respeitar as regras atuais de cada serviço. No caso do Pexels, a atribuição não é obrigatória pela licença, mas é recomendada; o próprio Pexels recomenda indicar o fotógrafo e linkar para a foto quando possível. ([Pexels Help][2])

Por isso deixei:

```html
<p class="photo-credit">
    Fotos: Unsplash
</p>
```

no footer.

**Para um projeto de estudo está excelente.** Depois, quando chegarmos à parte profissional, podemos melhorar ainda mais isso usando créditos individuais para cada fotógrafo e links para as páginas originais.

[Licença do Pexels em português](https://www.pexels.com/pt-br/licenca/?utm_source=chatgpt.com)

[Fotos de restaurante italiano no Unsplash](https://unsplash.com/pt-br/s/fotografias/Restaurante-italiano?utm_source=chatgpt.com)

### 🚀 E agora temos uma base muito boa para a V3

A próxima evolução natural do **Projeto 03** seria transformar essa página estática em uma pequena aplicação:

```text
V2.1
│
├── HTML semântico       ✅
├── CSS profissional     ✅
├── Imagens reais        ✅
├── Layout responsivo    ✅
│
└── V3
    ├── ☰ Menu mobile
    ├── 🔎 Filtro de pratos
    ├── ➕ Adicionar pedido
    ├── 🛒 Carrinho lateral
    ├── 🔢 Quantidade
    ├── 💰 Total
    ├── 💾 LocalStorage
    └── 📱 Experiência mobile
```

Isso já começa a transformar o **Projeto 03** de uma simples landing page em uma aplicação frontend de verdade.

[1]: https://unsplash.com/pt-br/s/fotografias/Restaurante-italiano?utm_source=chatgpt.com "Imagens de Restaurante Italiano | Baixe imagens gratuitas na Unsplash"
[2]: https://help.pexels.com/hc/en-us/articles/360042295174-What-is-the-license-of-the-photos-and-videos-on-Pexels?utm_source=chatgpt.com "What is the license of the photos and videos on Pexels? – Pexels"


Você tem razão. Para evitar erro por ficar misturando pedaços da V2 com a V3, vamos fazer do jeito certo: **a V3 será autocontida**, com o `index.html` e o `style.css` completos, prontos para substituir os arquivos anteriores.

A partir daqui, considere estes dois arquivos como a **versão oficial do Projeto 03 — V3**. Não precisa reaproveitar código das versões anteriores.

## 📁 Estrutura

```text
projeto-03-restaurante/
│
├── index.html
│
└── css/
    └── style.css
```

Não precisa criar pasta `assets/images`.

---

# 1. `index.html`

Apague todo o conteúdo do seu `index.html` e coloque **exatamente este código**:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta
        name="description"
        content="Bella Tavola - Restaurante italiano com massas artesanais, pizzas e pratos especiais."
    >

    <title>Bella Tavola | Cucina Italiana</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
    >

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- ==================================================
         HEADER
    ================================================== -->

    <header class="header">

        <div class="container header-container">

            <a href="#inicio" class="logo">
                Bella Tavola
            </a>

            <nav class="nav">

                <a href="#inicio">Início</a>

                <a href="#cardapio">Cardápio</a>

                <a href="#sobre">Sobre</a>

                <a href="#depoimentos">Depoimentos</a>

                <a href="#contato">Contato</a>

            </nav>

            <a href="#reservas" class="btn btn-primary">
                Reservar mesa
            </a>

        </div>

    </header>


    <main>

        <!-- ==================================================
             HERO
        ================================================== -->

        <section class="hero" id="inicio">

            <div class="hero-overlay"></div>

            <div class="container hero-content">

                <span class="hero-label">
                    CUCINA ITALIANA
                </span>

                <h1>
                    Uma mesa,<br>
                    mil histórias.
                </h1>

                <p>
                    Sabores italianos preparados com ingredientes
                    selecionados, tradição e um toque contemporâneo.
                </p>

                <div class="hero-buttons">

                    <a href="#cardapio" class="btn btn-primary">
                        Ver cardápio
                    </a>

                    <a href="#reservas" class="btn btn-outline">
                        Fazer reserva
                    </a>

                </div>

            </div>

        </section>


        <!-- ==================================================
             INTRO
        ================================================== -->

        <section class="intro section">

            <div class="container intro-container">

                <div class="intro-heading">

                    <span class="section-label">
                        BENVENUTI
                    </span>

                    <h2>
                        O sabor da Itália
                        em cada detalhe.
                    </h2>

                </div>

                <div class="intro-text">

                    <p>
                        No Bella Tavola, acreditamos que uma boa refeição
                        é muito mais do que comida. É encontro, conversa,
                        memória e celebração.
                    </p>

                    <p>
                        Nossa cozinha combina receitas tradicionais italianas
                        com ingredientes frescos e uma apresentação moderna.
                    </p>

                </div>

            </div>

        </section>


        <!-- ==================================================
             CARDÁPIO
        ================================================== -->

        <section class="menu section" id="cardapio">

            <div class="container">

                <div class="section-header">

                    <div>

                        <span class="section-label">
                            NOSSO CARDÁPIO
                        </span>

                        <h2>
                            Feito para<br>
                            despertar os sentidos.
                        </h2>

                    </div>

                    <p>
                        Uma seleção de pratos preparados diariamente
                        pela nossa equipe.
                    </p>

                </div>


                <div class="menu-grid">


                    <!-- PRATO 01 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza Margherita italiana"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Margherita
                                </h3>

                                <span class="price">
                                    R$ 42
                                </span>

                            </div>

                            <p>
                                Molho de tomate, mozzarella fresca,
                                manjericão e azeite extravirgem.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                    <!-- PRATO 02 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
                                alt="Massa italiana artesanal"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pasta della Casa
                                </h3>

                                <span class="price">
                                    R$ 48
                                </span>

                            </div>

                            <p>
                                Massa artesanal preparada na casa,
                                molho especial e parmesão italiano.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                    <!-- PRATO 03 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85"
                                alt="Bistecca grelhada"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Bistecca Toscana
                                </h3>

                                <span class="price">
                                    R$ 79
                                </span>

                            </div>

                            <p>
                                Corte selecionado grelhado,
                                ervas frescas e legumes assados.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                    <!-- PRATO 04 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
                                alt="Salada mediterrânea"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Insalata Mediterrânea
                                </h3>

                                <span class="price">
                                    R$ 34
                                </span>

                            </div>

                            <p>
                                Folhas frescas, tomates, queijo,
                                ervas e molho especial da casa.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                    <!-- PRATO 05 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
                                alt="Sobremesa artesanal"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Dolce Italiano
                                </h3>

                                <span class="price">
                                    R$ 28
                                </span>

                            </div>

                            <p>
                                Sobremesa artesanal preparada
                                diariamente pelo nosso chef.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                    <!-- PRATO 06 -->

                    <article class="menu-card">

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza artesanal"
                                loading="lazy"
                            >

                        </div>

                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Diavola
                                </h3>

                                <span class="price">
                                    R$ 49
                                </span>

                            </div>

                            <p>
                                Molho de tomate, mozzarella,
                                salame picante e manjericão.
                            </p>

                            <button class="menu-button">
                                Ver detalhes
                            </button>

                        </div>

                    </article>


                </div>

            </div>

        </section>


        <!-- ==================================================
             SOBRE
        ================================================== -->

        <section class="about section" id="sobre">

            <div class="container about-container">

                <div class="about-image">

                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
                        alt="Interior elegante de restaurante"
                        loading="lazy"
                    >

                </div>


                <div class="about-content">

                    <span class="section-label">
                        NOSSA HISTÓRIA
                    </span>

                    <h2>
                        Uma paixão que começou
                        na cozinha da família.
                    </h2>

                    <p>
                        O Bella Tavola nasceu inspirado nas tradicionais
                        trattorias italianas, onde comida e família sempre
                        estiveram juntas à mesa.
                    </p>

                    <p>
                        Hoje mantemos essa mesma essência, combinando
                        receitas tradicionais, ingredientes selecionados
                        e criatividade.
                    </p>

                    <a href="#contato" class="text-link">
                        Conheça nossa história →
                    </a>

                </div>

            </div>

        </section>


        <!-- ==================================================
             DEPOIMENTOS
        ================================================== -->

        <section class="testimonials section" id="depoimentos">

            <div class="container">

                <div class="section-header centered">

                    <span class="section-label">
                        O QUE DIZEM NOSSOS CLIENTES
                    </span>

                    <h2>
                        Experiências que ficam
                        na memória.
                    </h2>

                </div>


                <div class="testimonial-grid">


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Um dos melhores restaurantes italianos
                            que já visitei. A massa estava simplesmente
                            perfeita."
                        </p>

                        <strong>
                            Mariana Souza
                        </strong>

                    </article>


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Ambiente maravilhoso, atendimento excelente
                            e comida realmente deliciosa."
                        </p>

                        <strong>
                            Rafael Oliveira
                        </strong>

                    </article>


                    <article class="testimonial">

                        <div class="stars">
                            ★★★★★
                        </div>

                        <p>
                            "Perfeito para um jantar especial.
                            Voltaremos com certeza."
                        </p>

                        <strong>
                            Camila Martins
                        </strong>

                    </article>


                </div>

            </div>

        </section>


        <!-- ==================================================
             RESERVAS
        ================================================== -->

        <section class="cta" id="reservas">

            <div class="container cta-content">

                <span class="section-label">
                    SUA PRÓXIMA EXPERIÊNCIA
                </span>

                <h2>
                    Reserve sua mesa.
                </h2>

                <p>
                    Venha experimentar a verdadeira essência
                    da cozinha italiana.
                </p>

                <a href="#contato" class="btn btn-light">
                    Fazer uma reserva
                </a>

            </div>

        </section>


        <!-- ==================================================
             CONTATO
        ================================================== -->

        <section class="contact section" id="contato">

            <div class="container contact-container">

                <div class="contact-heading">

                    <span class="section-label">
                        ONDE ESTAMOS
                    </span>

                    <h2>
                        Venha nos visitar.
                    </h2>

                    <p>
                        Rua das Oliveiras, 250<br>
                        Centro — São Paulo, SP
                    </p>

                </div>


                <div class="contact-info">


                    <div class="contact-item">

                        <span>
                            Telefone
                        </span>

                        <strong>
                            (11) 99999-9999
                        </strong>

                    </div>


                    <div class="contact-item">

                        <span>
                            Horário
                        </span>

                        <strong>
                            Terça a Domingo<br>
                            18h às 23h
                        </strong>

                    </div>


                    <div class="contact-item">

                        <span>
                            E-mail
                        </span>

                        <strong>
                            contato@bellatavola.com
                        </strong>

                    </div>


                </div>

            </div>

        </section>

    </main>


    <!-- ==================================================
         FOOTER
    ================================================== -->

    <footer class="footer">

        <div class="container footer-container">


            <div class="footer-brand">

                <a href="#inicio" class="logo">
                    Bella Tavola
                </a>

                <p>
                    Cucina Italiana
                </p>

            </div>


            <div class="footer-links">

                <a href="#inicio">
                    Início
                </a>

                <a href="#cardapio">
                    Cardápio
                </a>

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#contato">
                    Contato
                </a>

            </div>


        </div>


        <div class="container footer-bottom">

            <p>
                © 2026 Bella Tavola. Projeto fictício para estudo.
            </p>

            <p>
                Fotos: Unsplash
            </p>

        </div>

    </footer>

</body>

</html>
```

---

# 2. `css/style.css`

Agora **apague completamente** o conteúdo do seu `style.css` e coloque este:

```css
/* ==================================================
   RESET
================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


/* ==================================================
   VARIÁVEIS
================================================== */

:root {

    --color-primary: #b54a32;
    --color-primary-dark: #8f3826;

    --color-secondary: #707653;

    --color-dark: #2a211c;
    --color-text: #302923;
    --color-text-light: #756b64;

    --color-background: #f8f3eb;
    --color-white: #ffffff;

    --color-border: #e5ddd3;

    --shadow-small:
        0 5px 20px rgba(42, 33, 28, 0.08);

    --shadow-medium:
        0 15px 40px rgba(42, 33, 28, 0.12);

    --radius-small: 8px;
    --radius-medium: 14px;
    --radius-large: 22px;

    --container-width: 1180px;

}


/* ==================================================
   BODY
================================================== */

html {
    scroll-behavior: smooth;
}

body {

    font-family: "DM Sans", sans-serif;

    color: var(--color-text);

    background-color: var(--color-background);

    line-height: 1.6;

}


/* ==================================================
   ELEMENTOS GERAIS
================================================== */

img {
    max-width: 100%;
    display: block;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea,
select {
    font: inherit;
}

button {
    cursor: pointer;
}


/* ==================================================
   CONTAINER
================================================== */

.container {

    width: min(
        calc(100% - 40px),
        var(--container-width)
    );

    margin: 0 auto;

}


/* ==================================================
   SECTION
================================================== */

.section {
    padding: 110px 0;
}


/* ==================================================
   HEADER
================================================== */

.header {

    position: absolute;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 100;

    color: var(--color-white);

    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

}


.header-container {

    min-height: 90px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 40px;

}


/* ==================================================
   LOGO
================================================== */

.logo {

    font-family: "Playfair Display", serif;

    font-size: 27px;

    font-weight: 700;

    letter-spacing: -0.5px;

}


/* ==================================================
   NAV
================================================== */

.nav {

    display: flex;

    align-items: center;

    gap: 32px;

    margin-left: auto;

}


.nav a {

    position: relative;

    font-size: 14px;

    font-weight: 500;

    transition:
        color 0.3s ease;

}


.nav a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background-color: var(--color-white);

    transition:
        width 0.3s ease;

}


.nav a:hover::after {
    width: 100%;
}


/* ==================================================
   BOTÕES
================================================== */

.btn {

    display: inline-flex;

    align-items: center;
    justify-content: center;

    min-height: 48px;

    padding: 0 24px;

    border-radius: 50px;

    font-size: 14px;

    font-weight: 600;

    transition:
        background-color 0.3s ease,
        color 0.3s ease,
        transform 0.3s ease,
        border-color 0.3s ease;

}


.btn:hover {

    transform: translateY(-2px);

}


.btn-primary {

    background-color: var(--color-primary);

    color: var(--color-white);

}


.btn-primary:hover {

    background-color: var(--color-primary-dark);

}


.btn-outline {

    border: 1px solid rgba(255, 255, 255, 0.7);

    color: var(--color-white);

}


.btn-outline:hover {

    background-color: var(--color-white);

    color: var(--color-dark);

}


.btn-light {

    background-color: var(--color-white);

    color: var(--color-primary);

}


.btn-light:hover {

    background-color: var(--color-background);

}


/* ==================================================
   HERO
================================================== */

.hero {

    position: relative;

    min-height: 760px;

    display: flex;

    align-items: center;

    color: var(--color-white);

    background-image:
        url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85");

    background-size: cover;

    background-position: center;

}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(20, 13, 9, 0.82) 0%,
            rgba(20, 13, 9, 0.58) 45%,
            rgba(20, 13, 9, 0.25) 100%
        );

}


.hero-content {

    position: relative;

    z-index: 2;

    max-width: 700px;

    padding-top: 90px;

}


.hero-label {

    display: inline-block;

    margin-bottom: 22px;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;

    color: #e8c7a9;

}


.hero h1 {

    font-family: "Playfair Display", serif;

    font-size: clamp(54px, 7vw, 92px);

    line-height: 0.98;

    letter-spacing: -2px;

    margin-bottom: 28px;

}


.hero p {

    max-width: 560px;

    margin-bottom: 34px;

    font-size: 18px;

    color: rgba(255, 255, 255, 0.88);

}


.hero-buttons {

    display: flex;

    align-items: center;

    gap: 14px;

    flex-wrap: wrap;

}


/* ==================================================
   LABELS
================================================== */

.section-label {

    display: block;

    margin-bottom: 16px;

    color: var(--color-primary);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2.5px;

}


/* ==================================================
   TÍTULOS
================================================== */

h2 {

    font-family: "Playfair Display", serif;

    font-size: clamp(38px, 5vw, 58px);

    line-height: 1.08;

    letter-spacing: -1px;

    color: var(--color-dark);

}


/* ==================================================
   INTRO
================================================== */

.intro {

    background-color: var(--color-white);

}


.intro-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: center;

}


.intro-heading h2 {

    max-width: 500px;

}


.intro-text {

    max-width: 560px;

}


.intro-text p {

    margin-bottom: 18px;

    color: var(--color-text-light);

    font-size: 17px;

}


.intro-text p:last-child {
    margin-bottom: 0;
}


/* ==================================================
   CABEÇALHO DE SEÇÃO
================================================== */

.section-header {

    display: flex;

    align-items: end;

    justify-content: space-between;

    gap: 50px;

    margin-bottom: 55px;

}


.section-header > p {

    max-width: 390px;

    color: var(--color-text-light);

    font-size: 16px;

}


.centered {

    display: block;

    text-align: center;

}


.centered h2 {

    max-width: 700px;

    margin: 0 auto;

}


/* ==================================================
   MENU
================================================== */

.menu {

    background-color: var(--color-background);

}


.menu-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;

}


/* ==================================================
   CARD
================================================== */

.menu-card {

    overflow: hidden;

    background-color: var(--color-white);

    border: 1px solid var(--color-border);

    border-radius: var(--radius-medium);

    box-shadow: var(--shadow-small);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

}


.menu-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow-medium);

}


/* ==================================================
   IMAGEM DO CARD
================================================== */

.menu-image {

    width: 100%;

    height: 260px;

    overflow: hidden;

}


.menu-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    transition:
        transform 0.5s ease;

}


.menu-card:hover .menu-image img {

    transform: scale(1.07);

}


/* ==================================================
   CONTEÚDO DO CARD
================================================== */

.menu-content {

    padding: 25px;

}


.menu-title {

    display: flex;

    align-items: start;

    justify-content: space-between;

    gap: 15px;

    margin-bottom: 12px;

}


.menu-title h3 {

    font-family: "Playfair Display", serif;

    font-size: 23px;

    line-height: 1.2;

    color: var(--color-dark);

}


.price {

    color: var(--color-primary);

    font-size: 15px;

    font-weight: 700;

    white-space: nowrap;

}


.menu-content p {

    margin-bottom: 20px;

    color: var(--color-text-light);

    font-size: 14px;

}


/* ==================================================
   BOTÃO DO CARD
================================================== */

.menu-button {

    padding: 0;

    border: 0;

    background: none;

    color: var(--color-primary);

    font-size: 13px;

    font-weight: 700;

}


.menu-button:hover {

    color: var(--color-primary-dark);

}


/* ==================================================
   SOBRE
================================================== */

.about {

    background-color: var(--color-white);

}


.about-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 90px;

    align-items: center;

}


.about-image {

    height: 570px;

    overflow: hidden;

    border-radius: var(--radius-large);

}


.about-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

}


.about-content {

    max-width: 540px;

}


.about-content h2 {

    margin-bottom: 25px;

}


.about-content p {

    margin-bottom: 18px;

    color: var(--color-text-light);

}


.text-link {

    display: inline-block;

    margin-top: 15px;

    color: var(--color-primary);

    font-size: 14px;

    font-weight: 700;

}


.text-link:hover {

    color: var(--color-primary-dark);

}


/* ==================================================
   DEPOIMENTOS
================================================== */

.testimonials {

    background-color: var(--color-background);

}


.testimonial-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 25px;

    margin-top: 55px;

}


.testimonial {

    padding: 35px;

    background-color: var(--color-white);

    border: 1px solid var(--color-border);

    border-radius: var(--radius-medium);

}


.stars {

    margin-bottom: 20px;

    color: var(--color-primary);

    font-size: 18px;

    letter-spacing: 3px;

}


.testimonial p {

    margin-bottom: 25px;

    color: var(--color-text-light);

    font-family: "Playfair Display", serif;

    font-size: 18px;

    line-height: 1.6;

}


.testimonial strong {

    font-size: 14px;

    color: var(--color-dark);

}


/* ==================================================
   CTA
================================================== */

.cta {

    position: relative;

    padding: 120px 0;

    color: var(--color-white);

    text-align: center;

    background-image:
        linear-gradient(
            rgba(60, 28, 18, 0.82),
            rgba(60, 28, 18, 0.82)
        ),
        url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85");

    background-size: cover;

    background-position: center;

}


.cta-content {

    max-width: 700px;

}


.cta .section-label {

    color: #e8c7a9;

}


.cta h2 {

    margin-bottom: 20px;

    color: var(--color-white);

}


.cta p {

    margin-bottom: 30px;

    color: rgba(255, 255, 255, 0.85);

    font-size: 17px;

}


/* ==================================================
   CONTATO
================================================== */

.contact {

    background-color: var(--color-white);

}


.contact-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: start;

}


.contact-heading h2 {

    margin-bottom: 25px;

}


.contact-heading p {

    color: var(--color-text-light);

    font-size: 16px;

}


.contact-info {

    display: grid;

    gap: 30px;

}


.contact-item {

    padding-bottom: 25px;

    border-bottom: 1px solid var(--color-border);

}


.contact-item span {

    display: block;

    margin-bottom: 5px;

    color: var(--color-text-light);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 1.5px;

    text-transform: uppercase;

}


.contact-item strong {

    color: var(--color-dark);

    font-size: 16px;

}


/* ==================================================
   FOOTER
================================================== */

.footer {

    padding-top: 55px;

    background-color: var(--color-dark);

    color: var(--color-white);

}


.footer-container {

    display: flex;

    align-items: start;

    justify-content: space-between;

    gap: 40px;

    padding-bottom: 45px;

}


.footer-brand .logo {

    display: inline-block;

    margin-bottom: 8px;

}


.footer-brand p {

    color: rgba(255, 255, 255, 0.55);

    font-size: 13px;

}


.footer-links {

    display: flex;

    gap: 25px;

}


.footer-links a {

    color: rgba(255, 255, 255, 0.75);

    font-size: 13px;

    transition:
        color 0.3s ease;

}


.footer-links a:hover {

    color: var(--color-white);

}


.footer-bottom {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    padding: 22px 0;

    border-top: 1px solid rgba(255, 255, 255, 0.12);

}


.footer-bottom p {

    color: rgba(255, 255, 255, 0.45);

    font-size: 12px;

}


/* ==================================================
   RESPONSIVIDADE
================================================== */

@media (max-width: 1000px) {

    .header-container {

        gap: 20px;

    }


    .nav {

        gap: 18px;

    }


    .menu-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

    }


    .about-container {

        gap: 50px;

    }


    .intro-container {

        gap: 50px;

    }


    .contact-container {

        gap: 50px;

    }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 800px) {

    .header-container {

        min-height: 75px;

    }


    .header .btn {

        display: none;

    }


    .nav {

        display: none;

    }


    .hero {

        min-height: 680px;

    }


    .section {

        padding: 80px 0;

    }


    .intro-container {

        grid-template-columns: 1fr;

        gap: 30px;

    }


    .section-header {

        display: block;

    }


    .section-header > p {

        margin-top: 25px;

    }


    .about-container {

        grid-template-columns: 1fr;

        gap: 45px;

    }


    .about-image {

        height: 450px;

    }


    .testimonial-grid {

        grid-template-columns: 1fr;

    }


    .contact-container {

        grid-template-columns: 1fr;

    }

}


/* ==================================================
   CELULAR
================================================== */

@media (max-width: 600px) {

    .container {

        width: min(
            calc(100% - 30px),
            var(--container-width)
        );

    }


    .logo {

        font-size: 23px;

    }


    .hero {

        min-height: 650px;

        background-position: center;

    }


    .hero-content {

        padding-top: 70px;

    }


    .hero h1 {

        font-size: 52px;

        letter-spacing: -1px;

    }


    .hero p {

        font-size: 16px;

    }


    .hero-buttons {

        flex-direction: column;

        align-items: stretch;

    }


    .hero-buttons .btn {

        width: 100%;

    }


    .section {

        padding: 70px 0;

    }


    h2 {

        font-size: 38px;

    }


    .menu-grid {

        grid-template-columns: 1fr;

    }


    .menu-image {

        height: 240px;

    }


    .menu-title {

        flex-direction: column;

        gap: 6px;

    }


    .about-image {

        height: 350px;

    }


    .testimonial {

        padding: 28px;

    }


    .cta {

        padding: 90px 0;

    }


    .contact-info {

        gap: 20px;

    }


    .footer-container {

        flex-direction: column;

    }


    .footer-links {

        flex-wrap: wrap;

    }


    .footer-bottom {

        flex-direction: column;

        align-items: flex-start;

    }

}
```

---

# ✅ Agora temos uma V3 realmente completa

A diferença é que você **não precisa adicionar nada aos arquivos anteriores**.

Faça simplesmente:

### 1. Abra:

```text
projeto-03-restaurante/index.html
```

### 2. Apague tudo.

Cole o `index.html` acima.

### 3. Abra:

```text
projeto-03-restaurante/css/style.css
```

### 4. Apague tudo.

Cole o `style.css` acima.

### 5. Abra o `index.html` no navegador.

Pronto.

As imagens são carregadas remotamente, portanto você não precisa possuir nenhum `.jpg` no computador. As URLs usadas são URLs diretas do serviço de imagens do Unsplash; para uso mais formal da API do Unsplash, a própria documentação recomenda usar as URLs retornadas pelo serviço e observar as regras de atribuição.

### ⚠️ Uma coisa importante sobre a nossa metodologia

A partir de agora, quando fizermos **V3, V4, V5...**, vou entregar **os arquivos completos daquela versão**, e não pedaços para você tentar encaixar nos arquivos antigos.

Ou seja:

```text
Projeto 03

V1 → index.html completo + style.css completo
V2 → index.html completo + style.css completo
V3 → index.html completo + style.css completo
V4 → index.html completo + style.css completo
...
```

Assim você pode simplesmente **substituir os dois arquivos e testar**, sem ficar procurando onde cada trecho deve ser colocado.

E esta V3 já deixa o projeto preparado para o próximo passo: **JavaScript**, onde podemos transformar o cardápio estático em uma pequena aplicação com filtro de categorias, modal de detalhes, carrinho de pedidos e `localStorage`.
