Sim. Vamos transformar a **V3 em V4**, agora com JavaScript de verdade.

E vou manter exatamente o padrão que combinamos: **não vou mandar pedaços para você encaixar**. Você vai receber os **3 arquivos completos** e basta substituir os anteriores.

# 🍝 Projeto 03 — Bella Tavola V4

Nesta versão teremos:

* ✅ Cardápio com categorias
* ✅ Filtro **Todos / Pizzas / Massas / Carnes / Saladas / Sobremesas**
* ✅ Botão **Ver detalhes**
* ✅ Modal com detalhes do prato
* ✅ Botão **Adicionar ao pedido**
* ✅ Carrinho lateral
* ✅ Adicionar/remover produtos
* ✅ Aumentar/diminuir quantidade
* ✅ Cálculo automático do total
* ✅ Contador de itens
* ✅ `localStorage`
* ✅ Carrinho permanece salvo ao atualizar a página
* ✅ Limpar carrinho
* ✅ Interface responsiva
* ✅ Menu mobile
* ✅ Tudo separado em HTML + CSS + JavaScript

---

# 📁 Estrutura final

Crie esta estrutura:

```text
projeto-03-restaurante/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

Não precisa de nenhuma pasta `assets`.

---

# 1️⃣ `index.html`

**Apague todo o seu `index.html` atual** e coloque este:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Bella Tavola - Restaurante italiano com massas artesanais, pizzas e pratos especiais."
    >

    <title>Bella Tavola | Cucina Italiana</title>


    <!-- GOOGLE FONTS -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
    >


    <!-- CSS -->

    <link
        rel="stylesheet"
        href="css/style.css"
    >

</head>


<body>


    <!-- ==================================================
         HEADER
    ================================================== -->

    <header class="header">

        <div class="container header-container">


            <a
                href="#inicio"
                class="logo"
            >
                Bella Tavola
            </a>


            <button
                class="mobile-menu-button"
                id="mobileMenuButton"
                aria-label="Abrir menu"
                aria-expanded="false"
            >
                ☰
            </button>


            <nav
                class="nav"
                id="mainNav"
            >

                <a href="#inicio">
                    Início
                </a>

                <a href="#cardapio">
                    Cardápio
                </a>

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#depoimentos">
                    Depoimentos
                </a>

                <a href="#contato">
                    Contato
                </a>

            </nav>


            <button
                class="cart-button"
                id="cartButton"
                aria-label="Abrir carrinho"
            >

                🛒

                <span class="cart-button-text">
                    Pedido
                </span>

                <span
                    class="cart-count"
                    id="cartCount"
                >
                    0
                </span>

            </button>


        </div>

    </header>



    <main>


        <!-- ==================================================
             HERO
        ================================================== -->

        <section
            class="hero"
            id="inicio"
        >

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

                    <a
                        href="#cardapio"
                        class="btn btn-primary"
                    >
                        Ver cardápio
                    </a>


                    <a
                        href="#reservas"
                        class="btn btn-outline"
                    >
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

        <section
            class="menu section"
            id="cardapio"
        >

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
                        Escolha uma categoria ou explore
                        todos os nossos pratos.
                    </p>

                </div>



                <!-- FILTROS -->

                <div
                    class="category-filters"
                    id="categoryFilters"
                >

                    <button
                        class="filter-button active"
                        data-category="todos"
                    >
                        Todos
                    </button>


                    <button
                        class="filter-button"
                        data-category="pizza"
                    >
                        Pizzas
                    </button>


                    <button
                        class="filter-button"
                        data-category="massa"
                    >
                        Massas
                    </button>


                    <button
                        class="filter-button"
                        data-category="carne"
                    >
                        Carnes
                    </button>


                    <button
                        class="filter-button"
                        data-category="salada"
                    >
                        Saladas
                    </button>


                    <button
                        class="filter-button"
                        data-category="sobremesa"
                    >
                        Sobremesas
                    </button>

                </div>



                <!-- CARDS -->

                <div
                    class="menu-grid"
                    id="menuGrid"
                >


                    <!-- PIZZA -->

                    <article
                        class="menu-card"
                        data-id="1"
                        data-category="pizza"
                    >

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
                                    R$ 42,00
                                </span>

                            </div>


                            <p>
                                Molho de tomate, mozzarella fresca,
                                manjericão e azeite extravirgem.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="1"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="1"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- MASSA -->

                    <article
                        class="menu-card"
                        data-id="2"
                        data-category="massa"
                    >

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
                                    R$ 48,00
                                </span>

                            </div>


                            <p>
                                Massa artesanal preparada na casa,
                                molho especial e parmesão italiano.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="2"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="2"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- CARNE -->

                    <article
                        class="menu-card"
                        data-id="3"
                        data-category="carne"
                    >

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
                                    R$ 79,00
                                </span>

                            </div>


                            <p>
                                Corte selecionado grelhado,
                                ervas frescas e legumes assados.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="3"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="3"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- SALADA -->

                    <article
                        class="menu-card"
                        data-id="4"
                        data-category="salada"
                    >

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
                                    R$ 34,00
                                </span>

                            </div>


                            <p>
                                Folhas frescas, tomates, queijo,
                                ervas e molho especial da casa.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="4"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="4"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- SOBREMESA -->

                    <article
                        class="menu-card"
                        data-id="5"
                        data-category="sobremesa"
                    >

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
                                    R$ 28,00
                                </span>

                            </div>


                            <p>
                                Sobremesa artesanal preparada
                                diariamente pelo nosso chef.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="5"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="5"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PIZZA -->

                    <article
                        class="menu-card"
                        data-id="6"
                        data-category="pizza"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza Diavola"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Diavola
                                </h3>

                                <span class="price">
                                    R$ 49,00
                                </span>

                            </div>


                            <p>
                                Molho de tomate, mozzarella,
                                salame picante e manjericão.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="6"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="6"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>


                </div>

            </div>

        </section>



        <!-- ==================================================
             SOBRE
        ================================================== -->

        <section
            class="about section"
            id="sobre"
        >

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


                    <a
                        href="#contato"
                        class="text-link"
                    >
                        Conheça nossa história →
                    </a>

                </div>

            </div>

        </section>



        <!-- ==================================================
             DEPOIMENTOS
        ================================================== -->

        <section
            class="testimonials section"
            id="depoimentos"
        >

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
             CTA
        ================================================== -->

        <section
            class="cta"
            id="reservas"
        >

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


                <a
                    href="#contato"
                    class="btn btn-light"
                >
                    Fazer uma reserva
                </a>

            </div>

        </section>



        <!-- ==================================================
             CONTATO
        ================================================== -->

        <section
            class="contact section"
            id="contato"
        >

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

                <a
                    href="#inicio"
                    class="logo"
                >
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



    <!-- ==================================================
         MODAL DE DETALHES
    ================================================== -->

    <div
        class="modal"
        id="detailsModal"
        aria-hidden="true"
    >

        <div class="modal-overlay"></div>


        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
        >

            <button
                class="modal-close"
                id="modalClose"
                aria-label="Fechar"
            >
                ×
            </button>


            <img
                src=""
                alt=""
                class="modal-image"
                id="modalImage"
            >


            <div class="modal-body">

                <span
                    class="modal-category"
                    id="modalCategory"
                >
                </span>


                <h2 id="modalTitle">
                </h2>


                <p id="modalDescription">
                </p>


                <div class="modal-footer">

                    <strong id="modalPrice">
                    </strong>


                    <button
                        class="btn btn-primary"
                        id="modalAddButton"
                    >
                        Adicionar ao pedido
                    </button>

                </div>

            </div>

        </div>

    </div>



    <!-- ==================================================
         CARRINHO
    ================================================== -->

    <aside
        class="cart-sidebar"
        id="cartSidebar"
        aria-hidden="true"
    >


        <div class="cart-header">

            <div>

                <span class="section-label">
                    SEU PEDIDO
                </span>

                <h2>
                    Carrinho
                </h2>

            </div>


            <button
                class="cart-close"
                id="cartClose"
                aria-label="Fechar carrinho"
            >
                ×
            </button>

        </div>



        <div
            class="cart-items"
            id="cartItems"
        >

            <!-- JavaScript preencherá aqui -->

        </div>



        <div class="cart-footer">


            <div class="cart-total">

                <span>
                    Total
                </span>

                <strong id="cartTotal">
                    R$ 0,00
                </strong>

            </div>


            <button
                class="checkout-button"
                id="checkoutButton"
            >
                Finalizar pedido
            </button>


            <button
                class="clear-cart-button"
                id="clearCartButton"
            >
                Limpar carrinho
            </button>

        </div>


    </aside>



    <!-- OVERLAY DO CARRINHO -->

    <div
        class="cart-overlay"
        id="cartOverlay"
    >
    </div>



    <!-- JAVASCRIPT -->

    <script src="js/script.js"></script>

</body>

</html>
```

---

# 2️⃣ `css/style.css`

Agora substitua **todo** o seu CSS por este:

```css
/* ==================================================
   RESET
================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family: "DM Sans", sans-serif;

    color: #302923;

    background-color: #f8f3eb;

    line-height: 1.6;

}


body.no-scroll {
    overflow: hidden;
}


img {
    max-width: 100%;
    display: block;
}


a {
    color: inherit;
    text-decoration: none;
}


button {
    font: inherit;
    cursor: pointer;
}


/* ==================================================
   VARIÁVEIS
================================================== */

:root {

    --primary: #b54a32;

    --primary-dark: #8f3826;

    --secondary: #707653;

    --dark: #2a211c;

    --text: #302923;

    --text-light: #756b64;

    --background: #f8f3eb;

    --white: #ffffff;

    --border: #e5ddd3;

    --shadow-small:
        0 5px 20px rgba(42, 33, 28, 0.08);

    --shadow-medium:
        0 15px 40px rgba(42, 33, 28, 0.14);

    --radius-small: 8px;

    --radius-medium: 14px;

    --radius-large: 22px;

    --container: 1180px;

}


/* ==================================================
   CONTAINER
================================================== */

.container {

    width: min(
        calc(100% - 40px),
        var(--container)
    );

    margin: 0 auto;

}


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

    color: var(--white);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.15);

}


.header-container {

    min-height: 90px;

    display: flex;

    align-items: center;

    gap: 35px;

}


.logo {

    font-family: "Playfair Display", serif;

    font-size: 27px;

    font-weight: 700;

}


.nav {

    display: flex;

    align-items: center;

    gap: 30px;

    margin-left: auto;

}


.nav a {

    position: relative;

    font-size: 14px;

    font-weight: 500;

}


.nav a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--white);

    transition:
        width 0.3s ease;

}


.nav a:hover::after {
    width: 100%;
}


/* ==================================================
   MENU MOBILE
================================================== */

.mobile-menu-button {

    display: none;

    margin-left: auto;

    border: 0;

    background: transparent;

    color: var(--white);

    font-size: 28px;

}


/* ==================================================
   CARRINHO HEADER
================================================== */

.cart-button {

    display: flex;

    align-items: center;

    gap: 7px;

    padding: 11px 16px;

    border: 1px solid rgba(255, 255, 255, 0.5);

    border-radius: 50px;

    background: rgba(255, 255, 255, 0.08);

    color: var(--white);

    transition:
        background 0.3s ease;

}


.cart-button:hover {

    background: rgba(255, 255, 255, 0.18);

}


.cart-count {

    min-width: 21px;

    height: 21px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: var(--primary);

    color: var(--white);

    font-size: 11px;

    font-weight: 700;

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

    border: 0;

    border-radius: 50px;

    font-size: 14px;

    font-weight: 600;

    transition:
        transform 0.3s ease,
        background 0.3s ease;

}


.btn:hover {

    transform: translateY(-2px);

}


.btn-primary {

    background: var(--primary);

    color: var(--white);

}


.btn-primary:hover {

    background: var(--primary-dark);

}


.btn-outline {

    border:
        1px solid rgba(255, 255, 255, 0.7);

    color: var(--white);

}


.btn-outline:hover {

    background: var(--white);

    color: var(--dark);

}


.btn-light {

    background: var(--white);

    color: var(--primary);

}


/* ==================================================
   HERO
================================================== */

.hero {

    position: relative;

    min-height: 760px;

    display: flex;

    align-items: center;

    color: var(--white);

    background-image:
        url(
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
        );

    background-size: cover;

    background-position: center;

}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(20, 13, 9, 0.84),
            rgba(20, 13, 9, 0.50),
            rgba(20, 13, 9, 0.20)
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

    color: #e8c7a9;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;

}


.hero h1 {

    margin-bottom: 28px;

    font-family: "Playfair Display", serif;

    font-size: clamp(54px, 7vw, 92px);

    line-height: 0.98;

    letter-spacing: -2px;

}


.hero p {

    max-width: 560px;

    margin-bottom: 34px;

    color: rgba(255, 255, 255, 0.88);

    font-size: 18px;

}


.hero-buttons {

    display: flex;

    gap: 14px;

    flex-wrap: wrap;

}


/* ==================================================
   TÍTULOS
================================================== */

.section-label {

    display: block;

    margin-bottom: 16px;

    color: var(--primary);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2.5px;

}


h2 {

    font-family: "Playfair Display", serif;

    color: var(--dark);

    font-size: clamp(38px, 5vw, 58px);

    line-height: 1.08;

}


/* ==================================================
   INTRO
================================================== */

.intro {

    background: var(--white);

}


.intro-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: center;

}


.intro-text {

    max-width: 560px;

}


.intro-text p {

    margin-bottom: 18px;

    color: var(--text-light);

    font-size: 17px;

}


/* ==================================================
   SECTION HEADER
================================================== */

.section-header {

    display: flex;

    align-items: end;

    justify-content: space-between;

    gap: 50px;

    margin-bottom: 40px;

}


.section-header > p {

    max-width: 390px;

    color: var(--text-light);

}


.centered {

    display: block;

    text-align: center;

}


.centered h2 {

    max-width: 700px;

    margin: auto;

}


/* ==================================================
   FILTROS
================================================== */

.category-filters {

    display: flex;

    align-items: center;

    gap: 10px;

    margin-bottom: 40px;

    flex-wrap: wrap;

}


.filter-button {

    padding: 10px 18px;

    border:
        1px solid var(--border);

    border-radius: 50px;

    background: var(--white);

    color: var(--text-light);

    font-size: 13px;

    font-weight: 600;

    transition:
        background 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease;

}


.filter-button:hover {

    border-color: var(--primary);

    color: var(--primary);

}


.filter-button.active {

    border-color: var(--primary);

    background: var(--primary);

    color: var(--white);

}


/* ==================================================
   MENU
================================================== */

.menu {

    background: var(--background);

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

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: var(--radius-medium);

    box-shadow: var(--shadow-small);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease,
        opacity 0.3s ease;

}


.menu-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow-medium);

}


.menu-card.hidden {

    display: none;

}


/* ==================================================
   IMAGEM
================================================== */

.menu-image {

    height: 250px;

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
   CONTEÚDO
================================================== */

.menu-content {

    padding: 25px;

}


.menu-title {

    display: flex;

    justify-content: space-between;

    align-items: start;

    gap: 15px;

    margin-bottom: 12px;

}


.menu-title h3 {

    font-family: "Playfair Display", serif;

    color: var(--dark);

    font-size: 22px;

    line-height: 1.2;

}


.price {

    color: var(--primary);

    font-size: 15px;

    font-weight: 700;

    white-space: nowrap;

}


.menu-content > p {

    margin-bottom: 20px;

    color: var(--text-light);

    font-size: 14px;

}


/* ==================================================
   AÇÕES DOS CARDS
================================================== */

.card-actions {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

}


.menu-button {

    padding: 0;

    border: 0;

    background: transparent;

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

}


.menu-button:hover {

    color: var(--primary-dark);

}


.add-button {

    padding: 9px 14px;

    border: 0;

    border-radius: 50px;

    background: var(--primary);

    color: var(--white);

    font-size: 12px;

    font-weight: 700;

}


.add-button:hover {

    background: var(--primary-dark);

}


/* ==================================================
   SOBRE
================================================== */

.about {

    background: var(--white);

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

    color: var(--text-light);

}


.text-link {

    display: inline-block;

    margin-top: 15px;

    color: var(--primary);

    font-size: 14px;

    font-weight: 700;

}


/* ==================================================
   DEPOIMENTOS
================================================== */

.testimonials {

    background: var(--background);

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

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: var(--radius-medium);

}


.stars {

    margin-bottom: 20px;

    color: var(--primary);

    letter-spacing: 3px;

}


.testimonial p {

    margin-bottom: 25px;

    color: var(--text-light);

    font-family: "Playfair Display", serif;

    font-size: 18px;

}


.testimonial strong {

    font-size: 14px;

}


/* ==================================================
   CTA
================================================== */

.cta {

    padding: 120px 0;

    text-align: center;

    color: var(--white);

    background-image:
        linear-gradient(
            rgba(60, 28, 18, 0.82),
            rgba(60, 28, 18, 0.82)
        ),
        url(
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
        );

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

    color: var(--white);

}


.cta p {

    margin-bottom: 30px;

    color: rgba(255, 255, 255, 0.85);

}


/* ==================================================
   CONTATO
================================================== */

.contact {

    background: var(--white);

}


.contact-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

}


.contact-heading h2 {

    margin-bottom: 25px;

}


.contact-heading p {

    color: var(--text-light);

}


.contact-info {

    display: grid;

    gap: 30px;

}


.contact-item {

    padding-bottom: 25px;

    border-bottom:
        1px solid var(--border);

}


.contact-item span {

    display: block;

    margin-bottom: 5px;

    color: var(--text-light);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 1.5px;

    text-transform: uppercase;

}


/* ==================================================
   FOOTER
================================================== */

.footer {

    padding-top: 55px;

    background: var(--dark);

    color: var(--white);

}


.footer-container {

    display: flex;

    justify-content: space-between;

    gap: 40px;

    padding-bottom: 45px;

}


.footer-brand p {

    color: rgba(255, 255, 255, 0.5);

}


.footer-links {

    display: flex;

    gap: 25px;

}


.footer-links a {

    color: rgba(255, 255, 255, 0.7);

    font-size: 13px;

}


.footer-bottom {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 22px 0;

    border-top:
        1px solid rgba(255, 255, 255, 0.12);

}


.footer-bottom p {

    color: rgba(255, 255, 255, 0.45);

    font-size: 12px;

}


/* ==================================================
   MODAL
================================================== */

.modal {

    position: fixed;

    inset: 0;

    z-index: 1000;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 20px;

}


.modal.active {

    display: flex;

}


.modal-overlay {

    position: absolute;

    inset: 0;

    background: rgba(20, 13, 9, 0.75);

    backdrop-filter: blur(4px);

}


.modal-content {

    position: relative;

    z-index: 2;

    width: min(
        100%,
        600px
    );

    max-height: 90vh;

    overflow-y: auto;

    background: var(--white);

    border-radius: var(--radius-large);

    box-shadow: var(--shadow-medium);

}


.modal-image {

    width: 100%;

    height: 300px;

    object-fit: cover;

}


.modal-body {

    padding: 30px;

}


.modal-category {

    display: block;

    margin-bottom: 10px;

    color: var(--primary);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;

}


.modal-body h2 {

    margin-bottom: 15px;

    font-size: 40px;

}


.modal-body p {

    margin-bottom: 25px;

    color: var(--text-light);

}


.modal-footer {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

}


.modal-footer strong {

    color: var(--primary);

    font-size: 20px;

}


.modal-close {

    position: absolute;

    top: 15px;
    right: 15px;

    z-index: 5;

    width: 40px;
    height: 40px;

    border: 0;

    border-radius: 50%;

    background: rgba(0, 0, 0, 0.55);

    color: var(--white);

    font-size: 25px;

}


/* ==================================================
   CARRINHO
================================================== */

.cart-sidebar {

    position: fixed;

    top: 0;
    right: 0;

    z-index: 1100;

    width: min(
        430px,
        100%
    );

    height: 100vh;

    display: flex;

    flex-direction: column;

    background: var(--white);

    box-shadow:
        -10px 0 40px rgba(0, 0, 0, 0.15);

    transform: translateX(100%);

    transition:
        transform 0.35s ease;

}


.cart-sidebar.active {

    transform: translateX(0);

}


.cart-overlay {

    position: fixed;

    inset: 0;

    z-index: 1050;

    display: none;

    background: rgba(20, 13, 9, 0.55);

}


.cart-overlay.active {

    display: block;

}


.cart-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 30px;

    border-bottom:
        1px solid var(--border);

}


.cart-header .section-label {

    margin-bottom: 5px;

}


.cart-header h2 {

    font-size: 32px;

}


.cart-close {

    width: 40px;
    height: 40px;

    border: 0;

    border-radius: 50%;

    background: var(--background);

    color: var(--dark);

    font-size: 25px;

}


.cart-items {

    flex: 1;

    overflow-y: auto;

    padding: 25px 30px;

}


/* ==================================================
   ITEM DO CARRINHO
================================================== */

.cart-item {

    display: grid;

    grid-template-columns: 75px 1fr;

    gap: 15px;

    padding: 18px 0;

    border-bottom:
        1px solid var(--border);

}


.cart-item-image {

    width: 75px;

    height: 75px;

    overflow: hidden;

    border-radius: var(--radius-small);

}


.cart-item-image img {

    width: 100%;

    height: 100%;

    object-fit: cover;

}


.cart-item-info h3 {

    margin-bottom: 4px;

    color: var(--dark);

    font-family: "Playfair Display", serif;

    font-size: 17px;

}


.cart-item-price {

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

}


.cart-item-controls {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

    margin-top: 10px;

}


.quantity-controls {

    display: flex;

    align-items: center;

    gap: 8px;

}


.quantity-button {

    width: 27px;
    height: 27px;

    border: 1px solid var(--border);

    border-radius: 50%;

    background: var(--white);

}


.quantity {

    min-width: 20px;

    text-align: center;

    font-size: 13px;

    font-weight: 700;

}


.remove-item {

    border: 0;

    background: transparent;

    color: #a33d2a;

    font-size: 12px;

}


/* ==================================================
   CARRINHO VAZIO
================================================== */

.empty-cart {

    padding: 60px 20px;

    text-align: center;

}


.empty-cart-icon {

    margin-bottom: 15px;

    font-size: 45px;

}


.empty-cart h3 {

    margin-bottom: 8px;

    font-family: "Playfair Display", serif;

    font-size: 24px;

}


.empty-cart p {

    color: var(--text-light);

    font-size: 14px;

}


/* ==================================================
   FOOTER DO CARRINHO
================================================== */

.cart-footer {

    padding: 25px 30px;

    border-top:
        1px solid var(--border);

}


.cart-total {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 20px;

}


.cart-total span {

    color: var(--text-light);

}


.cart-total strong {

    color: var(--dark);

    font-size: 22px;

}


.checkout-button {

    width: 100%;

    min-height: 50px;

    border: 0;

    border-radius: 50px;

    background: var(--primary);

    color: var(--white);

    font-weight: 700;

}


.checkout-button:hover {

    background: var(--primary-dark);

}


.clear-cart-button {

    width: 100%;

    margin-top: 10px;

    padding: 10px;

    border: 0;

    background: transparent;

    color: var(--text-light);

    font-size: 12px;

}


/* ==================================================
   RESPONSIVIDADE
================================================== */

@media (max-width: 1000px) {

    .nav {

        gap: 18px;

    }


    .menu-grid {

        grid-template-columns:
            repeat(2, minmax(0, 1fr));

    }


    .intro-container {

        gap: 50px;

    }


    .about-container {

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


    .mobile-menu-button {

        display: block;

    }


    .nav {

        position: absolute;

        top: 75px;

        left: 15px;
        right: 15px;

        display: none;

        flex-direction: column;

        align-items: stretch;

        gap: 0;

        padding: 10px;

        margin: 0;

        background: var(--dark);

        border-radius: var(--radius-medium);

        box-shadow: var(--shadow-medium);

    }


    .nav.active {

        display: flex;

    }


    .nav a {

        padding: 14px;

    }


    .nav a::after {

        display: none;

    }


    .cart-button {

        margin-left: 0;

    }


    .cart-button-text {

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

    }


    .section-header {

        display: block;

    }


    .section-header > p {

        margin-top: 20px;

    }


    .about-container {

        grid-template-columns: 1fr;

    }


    .about-image {

        height: 450px;

    }


    .testimonial-grid {

        grid-template-columns: 1fr;

    }


    .contact-container {

        grid-template-columns: 1fr;

        gap: 50px;

    }

}


/* ==================================================
   CELULAR
================================================== */

@media (max-width: 600px) {

    .container {

        width:
            calc(100% - 30px);

    }


    .logo {

        font-size: 23px;

    }


    .hero {

        min-height: 650px;

    }


    .hero h1 {

        font-size: 52px;

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


    .category-filters {

        gap: 7px;

    }


    .filter-button {

        padding: 9px 13px;

        font-size: 12px;

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


    .card-actions {

        align-items: flex-start;

    }


    .about-image {

        height: 350px;

    }


    .cta {

        padding: 90px 0;

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


    .modal-content {

        max-height: 95vh;

    }


    .modal-image {

        height: 230px;

    }


    .modal-body {

        padding: 25px;

    }


    .modal-body h2 {

        font-size: 34px;

    }


    .modal-footer {

        align-items: stretch;

        flex-direction: column;

    }


    .modal-footer .btn {

        width: 100%;

    }

}
```

---

# 3️⃣ `js/script.js`

Agora vem a parte nova.

Crie:

```text
js/script.js
```

E coloque **todo este código**:

```javascript
/* ==================================================
   BELLA TAVOLA
   PROJETO 03 - V4

   Funcionalidades:

   - Menu mobile
   - Filtro de categorias
   - Modal de detalhes
   - Carrinho
   - Quantidade de produtos
   - LocalStorage
================================================== */


/* ==================================================
   DADOS DOS PRODUTOS
================================================== */

const products = [

    {
        id: 1,

        name: "Pizza Margherita",

        category: "pizza",

        categoryName: "Pizza",

        price: 42,

        description:
            "Molho de tomate, mozzarella fresca, manjericão e azeite extravirgem. Uma clássica pizza italiana preparada artesanalmente.",

        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 2,

        name: "Pasta della Casa",

        category: "massa",

        categoryName: "Massa",

        price: 48,

        description:
            "Massa artesanal preparada na casa, acompanhada de molho especial e parmesão italiano.",

        image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 3,

        name: "Bistecca Toscana",

        category: "carne",

        categoryName: "Carne",

        price: 79,

        description:
            "Corte selecionado grelhado no ponto ideal, servido com ervas frescas e legumes assados.",

        image:
            "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 4,

        name: "Insalata Mediterrânea",

        category: "salada",

        categoryName: "Salada",

        price: 34,

        description:
            "Folhas frescas, tomates, queijo, ervas e molho especial da casa.",

        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 5,

        name: "Dolce Italiano",

        category: "sobremesa",

        categoryName: "Sobremesa",

        price: 28,

        description:
            "Sobremesa artesanal preparada diariamente pelo nosso chef com ingredientes selecionados.",

        image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 6,

        name: "Pizza Diavola",

        category: "pizza",

        categoryName: "Pizza",

        price: 49,

        description:
            "Molho de tomate, mozzarella, salame picante e manjericão. Uma opção para quem gosta de sabores intensos.",

        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
    }

];


/* ==================================================
   ESTADO DO CARRINHO
================================================== */

let cart = JSON.parse(
    localStorage.getItem("bellaTavolaCart")
) || [];


/* ==================================================
   ELEMENTOS DO DOM
================================================== */

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartClose =
    document.getElementById("cartClose");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const clearCartButton =
    document.getElementById("clearCartButton");

const checkoutButton =
    document.getElementById("checkoutButton");


/* ==================================================
   MENU MOBILE
================================================== */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mainNav =
    document.getElementById("mainNav");


mobileMenuButton.addEventListener(
    "click",
    () => {

        const isOpen =
            mainNav.classList.toggle("active");

        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


/* ==================================================
   FECHAR MENU MOBILE AO CLICAR
================================================== */

const navLinks =
    mainNav.querySelectorAll("a");


navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mainNav.classList.remove("active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* ==================================================
   FILTRO DE CATEGORIAS
================================================== */

const filterButtons =
    document.querySelectorAll(".filter-button");

const menuCards =
    document.querySelectorAll(".menu-card");


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const category =
                button.dataset.category;


            filterButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            menuCards.forEach(card => {

                const cardCategory =
                    card.dataset.category;


                if (
                    category === "todos" ||
                    category === cardCategory
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});


/* ==================================================
   FORMATAÇÃO DE MOEDA
================================================== */

function formatCurrency(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ==================================================
   SALVAR CARRINHO
================================================== */

function saveCart() {

    localStorage.setItem(
        "bellaTavolaCart",
        JSON.stringify(cart)
    );

}


/* ==================================================
   ADICIONAR PRODUTO
================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();


    openCart();

}


/* ==================================================
   AUMENTAR QUANTIDADE
================================================== */

function increaseQuantity(productId) {

    const item =
        cart.find(
            product => product.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += 1;


    saveCart();

    updateCart();

}


/* ==================================================
   DIMINUIR QUANTIDADE
================================================== */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            product => product.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== productId
            );

    }


    saveCart();

    updateCart();

}


/* ==================================================
   REMOVER ITEM
================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            product => product.id !== productId
        );


    saveCart();

    updateCart();

}


/* ==================================================
   CALCULAR QUANTIDADE
================================================== */

function getCartQuantity() {

    return cart.reduce(
        (total, item) => {

            return total + item.quantity;

        },
        0
    );

}


/* ==================================================
   CALCULAR TOTAL
================================================== */

function getCartTotal() {

    return cart.reduce(
        (total, item) => {

            return total +
                item.price * item.quantity;

        },
        0
    );

}


/* ==================================================
   ATUALIZAR CARRINHO
================================================== */

function updateCart() {

    const quantity =
        getCartQuantity();


    const total =
        getCartTotal();


    cartCount.textContent =
        quantity;


    cartTotal.textContent =
        formatCurrency(total);


    renderCart();

}


/* ==================================================
   RENDERIZAR CARRINHO
================================================== */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Seu carrinho está vazio
                </h3>

                <p>
                    Adicione alguns pratos deliciosos
                    ao seu pedido.
                </p>

            </div>

        `;

        return;
    }


    cartItems.innerHTML =
        cart.map(item => `

            <div
                class="cart-item"
                data-id="${item.id}"
            >

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>


                    <span class="cart-item-price">
                        ${formatCurrency(item.price)}
                    </span>


                    <div class="cart-item-controls">

                        <div class="quantity-controls">

                            <button
                                class="quantity-button decrease-button"
                                data-id="${item.id}"
                            >
                                −
                            </button>


                            <span class="quantity">
                                ${item.quantity}
                            </span>


                            <button
                                class="quantity-button increase-button"
                                data-id="${item.id}"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="remove-item"
                            data-id="${item.id}"
                        >
                            Remover
                        </button>

                    </div>

                </div>

            </div>

        `).join("");


    attachCartEvents();

}


/* ==================================================
   EVENTOS DO CARRINHO
================================================== */

function attachCartEvents() {


    const increaseButtons =
        document.querySelectorAll(
            ".increase-button"
        );


    increaseButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(button.dataset.id);

                increaseQuantity(id);

            }
        );

    });



    const decreaseButtons =
        document.querySelectorAll(
            ".decrease-button"
        );


    decreaseButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(button.dataset.id);

                decreaseQuantity(id);

            }
        );

    });



    const removeButtons =
        document.querySelectorAll(
            ".remove-item"
        );


    removeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(button.dataset.id);

                removeFromCart(id);

            }
        );

    });

}


/* ==================================================
   ABRIR CARRINHO
================================================== */

function openCart() {

    cartSidebar.classList.add(
        "active"
    );

    cartOverlay.classList.add(
        "active"
    );

    cartSidebar.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


/* ==================================================
   FECHAR CARRINHO
================================================== */

function closeCart() {

    cartSidebar.classList.remove(
        "active"
    );

    cartOverlay.classList.remove(
        "active"
    );

    cartSidebar.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


/* ==================================================
   EVENTOS DO CARRINHO
================================================== */

cartButton.addEventListener(
    "click",
    openCart
);


cartClose.addEventListener(
    "click",
    closeCart
);


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* ==================================================
   LIMPAR CARRINHO
================================================== */

clearCartButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {
            return;
        }


        const confirmed =
            confirm(
                "Deseja realmente limpar o carrinho?"
            );


        if (!confirmed) {
            return;
        }


        cart = [];


        saveCart();

        updateCart();

    }
);


/* ==================================================
   FINALIZAR PEDIDO
================================================== */

checkoutButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            alert(
                "Seu carrinho está vazio."
            );

            return;
        }


        const total =
            formatCurrency(
                getCartTotal()
            );


        alert(
            `Pedido registrado com sucesso!\n\nTotal: ${total}\n\nEsta é uma simulação para fins de estudo.`
        );

    }
);


/* ==================================================
   MODAL
================================================== */

const detailsModal =
    document.getElementById(
        "detailsModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalPrice =
    document.getElementById(
        "modalPrice"
    );

const modalAddButton =
    document.getElementById(
        "modalAddButton"
    );

let currentModalProduct = null;


/* ==================================================
   ABRIR MODAL
================================================== */

function openModal(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    currentModalProduct =
        product;


    modalImage.src =
        product.image;


    modalImage.alt =
        product.name;


    modalCategory.textContent =
        product.categoryName;


    modalTitle.textContent =
        product.name;


    modalDescription.textContent =
        product.description;


    modalPrice.textContent =
        formatCurrency(
            product.price
        );


    detailsModal.classList.add(
        "active"
    );


    detailsModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );

}


/* ==================================================
   FECHAR MODAL
================================================== */

function closeModal() {

    detailsModal.classList.remove(
        "active"
    );


    detailsModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );


    currentModalProduct = null;

}


/* ==================================================
   BOTÕES DE DETALHES
================================================== */

const detailsButtons =
    document.querySelectorAll(
        ".details-button"
    );


detailsButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const id =
                Number(button.dataset.id);

            openModal(id);

        }
    );

});


/* ==================================================
   BOTÕES ADICIONAR
================================================== */

const addButtons =
    document.querySelectorAll(
        ".add-button"
    );


addButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const id =
                Number(button.dataset.id);

            addToCart(id);

        }
    );

});


/* ==================================================
   ADICIONAR PELO MODAL
================================================== */

modalAddButton.addEventListener(
    "click",
    () => {

        if (!currentModalProduct) {
            return;
        }


        addToCart(
            currentModalProduct.id
        );


        closeModal();

    }
);


/* ==================================================
   FECHAR MODAL
================================================== */

modalClose.addEventListener(
    "click",
    closeModal
);


/* ==================================================
   FECHAR MODAL CLICANDO FORA
================================================== */

detailsModal.addEventListener(
    "click",
    event => {

        if (
            event.target === detailsModal ||
            event.target.classList.contains(
                "modal-overlay"
            )
        ) {

            closeModal();

        }

    }
);


/* ==================================================
   TECLA ESC
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }


        closeModal();

        closeCart();

    }
);


/* ==================================================
   INICIALIZAÇÃO
================================================== */

updateCart();
```

---

# 🧠 O que você acabou de construir

Agora o projeto deixou de ser apenas uma página HTML/CSS.

Temos uma pequena aplicação JavaScript.

### 1. Filtro

Quando você clica:

```text
Todos
Pizzas
Massas
Carnes
Saladas
Sobremesas
```

o JavaScript lê:

```javascript
data-category="pizza"
```

e decide quais cards devem aparecer.

---

### 2. Dados dos produtos

Criamos uma estrutura de dados:

```javascript
const products = [
    {
        id: 1,
        name: "Pizza Margherita",
        category: "pizza",
        price: 42
    }
];
```

Isso é muito importante.

Estamos começando a separar:

```text
DADOS
   ↓
INTERFACE
   ↓
LÓGICA
```

Essa arquitetura será extremamente útil nos próximos projetos.

---

### 3. Modal

Ao clicar:

```text
Ver detalhes
```

o JavaScript encontra o produto:

```javascript
const product =
    products.find(
        item => item.id === productId
    );
```

e coloca os dados dentro do modal.

---

### 4. Carrinho

Ao clicar:

```text
+ Adicionar
```

o produto entra no array:

```javascript
cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
});
```

Depois calculamos:

```javascript
getCartQuantity()
```

e:

```javascript
getCartTotal()
```

---

### 5. `localStorage`

Aqui está uma das partes mais importantes:

```javascript
localStorage.setItem(
    "bellaTavolaCart",
    JSON.stringify(cart)
);
```

Quando você atualiza a página, fazemos:

```javascript
JSON.parse(
    localStorage.getItem("bellaTavolaCart")
) || [];
```

Por isso o carrinho **não desaparece quando você aperta F5**.

---

# 🧪 Teste agora

Depois de substituir os três arquivos:

### Teste 1

Abra:

```text
index.html
```

Clique:

```text
Cardápio
```

---

### Teste 2

Clique:

```text
Pizzas
```

Devem aparecer somente as pizzas.

Depois:

```text
Massas
```

e assim por diante.

---

### Teste 3

Clique:

```text
Ver detalhes
```

Deve aparecer o modal.

---

### Teste 4

Dentro do modal:

```text
Adicionar ao pedido
```

O carrinho deve abrir.

---

### Teste 5

Adicione:

```text
Pizza Margherita
```

duas vezes.

O carrinho deve mostrar:

```text
Pizza Margherita

−   2   +

R$ 42,00
```

e o total:

```text
R$ 84,00
```

---

### Teste 6

Aperte:

```text
F5
```

O produto deve continuar no carrinho.

Isso demonstra que o `localStorage` está funcionando.

---

# 🏆 O nível do Projeto 03 agora

Estamos evoluindo assim:

```text
V1
│
├── HTML
├── CSS
└── Página estática
        ↓
V2
│
├── Identidade visual
├── Layout profissional
└── Imagens reais
        ↓
V3
│
├── CSS refinado
├── Responsividade
└── Estrutura profissional
        ↓
V4
│
├── JavaScript
├── Filtros
├── Modal
├── Carrinho
├── Quantidades
├── Total
├── LocalStorage
└── Menu mobile
```

Isso já é um **projeto frontend muito mais próximo de uma aplicação real**.

E eu manteria a próxima evolução ainda dentro do **Projeto 03**, antes de partir para o Projeto 04: podemos fazer uma **V5**, adicionando checkout visual, formulário de cliente, escolha de mesa/data/horário, validação de formulário, resumo do pedido e uma tela de confirmação — tudo ainda sem backend.



Perfeito. Vamos transformar o **Projeto 03 — Bella Tavola** na **V5**, mas mantendo tudo organizado e sem mandar pedaços de código para você encaixar.

Nesta versão, vamos evoluir o fluxo:

```text
CARDÁPIO
   ↓
CARRINHO
   ↓
CHECKOUT
   ↓
DADOS DO CLIENTE
   ↓
DATA + HORÁRIO + MESA
   ↓
VALIDAÇÃO
   ↓
RESUMO DO PEDIDO
   ↓
CONFIRMAÇÃO
```

Para evitar conflitos com o código da V4, vou entregar novamente os **3 arquivos completos**.

---

# 📁 Estrutura da V5

```text
projeto-03-restaurante/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
```

Você pode simplesmente **substituir os três arquivos atuais**.

---

# 1. `index.html`

Apague o conteúdo atual do `index.html` e coloque este:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Bella Tavola - Restaurante italiano"
    >

    <title>Bella Tavola | Cucina Italiana</title>


    <!-- GOOGLE FONTS -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
    >

    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
    >


    <!-- CSS -->

    <link
        rel="stylesheet"
        href="css/style.css"
    >

</head>


<body>


    <!-- ==================================================
         HEADER
    ================================================== -->

    <header class="header">

        <div class="container header-container">


            <a
                href="#inicio"
                class="logo"
            >
                Bella Tavola
            </a>


            <button
                class="mobile-menu-button"
                id="mobileMenuButton"
                aria-label="Abrir menu"
                aria-expanded="false"
            >
                ☰
            </button>


            <nav
                class="nav"
                id="mainNav"
            >

                <a href="#inicio">
                    Início
                </a>

                <a href="#cardapio">
                    Cardápio
                </a>

                <a href="#sobre">
                    Sobre
                </a>

                <a href="#depoimentos">
                    Depoimentos
                </a>

                <a href="#contato">
                    Contato
                </a>

            </nav>


            <button
                class="cart-button"
                id="cartButton"
            >

                🛒

                <span class="cart-button-text">
                    Pedido
                </span>

                <span
                    class="cart-count"
                    id="cartCount"
                >
                    0
                </span>

            </button>

        </div>

    </header>



    <main>


        <!-- ==================================================
             HERO
        ================================================== -->

        <section
            class="hero"
            id="inicio"
        >

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

                    <a
                        href="#cardapio"
                        class="btn btn-primary"
                    >
                        Ver cardápio
                    </a>


                    <a
                        href="#reservas"
                        class="btn btn-outline"
                    >
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

        <section
            class="menu section"
            id="cardapio"
        >

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
                        Escolha uma categoria ou explore
                        todos os nossos pratos.
                    </p>

                </div>



                <!-- FILTROS -->

                <div
                    class="category-filters"
                    id="categoryFilters"
                >

                    <button
                        class="filter-button active"
                        data-category="todos"
                    >
                        Todos
                    </button>


                    <button
                        class="filter-button"
                        data-category="pizza"
                    >
                        Pizzas
                    </button>


                    <button
                        class="filter-button"
                        data-category="massa"
                    >
                        Massas
                    </button>


                    <button
                        class="filter-button"
                        data-category="carne"
                    >
                        Carnes
                    </button>


                    <button
                        class="filter-button"
                        data-category="salada"
                    >
                        Saladas
                    </button>


                    <button
                        class="filter-button"
                        data-category="sobremesa"
                    >
                        Sobremesas
                    </button>

                </div>



                <!-- CARDS -->

                <div
                    class="menu-grid"
                    id="menuGrid"
                >


                    <!-- PRODUTO 1 -->

                    <article
                        class="menu-card"
                        data-id="1"
                        data-category="pizza"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza Margherita"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Margherita
                                </h3>

                                <span class="price">
                                    R$ 42,00
                                </span>

                            </div>


                            <p>
                                Molho de tomate, mozzarella fresca,
                                manjericão e azeite extravirgem.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="1"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="1"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PRODUTO 2 -->

                    <article
                        class="menu-card"
                        data-id="2"
                        data-category="massa"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
                                alt="Pasta della Casa"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pasta della Casa
                                </h3>

                                <span class="price">
                                    R$ 48,00
                                </span>

                            </div>


                            <p>
                                Massa artesanal preparada na casa,
                                molho especial e parmesão italiano.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="2"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="2"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PRODUTO 3 -->

                    <article
                        class="menu-card"
                        data-id="3"
                        data-category="carne"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85"
                                alt="Bistecca Toscana"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Bistecca Toscana
                                </h3>

                                <span class="price">
                                    R$ 79,00
                                </span>

                            </div>


                            <p>
                                Corte selecionado grelhado,
                                ervas frescas e legumes assados.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="3"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="3"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PRODUTO 4 -->

                    <article
                        class="menu-card"
                        data-id="4"
                        data-category="salada"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
                                alt="Insalata Mediterrânea"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Insalata Mediterrânea
                                </h3>

                                <span class="price">
                                    R$ 34,00
                                </span>

                            </div>


                            <p>
                                Folhas frescas, tomates, queijo,
                                ervas e molho especial.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="4"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="4"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PRODUTO 5 -->

                    <article
                        class="menu-card"
                        data-id="5"
                        data-category="sobremesa"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
                                alt="Dolce Italiano"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Dolce Italiano
                                </h3>

                                <span class="price">
                                    R$ 28,00
                                </span>

                            </div>


                            <p>
                                Sobremesa artesanal preparada
                                diariamente pelo nosso chef.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="5"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="5"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>



                    <!-- PRODUTO 6 -->

                    <article
                        class="menu-card"
                        data-id="6"
                        data-category="pizza"
                    >

                        <div class="menu-image">

                            <img
                                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
                                alt="Pizza Diavola"
                                loading="lazy"
                            >

                        </div>


                        <div class="menu-content">

                            <div class="menu-title">

                                <h3>
                                    Pizza Diavola
                                </h3>

                                <span class="price">
                                    R$ 49,00
                                </span>

                            </div>


                            <p>
                                Molho de tomate, mozzarella,
                                salame picante e manjericão.
                            </p>


                            <div class="card-actions">

                                <button
                                    class="menu-button details-button"
                                    data-id="6"
                                >
                                    Ver detalhes
                                </button>


                                <button
                                    class="add-button"
                                    data-id="6"
                                >
                                    + Adicionar
                                </button>

                            </div>

                        </div>

                    </article>

                </div>

            </div>

        </section>



        <!-- ==================================================
             SOBRE
        ================================================== -->

        <section
            class="about section"
            id="sobre"
        >

            <div class="container about-container">


                <div class="about-image">

                    <img
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
                        alt="Interior do restaurante"
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
                        trattorias italianas.
                    </p>


                    <p>
                        Hoje mantemos essa mesma essência, combinando
                        receitas tradicionais, ingredientes selecionados
                        e criatividade.
                    </p>


                    <a
                        href="#contato"
                        class="text-link"
                    >
                        Conheça nossa história →
                    </a>

                </div>

            </div>

        </section>



        <!-- ==================================================
             DEPOIMENTOS
        ================================================== -->

        <section
            class="testimonials section"
            id="depoimentos"
        >

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
                            que já visitei."
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
             CTA
        ================================================== -->

        <section
            class="cta"
            id="reservas"
        >

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


                <button
                    class="btn btn-light"
                    id="reservationButton"
                >
                    Fazer uma reserva
                </button>

            </div>

        </section>



        <!-- ==================================================
             CONTATO
        ================================================== -->

        <section
            class="contact section"
            id="contato"
        >

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

                <a
                    href="#inicio"
                    class="logo"
                >
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



    <!-- ==================================================
         MODAL DE DETALHES
    ================================================== -->

    <div
        class="modal"
        id="detailsModal"
        aria-hidden="true"
    >

        <div class="modal-overlay"></div>


        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
        >

            <button
                class="modal-close"
                id="modalClose"
            >
                ×
            </button>


            <img
                src=""
                alt=""
                class="modal-image"
                id="modalImage"
            >


            <div class="modal-body">

                <span
                    class="modal-category"
                    id="modalCategory"
                >
                </span>


                <h2 id="modalTitle">
                </h2>


                <p id="modalDescription">
                </p>


                <div class="modal-footer">

                    <strong id="modalPrice">
                    </strong>


                    <button
                        class="btn btn-primary"
                        id="modalAddButton"
                    >
                        Adicionar ao pedido
                    </button>

                </div>

            </div>

        </div>

    </div>



    <!-- ==================================================
         CARRINHO
    ================================================== -->

    <aside
        class="cart-sidebar"
        id="cartSidebar"
        aria-hidden="true"
    >

        <div class="cart-header">

            <div>

                <span class="section-label">
                    SEU PEDIDO
                </span>

                <h2>
                    Carrinho
                </h2>

            </div>


            <button
                class="cart-close"
                id="cartClose"
            >
                ×
            </button>

        </div>


        <div
            class="cart-items"
            id="cartItems"
        >
        </div>


        <div class="cart-footer">

            <div class="cart-total">

                <span>
                    Total
                </span>

                <strong id="cartTotal">
                    R$ 0,00
                </strong>

            </div>


            <button
                class="checkout-button"
                id="checkoutButton"
            >
                Continuar para checkout
            </button>


            <button
                class="clear-cart-button"
                id="clearCartButton"
            >
                Limpar carrinho
            </button>

        </div>

    </aside>



    <div
        class="cart-overlay"
        id="cartOverlay"
    >
    </div>



    <!-- ==================================================
         CHECKOUT
    ================================================== -->

    <div
        class="checkout-modal"
        id="checkoutModal"
        aria-hidden="true"
    >

        <div class="checkout-overlay"></div>


        <div class="checkout-container">


            <!-- CABEÇALHO -->

            <div class="checkout-header">

                <div>

                    <span class="section-label">
                        BELLA TAVOLA
                    </span>

                    <h2>
                        Finalizar pedido
                    </h2>

                </div>


                <button
                    class="checkout-close"
                    id="checkoutClose"
                >
                    ×
                </button>

            </div>



            <!-- INDICADOR DE ETAPAS -->

            <div class="checkout-steps">

                <div
                    class="checkout-step active"
                    data-step="1"
                >

                    <span>
                        1
                    </span>

                    <strong>
                        Seus dados
                    </strong>

                </div>


                <div
                    class="checkout-step"
                    data-step="2"
                >

                    <span>
                        2
                    </span>

                    <strong>
                        Reserva
                    </strong>

                </div>


                <div
                    class="checkout-step"
                    data-step="3"
                >

                    <span>
                        3
                    </span>

                    <strong>
                        Resumo
                    </strong>

                </div>

            </div>



            <!-- FORMULÁRIO -->

            <form
                id="checkoutForm"
                novalidate
            >


                <!-- ==================================================
                     ETAPA 1
                ================================================== -->

                <div
                    class="checkout-panel active"
                    data-panel="1"
                >

                    <div class="checkout-panel-heading">

                        <span class="section-label">
                            ETAPA 01
                        </span>

                        <h3>
                            Seus dados
                        </h3>

                        <p>
                            Precisamos de algumas informações
                            para preparar sua reserva.
                        </p>

                    </div>



                    <div class="form-grid">


                        <div class="form-group">

                            <label for="customerName">
                                Nome completo *
                            </label>

                            <input
                                type="text"
                                id="customerName"
                                name="customerName"
                                placeholder="Digite seu nome"
                                autocomplete="name"
                            >

                            <small
                                class="error-message"
                                id="customerNameError"
                            >
                            </small>

                        </div>



                        <div class="form-group">

                            <label for="customerPhone">
                                Telefone *
                            </label>

                            <input
                                type="tel"
                                id="customerPhone"
                                name="customerPhone"
                                placeholder="(00) 00000-0000"
                                autocomplete="tel"
                            >

                            <small
                                class="error-message"
                                id="customerPhoneError"
                            >
                            </small>

                        </div>



                        <div class="form-group full">

                            <label for="customerEmail">
                                E-mail *
                            </label>

                            <input
                                type="email"
                                id="customerEmail"
                                name="customerEmail"
                                placeholder="seuemail@email.com"
                                autocomplete="email"
                            >

                            <small
                                class="error-message"
                                id="customerEmailError"
                            >
                            </small>

                        </div>



                        <div class="form-group full">

                            <label for="customerNotes">
                                Observações
                            </label>

                            <textarea
                                id="customerNotes"
                                name="customerNotes"
                                rows="4"
                                placeholder="Alguma observação especial?"
                            ></textarea>

                        </div>

                    </div>



                    <div class="checkout-actions">

                        <button
                            type="button"
                            class="btn btn-primary"
                            id="nextToReservation"
                        >
                            Continuar
                        </button>

                    </div>

                </div>



                <!-- ==================================================
                     ETAPA 2
                ================================================== -->

                <div
                    class="checkout-panel"
                    data-panel="2"
                >

                    <div class="checkout-panel-heading">

                        <span class="section-label">
                            ETAPA 02
                        </span>

                        <h3>
                            Sua reserva
                        </h3>

                        <p>
                            Escolha a data, horário e quantidade
                            de pessoas.
                        </p>

                    </div>



                    <div class="form-grid">


                        <div class="form-group">

                            <label for="reservationDate">
                                Data *
                            </label>

                            <input
                                type="date"
                                id="reservationDate"
                                name="reservationDate"
                            >

                            <small
                                class="error-message"
                                id="reservationDateError"
                            >
                            </small>

                        </div>



                        <div class="form-group">

                            <label for="reservationTime">
                                Horário *
                            </label>

                            <select
                                id="reservationTime"
                                name="reservationTime"
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option value="18:00">
                                    18:00
                                </option>

                                <option value="18:30">
                                    18:30
                                </option>

                                <option value="19:00">
                                    19:00
                                </option>

                                <option value="19:30">
                                    19:30
                                </option>

                                <option value="20:00">
                                    20:00
                                </option>

                                <option value="20:30">
                                    20:30
                                </option>

                                <option value="21:00">
                                    21:00
                                </option>

                                <option value="21:30">
                                    21:30
                                </option>

                                <option value="22:00">
                                    22:00
                                </option>

                            </select>

                            <small
                                class="error-message"
                                id="reservationTimeError"
                            >
                            </small>

                        </div>



                        <div class="form-group">

                            <label for="guests">
                                Pessoas *
                            </label>

                            <select
                                id="guests"
                                name="guests"
                            >

                                <option value="">
                                    Selecione
                                </option>

                                <option value="1">
                                    1 pessoa
                                </option>

                                <option value="2">
                                    2 pessoas
                                </option>

                                <option value="3">
                                    3 pessoas
                                </option>

                                <option value="4">
                                    4 pessoas
                                </option>

                                <option value="5">
                                    5 pessoas
                                </option>

                                <option value="6">
                                    6 pessoas
                                </option>

                                <option value="7">
                                    7 pessoas
                                </option>

                                <option value="8">
                                    8 pessoas
                                </option>

                            </select>

                            <small
                                class="error-message"
                                id="guestsError"
                            >
                            </small>

                        </div>



                        <div class="form-group">

                            <label for="table">
                                Mesa *
                            </label>

                            <select
                                id="table"
                                name="table"
                            >

                                <option value="">
                                    Escolha uma mesa
                                </option>

                                <option value="Mesa 01">
                                    Mesa 01 — Janela
                                </option>

                                <option value="Mesa 02">
                                    Mesa 02 — Salão
                                </option>

                                <option value="Mesa 03">
                                    Mesa 03 — Salão
                                </option>

                                <option value="Mesa 04">
                                    Mesa 04 — Terraço
                                </option>

                                <option value="Mesa 05">
                                    Mesa 05 — Terraço
                                </option>

                                <option value="Mesa 06">
                                    Mesa 06 — Reservada
                                </option>

                            </select>

                            <small
                                class="error-message"
                                id="tableError"
                            >
                            </small>

                        </div>

                    </div>



                    <div class="checkout-actions split">

                        <button
                            type="button"
                            class="btn btn-secondary"
                            id="backToCustomer"
                        >
                            Voltar
                        </button>


                        <button
                            type="button"
                            class="btn btn-primary"
                            id="nextToSummary"
                        >
                            Ver resumo
                        </button>

                    </div>

                </div>



                <!-- ==================================================
                     ETAPA 3
                ================================================== -->

                <div
                    class="checkout-panel"
                    data-panel="3"
                >

                    <div class="checkout-panel-heading">

                        <span class="section-label">
                            ETAPA 03
                        </span>

                        <h3>
                            Confirme seu pedido
                        </h3>

                        <p>
                            Confira todas as informações antes
                            de confirmar.
                        </p>

                    </div>



                    <div
                        class="summary"
                        id="checkoutSummary"
                    >
                    </div>



                    <div class="checkout-actions split">

                        <button
                            type="button"
                            class="btn btn-secondary"
                            id="backToReservation"
                        >
                            Voltar
                        </button>


                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Confirmar pedido
                        </button>

                    </div>

                </div>


            </form>

        </div>

    </div>



    <!-- ==================================================
         TELA DE CONFIRMAÇÃO
    ================================================== -->

    <div
        class="confirmation-modal"
        id="confirmationModal"
        aria-hidden="true"
    >

        <div class="confirmation-overlay"></div>


        <div class="confirmation-card">

            <div class="confirmation-icon">
                ✓
            </div>


            <span class="section-label">
                TUDO CERTO!
            </span>


            <h2>
                Pedido confirmado.
            </h2>


            <p>
                Obrigado por escolher o Bella Tavola.
                Sua reserva foi registrada com sucesso.
            </p>


            <div
                class="confirmation-details"
                id="confirmationDetails"
            >
            </div>


            <button
                class="btn btn-primary"
                id="closeConfirmation"
            >
                Voltar ao restaurante
            </button>

        </div>

    </div>


    <!-- JAVASCRIPT -->

    <script src="js/script.js"></script>

</body>

</html>
```

---

# 2. `css/style.css`

Agora substitua **todo** o `style.css`:

```css
/* ==================================================
   RESET
================================================== */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
}


body {

    font-family: "DM Sans", sans-serif;

    color: #302923;

    background: #f8f3eb;

    line-height: 1.6;

}


body.no-scroll {
    overflow: hidden;
}


img {
    display: block;
    max-width: 100%;
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
   VARIÁVEIS
================================================== */

:root {

    --primary: #b54a32;

    --primary-dark: #8f3826;

    --secondary: #707653;

    --dark: #2a211c;

    --text: #302923;

    --text-light: #756b64;

    --background: #f8f3eb;

    --white: #ffffff;

    --border: #e5ddd3;

    --error: #c0392b;

    --success: #4f7c54;

    --shadow-small:
        0 5px 20px rgba(42, 33, 28, 0.08);

    --shadow-medium:
        0 15px 40px rgba(42, 33, 28, 0.14);

    --radius-small: 8px;

    --radius-medium: 14px;

    --radius-large: 22px;

    --container: 1180px;

}


/* ==================================================
   CONTAINER
================================================== */

.container {

    width: min(
        calc(100% - 40px),
        var(--container)
    );

    margin: 0 auto;

}


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

    color: var(--white);

    border-bottom:
        1px solid rgba(255, 255, 255, 0.15);

}


.header-container {

    min-height: 90px;

    display: flex;

    align-items: center;

    gap: 35px;

}


.logo {

    font-family: "Playfair Display", serif;

    font-size: 27px;

    font-weight: 700;

}


.nav {

    display: flex;

    align-items: center;

    gap: 30px;

    margin-left: auto;

}


.nav a {

    position: relative;

    font-size: 14px;

    font-weight: 500;

}


.nav a::after {

    content: "";

    position: absolute;

    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--white);

    transition: width 0.3s ease;

}


.nav a:hover::after {
    width: 100%;
}


/* ==================================================
   MENU MOBILE
================================================== */

.mobile-menu-button {

    display: none;

    margin-left: auto;

    border: 0;

    background: transparent;

    color: var(--white);

    font-size: 28px;

}


/* ==================================================
   CARRINHO
================================================== */

.cart-button {

    display: flex;

    align-items: center;

    gap: 7px;

    padding: 11px 16px;

    border:
        1px solid rgba(255, 255, 255, 0.5);

    border-radius: 50px;

    background:
        rgba(255, 255, 255, 0.08);

    color: var(--white);

}


.cart-count {

    min-width: 21px;

    height: 21px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: var(--primary);

    color: var(--white);

    font-size: 11px;

    font-weight: 700;

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

    border: 0;

    border-radius: 50px;

    font-size: 14px;

    font-weight: 600;

    transition:
        transform 0.3s ease,
        background 0.3s ease;

}


.btn:hover {
    transform: translateY(-2px);
}


.btn-primary {

    background: var(--primary);

    color: var(--white);

}


.btn-primary:hover {
    background: var(--primary-dark);
}


.btn-outline {

    border:
        1px solid rgba(255, 255, 255, 0.7);

    color: var(--white);

}


.btn-outline:hover {

    background: var(--white);

    color: var(--dark);

}


.btn-light {

    background: var(--white);

    color: var(--primary);

}


.btn-secondary {

    background: #eee7de;

    color: var(--dark);

}


/* ==================================================
   HERO
================================================== */

.hero {

    position: relative;

    min-height: 760px;

    display: flex;

    align-items: center;

    color: var(--white);

    background-image:
        url(
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
        );

    background-size: cover;

    background-position: center;

}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(20, 13, 9, 0.84),
            rgba(20, 13, 9, 0.50),
            rgba(20, 13, 9, 0.20)
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

    color: #e8c7a9;

    font-size: 13px;

    font-weight: 700;

    letter-spacing: 3px;

}


.hero h1 {

    margin-bottom: 28px;

    font-family: "Playfair Display", serif;

    font-size: clamp(54px, 7vw, 92px);

    line-height: 0.98;

}


.hero p {

    max-width: 560px;

    margin-bottom: 34px;

    color: rgba(255, 255, 255, 0.88);

    font-size: 18px;

}


.hero-buttons {

    display: flex;

    gap: 14px;

    flex-wrap: wrap;

}


/* ==================================================
   TÍTULOS
================================================== */

.section-label {

    display: block;

    margin-bottom: 16px;

    color: var(--primary);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2.5px;

}


h2 {

    font-family: "Playfair Display", serif;

    color: var(--dark);

    font-size: clamp(38px, 5vw, 58px);

    line-height: 1.08;

}


/* ==================================================
   INTRO
================================================== */

.intro {
    background: var(--white);
}


.intro-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: center;

}


.intro-text {
    max-width: 560px;
}


.intro-text p {

    margin-bottom: 18px;

    color: var(--text-light);

    font-size: 17px;

}


/* ==================================================
   SECTION HEADER
================================================== */

.section-header {

    display: flex;

    align-items: end;

    justify-content: space-between;

    gap: 50px;

    margin-bottom: 40px;

}


.section-header > p {

    max-width: 390px;

    color: var(--text-light);

}


.centered {

    display: block;

    text-align: center;

}


.centered h2 {

    max-width: 700px;

    margin: auto;

}


/* ==================================================
   FILTROS
================================================== */

.category-filters {

    display: flex;

    gap: 10px;

    margin-bottom: 40px;

    flex-wrap: wrap;

}


.filter-button {

    padding: 10px 18px;

    border:
        1px solid var(--border);

    border-radius: 50px;

    background: var(--white);

    color: var(--text-light);

    font-size: 13px;

    font-weight: 600;

}


.filter-button.active {

    border-color: var(--primary);

    background: var(--primary);

    color: var(--white);

}


/* ==================================================
   MENU
================================================== */

.menu {
    background: var(--background);
}


.menu-grid {

    display: grid;

    grid-template-columns:
        repeat(3, minmax(0, 1fr));

    gap: 28px;

}


.menu-card {

    overflow: hidden;

    background: var(--white);

    border:
        1px solid var(--border);

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


.menu-card.hidden {
    display: none;
}


.menu-image {

    height: 250px;

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


.menu-content {
    padding: 25px;
}


.menu-title {

    display: flex;

    justify-content: space-between;

    align-items: start;

    gap: 15px;

    margin-bottom: 12px;

}


.menu-title h3 {

    font-family: "Playfair Display", serif;

    font-size: 22px;

    line-height: 1.2;

}


.price {

    color: var(--primary);

    font-size: 15px;

    font-weight: 700;

    white-space: nowrap;

}


.menu-content > p {

    margin-bottom: 20px;

    color: var(--text-light);

    font-size: 14px;

}


.card-actions {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 10px;

}


.menu-button {

    padding: 0;

    border: 0;

    background: transparent;

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

}


.add-button {

    padding: 9px 14px;

    border: 0;

    border-radius: 50px;

    background: var(--primary);

    color: var(--white);

    font-size: 12px;

    font-weight: 700;

}


/* ==================================================
   SOBRE
================================================== */

.about {
    background: var(--white);
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

    color: var(--text-light);

}


.text-link {

    display: inline-block;

    margin-top: 15px;

    color: var(--primary);

    font-size: 14px;

    font-weight: 700;

}


/* ==================================================
   DEPOIMENTOS
================================================== */

.testimonials {
    background: var(--background);
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

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: var(--radius-medium);

}


.stars {

    margin-bottom: 20px;

    color: var(--primary);

    letter-spacing: 3px;

}


.testimonial p {

    margin-bottom: 25px;

    color: var(--text-light);

    font-family: "Playfair Display", serif;

    font-size: 18px;

}


/* ==================================================
   CTA
================================================== */

.cta {

    padding: 120px 0;

    text-align: center;

    color: var(--white);

    background-image:
        linear-gradient(
            rgba(60, 28, 18, 0.82),
            rgba(60, 28, 18, 0.82)
        ),
        url(
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=85"
        );

    background-size: cover;

    background-position: center;

}


.cta-content {
    max-width: 700px;
    margin: auto;
}


.cta .section-label {
    color: #e8c7a9;
}


.cta h2 {

    margin-bottom: 20px;

    color: var(--white);

}


.cta p {

    margin-bottom: 30px;

    color: rgba(255, 255, 255, 0.85);

}


/* ==================================================
   CONTATO
================================================== */

.contact {
    background: var(--white);
}


.contact-container {

    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

}


.contact-heading h2 {
    margin-bottom: 25px;
}


.contact-heading p {
    color: var(--text-light);
}


.contact-info {

    display: grid;

    gap: 30px;

}


.contact-item {

    padding-bottom: 25px;

    border-bottom:
        1px solid var(--border);

}


.contact-item span {

    display: block;

    margin-bottom: 5px;

    color: var(--text-light);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 1.5px;

    text-transform: uppercase;

}


/* ==================================================
   FOOTER
================================================== */

.footer {

    padding-top: 55px;

    background: var(--dark);

    color: var(--white);

}


.footer-container {

    display: flex;

    justify-content: space-between;

    gap: 40px;

    padding-bottom: 45px;

}


.footer-brand p {

    color:
        rgba(255, 255, 255, 0.5);

}


.footer-links {

    display: flex;

    gap: 25px;

}


.footer-links a {

    color:
        rgba(255, 255, 255, 0.7);

    font-size: 13px;

}


.footer-bottom {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 22px 0;

    border-top:
        1px solid rgba(255, 255, 255, 0.12);

}


.footer-bottom p {

    color:
        rgba(255, 255, 255, 0.45);

    font-size: 12px;

}


/* ==================================================
   MODAL DETALHES
================================================== */

.modal {

    position: fixed;

    inset: 0;

    z-index: 1000;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 20px;

}


.modal.active {
    display: flex;
}


.modal-overlay {

    position: absolute;

    inset: 0;

    background:
        rgba(20, 13, 9, 0.75);

    backdrop-filter: blur(4px);

}


.modal-content {

    position: relative;

    z-index: 2;

    width: min(600px, 100%);

    max-height: 90vh;

    overflow-y: auto;

    background: var(--white);

    border-radius: var(--radius-large);

}


.modal-image {

    width: 100%;

    height: 300px;

    object-fit: cover;

}


.modal-body {
    padding: 30px;
}


.modal-category {

    display: block;

    margin-bottom: 10px;

    color: var(--primary);

    font-size: 12px;

    font-weight: 700;

    letter-spacing: 2px;

    text-transform: uppercase;

}


.modal-body h2 {
    margin-bottom: 15px;
}


.modal-body p {

    margin-bottom: 25px;

    color: var(--text-light);

}


.modal-footer {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

}


.modal-footer strong {

    color: var(--primary);

    font-size: 20px;

}


.modal-close {

    position: absolute;

    top: 15px;
    right: 15px;

    z-index: 5;

    width: 40px;
    height: 40px;

    border: 0;

    border-radius: 50%;

    background:
        rgba(0, 0, 0, 0.55);

    color: var(--white);

    font-size: 25px;

}


/* ==================================================
   CARRINHO LATERAL
================================================== */

.cart-sidebar {

    position: fixed;

    top: 0;
    right: 0;

    z-index: 1100;

    width: min(430px, 100%);

    height: 100vh;

    display: flex;

    flex-direction: column;

    background: var(--white);

    box-shadow:
        -10px 0 40px rgba(0, 0, 0, 0.15);

    transform: translateX(100%);

    transition:
        transform 0.35s ease;

}


.cart-sidebar.active {
    transform: translateX(0);
}


.cart-overlay {

    position: fixed;

    inset: 0;

    z-index: 1050;

    display: none;

    background:
        rgba(20, 13, 9, 0.55);

}


.cart-overlay.active {
    display: block;
}


.cart-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 30px;

    border-bottom:
        1px solid var(--border);

}


.cart-header h2 {
    font-size: 32px;
}


.cart-close {

    width: 40px;
    height: 40px;

    border: 0;

    border-radius: 50%;

    background: var(--background);

    font-size: 25px;

}


.cart-items {

    flex: 1;

    overflow-y: auto;

    padding: 25px 30px;

}


.cart-item {

    display: grid;

    grid-template-columns: 75px 1fr;

    gap: 15px;

    padding: 18px 0;

    border-bottom:
        1px solid var(--border);

}


.cart-item-image {

    width: 75px;
    height: 75px;

    overflow: hidden;

    border-radius: var(--radius-small);

}


.cart-item-image img {

    width: 100%;
    height: 100%;

    object-fit: cover;

}


.cart-item-info h3 {

    margin-bottom: 4px;

    font-family:
        "Playfair Display", serif;

    font-size: 17px;

}


.cart-item-price {

    color: var(--primary);

    font-size: 13px;

    font-weight: 700;

}


.cart-item-controls {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-top: 10px;

}


.quantity-controls {

    display: flex;

    align-items: center;

    gap: 8px;

}


.quantity-button {

    width: 27px;
    height: 27px;

    border:
        1px solid var(--border);

    border-radius: 50%;

    background: var(--white);

}


.quantity {

    min-width: 20px;

    text-align: center;

    font-size: 13px;

    font-weight: 700;

}


.remove-item {

    border: 0;

    background: transparent;

    color: var(--error);

    font-size: 12px;

}


.empty-cart {

    padding: 60px 20px;

    text-align: center;

}


.empty-cart-icon {

    margin-bottom: 15px;

    font-size: 45px;

}


.empty-cart h3 {

    margin-bottom: 8px;

    font-family:
        "Playfair Display", serif;

    font-size: 24px;

}


.empty-cart p {

    color: var(--text-light);

    font-size: 14px;

}


.cart-footer {

    padding: 25px 30px;

    border-top:
        1px solid var(--border);

}


.cart-total {

    display: flex;

    align-items: center;

    justify-content: space-between;

    margin-bottom: 20px;

}


.cart-total strong {

    font-size: 22px;

}


.checkout-button {

    width: 100%;

    min-height: 50px;

    border: 0;

    border-radius: 50px;

    background: var(--primary);

    color: var(--white);

    font-weight: 700;

}


.clear-cart-button {

    width: 100%;

    margin-top: 10px;

    padding: 10px;

    border: 0;

    background: transparent;

    color: var(--text-light);

    font-size: 12px;

}


/* ==================================================
   CHECKOUT
================================================== */

.checkout-modal {

    position: fixed;

    inset: 0;

    z-index: 1200;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 20px;

}


.checkout-modal.active {
    display: flex;
}


.checkout-overlay {

    position: absolute;

    inset: 0;

    background:
        rgba(20, 13, 9, 0.78);

    backdrop-filter: blur(5px);

}


.checkout-container {

    position: relative;

    z-index: 2;

    width: min(
        900px,
        100%
    );

    max-height: 92vh;

    overflow-y: auto;

    background: var(--background);

    border-radius: var(--radius-large);

    box-shadow: var(--shadow-medium);

}


.checkout-header {

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 30px 35px;

    background: var(--white);

    border-bottom:
        1px solid var(--border);

}


.checkout-header h2 {
    font-size: 38px;
}


.checkout-close {

    width: 42px;
    height: 42px;

    border: 0;

    border-radius: 50%;

    background: var(--background);

    font-size: 25px;

}


/* ==================================================
   ETAPAS
================================================== */

.checkout-steps {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 10px;

    padding: 25px 35px;

    background: var(--white);

}


.checkout-step {

    display: flex;

    align-items: center;

    gap: 10px;

    color: #a29a94;

    font-size: 13px;

}


.checkout-step span {

    width: 32px;
    height: 32px;

    display: flex;

    align-items: center;

    justify-content: center;

    border-radius: 50%;

    background: #eee7de;

    font-weight: 700;

}


.checkout-step.active {

    color: var(--primary);

}


.checkout-step.active span {

    background: var(--primary);

    color: var(--white);

}


/* ==================================================
   PAINÉIS
================================================== */

.checkout-panel {

    display: none;

    padding: 40px 35px;

}


.checkout-panel.active {
    display: block;
}


.checkout-panel-heading {

    margin-bottom: 35px;

}


.checkout-panel-heading h3 {

    margin-bottom: 8px;

    font-family:
        "Playfair Display", serif;

    color: var(--dark);

    font-size: 32px;

}


.checkout-panel-heading p {

    color: var(--text-light);

}


/* ==================================================
   FORMULÁRIO
================================================== */

.form-grid {

    display: grid;

    grid-template-columns:
        repeat(2, minmax(0, 1fr));

    gap: 22px;

}


.form-group {

    display: flex;

    flex-direction: column;

    gap: 7px;

}


.form-group.full {
    grid-column: 1 / -1;
}


.form-group label {

    color: var(--dark);

    font-size: 13px;

    font-weight: 700;

}


.form-group input,
.form-group select,
.form-group textarea {

    width: 100%;

    padding: 13px 15px;

    border:
        1px solid var(--border);

    border-radius: var(--radius-small);

    outline: none;

    background: var(--white);

    color: var(--text);

    transition:
        border-color 0.2s ease,
        box-shadow 0.2s ease;

}


.form-group textarea {

    resize: vertical;

}


.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {

    border-color: var(--primary);

    box-shadow:
        0 0 0 3px rgba(181, 74, 50, 0.1);

}


.form-group.error input,
.form-group.error select {

    border-color: var(--error);

}


.error-message {

    min-height: 17px;

    color: var(--error);

    font-size: 11px;

}


/* ==================================================
   AÇÕES CHECKOUT
================================================== */

.checkout-actions {

    display: flex;

    justify-content: flex-end;

    margin-top: 35px;

}


.checkout-actions.split {

    justify-content: space-between;

}


/* ==================================================
   RESUMO
================================================== */

.summary {

    display: grid;

    gap: 20px;

}


.summary-section {

    padding: 22px;

    background: var(--white);

    border:
        1px solid var(--border);

    border-radius: var(--radius-medium);

}


.summary-section h4 {

    margin-bottom: 15px;

    color: var(--primary);

    font-size: 12px;

    letter-spacing: 1.5px;

    text-transform: uppercase;

}


.summary-row {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 7px 0;

    font-size: 14px;

}


.summary-row span:first-child {
    color: var(--text-light);
}


.summary-products {

    display: grid;

    gap: 10px;

}


.summary-product {

    display: flex;

    justify-content: space-between;

    gap: 15px;

    padding: 10px 0;

    border-bottom:
        1px solid var(--border);

    font-size: 14px;

}


.summary-total {

    display: flex;

    justify-content: space-between;

    padding-top: 15px;

    font-size: 18px;

    font-weight: 700;

}


/* ==================================================
   CONFIRMAÇÃO
================================================== */

.confirmation-modal {

    position: fixed;

    inset: 0;

    z-index: 1300;

    display: none;

    align-items: center;

    justify-content: center;

    padding: 20px;

}


.confirmation-modal.active {
    display: flex;
}


.confirmation-overlay {

    position: absolute;

    inset: 0;

    background:
        rgba(20, 13, 9, 0.80);

    backdrop-filter: blur(5px);

}


.confirmation-card {

    position: relative;

    z-index: 2;

    width: min(
        550px,
        100%
    );

    padding: 45px;

    text-align: center;

    background: var(--white);

    border-radius: var(--radius-large);

    box-shadow: var(--shadow-medium);

}


.confirmation-icon {

    width: 75px;
    height: 75px;

    display: flex;

    align-items: center;

    justify-content: center;

    margin: 0 auto 25px;

    border-radius: 50%;

    background:
        rgba(79, 124, 84, 0.12);

    color: var(--success);

    font-size: 40px;

    font-weight: 700;

}


.confirmation-card h2 {

    margin-bottom: 15px;

}


.confirmation-card > p {

    margin-bottom: 25px;

    color: var(--text-light);

}


.confirmation-details {

    margin-bottom: 30px;

    padding: 20px;

    text-align: left;

    background: var(--background);

    border-radius: var(--radius-medium);

}


.confirmation-detail {

    display: flex;

    justify-content: space-between;

    gap: 20px;

    padding: 7px 0;

    font-size: 14px;

}


.confirmation-detail span {
    color: var(--text-light);
}


/* ==================================================
   RESPONSIVIDADE
================================================== */

@media (max-width: 1000px) {

    .nav {
        gap: 18px;
    }


    .menu-grid {
        grid-template-columns:
            repeat(2, minmax(0, 1fr));
    }


    .intro-container {
        gap: 50px;
    }


    .about-container {
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


    .mobile-menu-button {
        display: block;
    }


    .nav {

        position: absolute;

        top: 75px;

        left: 15px;
        right: 15px;

        display: none;

        flex-direction: column;

        gap: 0;

        padding: 10px;

        margin: 0;

        background: var(--dark);

        border-radius: var(--radius-medium);

    }


    .nav.active {
        display: flex;
    }


    .nav a {
        padding: 14px;
    }


    .nav a::after {
        display: none;
    }


    .cart-button {
        margin-left: 0;
    }


    .cart-button-text {
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

    }


    .section-header {
        display: block;
    }


    .section-header > p {
        margin-top: 20px;
    }


    .about-container {

        grid-template-columns: 1fr;

    }


    .about-image {
        height: 450px;
    }


    .testimonial-grid {

        grid-template-columns: 1fr;

    }


    .contact-container {

        grid-template-columns: 1fr;

        gap: 50px;

    }


    .checkout-container {
        max-height: 95vh;
    }

}


/* ==================================================
   CELULAR
================================================== */

@media (max-width: 600px) {

    .container {
        width: calc(100% - 30px);
    }


    .logo {
        font-size: 23px;
    }


    .hero {
        min-height: 650px;
    }


    .hero h1 {
        font-size: 52px;
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
    }


    .about-image {
        height: 350px;
    }


    .cta {
        padding: 90px 0;
    }


    .footer-container {
        flex-direction: column;
    }


    .footer-links {
        flex-wrap: wrap;
    }


    .footer-bottom {
        flex-direction: column;
    }


    .modal-footer {
        flex-direction: column;
        align-items: stretch;
    }


    .modal-footer .btn {
        width: 100%;
    }


    .checkout-header {
        padding: 25px 20px;
    }


    .checkout-header h2 {
        font-size: 30px;
    }


    .checkout-steps {
        padding: 20px;
    }


    .checkout-step strong {
        display: none;
    }


    .checkout-panel {
        padding: 30px 20px;
    }


    .form-grid {
        grid-template-columns: 1fr;
    }


    .form-group.full {
        grid-column: auto;
    }


    .checkout-actions,
    .checkout-actions.split {
        flex-direction: column-reverse;

        gap: 10px;
    }


    .checkout-actions .btn {
        width: 100%;
    }


    .summary-row,
    .confirmation-detail {
        flex-direction: column;

        gap: 3px;
    }


    .confirmation-card {
        padding: 35px 25px;
    }

}
```

---

# 3. `js/script.js`

Finalmente, substitua **todo o JavaScript** pelo seguinte:

```javascript
/* ==================================================
   BELLA TAVOLA
   PROJETO 03 - V5

   Funcionalidades:

   - Menu mobile
   - Filtro de categorias
   - Modal de detalhes
   - Carrinho
   - LocalStorage
   - Checkout
   - Formulário do cliente
   - Validação
   - Data
   - Horário
   - Mesa
   - Resumo do pedido
   - Confirmação
================================================== */


/* ==================================================
   PRODUTOS
================================================== */

const products = [

    {
        id: 1,
        name: "Pizza Margherita",
        category: "pizza",
        categoryName: "Pizza",
        price: 42,
        description:
            "Molho de tomate, mozzarella fresca, manjericão e azeite extravirgem.",
        image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 2,
        name: "Pasta della Casa",
        category: "massa",
        categoryName: "Massa",
        price: 48,
        description:
            "Massa artesanal preparada na casa, acompanhada de molho especial e parmesão italiano.",
        image:
            "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 3,
        name: "Bistecca Toscana",
        category: "carne",
        categoryName: "Carne",
        price: 79,
        description:
            "Corte selecionado grelhado, servido com ervas frescas e legumes assados.",
        image:
            "https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 4,
        name: "Insalata Mediterrânea",
        category: "salada",
        categoryName: "Salada",
        price: 34,
        description:
            "Folhas frescas, tomates, queijo, ervas e molho especial da casa.",
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 5,
        name: "Dolce Italiano",
        category: "sobremesa",
        categoryName: "Sobremesa",
        price: 28,
        description:
            "Sobremesa artesanal preparada diariamente pelo nosso chef.",
        image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85"
    },


    {
        id: 6,
        name: "Pizza Diavola",
        category: "pizza",
        categoryName: "Pizza",
        price: 49,
        description:
            "Molho de tomate, mozzarella, salame picante e manjericão.",
        image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=85"
    }

];


/* ==================================================
   CARRINHO
================================================== */

let cart = JSON.parse(
    localStorage.getItem("bellaTavolaCart")
) || [];


/* ==================================================
   DADOS DO CHECKOUT
================================================== */

let checkoutData = {

    customer: {},

    reservation: {}

};


/* ==================================================
   ELEMENTOS
================================================== */

const cartButton =
    document.getElementById("cartButton");

const cartSidebar =
    document.getElementById("cartSidebar");

const cartClose =
    document.getElementById("cartClose");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const clearCartButton =
    document.getElementById("clearCartButton");

const checkoutButton =
    document.getElementById("checkoutButton");


/* ==================================================
   MENU MOBILE
================================================== */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mainNav =
    document.getElementById("mainNav");


mobileMenuButton.addEventListener(
    "click",
    () => {

        const opened =
            mainNav.classList.toggle(
                "active"
            );


        mobileMenuButton.setAttribute(
            "aria-expanded",
            opened
        );

    }
);


mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* ==================================================
   FILTROS
================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const menuCards =
    document.querySelectorAll(
        ".menu-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const category =
                button.dataset.category;


            filterButtons.forEach(
                item => {

                    item.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add(
                "active"
            );


            menuCards.forEach(card => {

                if (
                    category === "todos" ||
                    card.dataset.category === category
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});


/* ==================================================
   MOEDA
================================================== */

function formatCurrency(value) {

    return value.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* ==================================================
   LOCAL STORAGE
================================================== */

function saveCart() {

    localStorage.setItem(
        "bellaTavolaCart",
        JSON.stringify(cart)
    );

}


/* ==================================================
   ADICIONAR AO CARRINHO
================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {
        return;
    }


    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart();

    updateCart();

    openCart();

}


/* ==================================================
   QUANTIDADE
================================================== */

function increaseQuantity(id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (item) {

        item.quantity++;

        saveCart();

        updateCart();

    }

}


function decreaseQuantity(id) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) {
        return;
    }


    item.quantity--;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    saveCart();

    updateCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            product => product.id !== id
        );


    saveCart();

    updateCart();

}


/* ==================================================
   CÁLCULOS
================================================== */

function getCartQuantity() {

    return cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

}


function getCartTotal() {

    return cart.reduce(
        (total, item) =>
            total +
            item.price * item.quantity,
        0
    );

}


/* ==================================================
   ATUALIZAR CARRINHO
================================================== */

function updateCart() {

    cartCount.textContent =
        getCartQuantity();


    cartTotal.textContent =
        formatCurrency(
            getCartTotal()
        );


    renderCart();

}


/* ==================================================
   RENDERIZAR CARRINHO
================================================== */

function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <div class="empty-cart-icon">
                    🛒
                </div>

                <h3>
                    Seu carrinho está vazio
                </h3>

                <p>
                    Adicione alguns pratos deliciosos
                    ao seu pedido.
                </p>

            </div>

        `;

        return;

    }


    cartItems.innerHTML =
        cart.map(item => `

            <div class="cart-item">

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>


                    <span class="cart-item-price">
                        ${formatCurrency(item.price)}
                    </span>


                    <div class="cart-item-controls">

                        <div class="quantity-controls">

                            <button
                                class="quantity-button decrease-button"
                                data-id="${item.id}"
                            >
                                −
                            </button>


                            <span class="quantity">
                                ${item.quantity}
                            </span>


                            <button
                                class="quantity-button increase-button"
                                data-id="${item.id}"
                            >
                                +
                            </button>

                        </div>


                        <button
                            class="remove-item"
                            data-id="${item.id}"
                        >
                            Remover
                        </button>

                    </div>

                </div>

            </div>

        `).join("");


    attachCartEvents();

}


/* ==================================================
   EVENTOS DO CARRINHO
================================================== */

function attachCartEvents() {

    document
        .querySelectorAll(".increase-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    increaseQuantity(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll(".decrease-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    decreaseQuantity(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll(".remove-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(
                            button.dataset.id
                        )
                    );

                }
            );

        });

}


/* ==================================================
   ABRIR / FECHAR CARRINHO
================================================== */

function openCart() {

    cartSidebar.classList.add(
        "active"
    );

    cartOverlay.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart() {

    cartSidebar.classList.remove(
        "active"
    );

    cartOverlay.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


cartButton.addEventListener(
    "click",
    openCart
);


cartClose.addEventListener(
    "click",
    closeCart
);


cartOverlay.addEventListener(
    "click",
    closeCart
);


/* ==================================================
   LIMPAR CARRINHO
================================================== */

clearCartButton.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {
            return;
        }


        if (
            !confirm(
                "Deseja realmente limpar o carrinho?"
            )
        ) {

            return;

        }


        cart = [];

        saveCart();

        updateCart();

    }
);


/* ==================================================
   MODAL DE PRODUTO
================================================== */

const detailsModal =
    document.getElementById(
        "detailsModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalPrice =
    document.getElementById(
        "modalPrice"
    );

const modalAddButton =
    document.getElementById(
        "modalAddButton"
    );

let currentModalProduct = null;


function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) {
        return;
    }


    currentModalProduct =
        product;


    modalImage.src =
        product.image;

    modalImage.alt =
        product.name;

    modalCategory.textContent =
        product.categoryName;

    modalTitle.textContent =
        product.name;

    modalDescription.textContent =
        product.description;

    modalPrice.textContent =
        formatCurrency(
            product.price
        );


    detailsModal.classList.add(
        "active"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeProductModal() {

    detailsModal.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "no-scroll"
    );

    currentModalProduct = null;

}


document
    .querySelectorAll(".details-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openProductModal(
                    Number(
                        button.dataset.id
                    )
                );

            }
        );

    });


document
    .querySelectorAll(".add-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                addToCart(
                    Number(
                        button.dataset.id
                    )
                );

            }
        );

    });


modalAddButton.addEventListener(
    "click",
    () => {

        if (!currentModalProduct) {
            return;
        }


        addToCart(
            currentModalProduct.id
        );


        closeProductModal();

    }
);


modalClose.addEventListener(
    "click",
    closeProductModal
);


detailsModal.addEventListener(
    "click",
    event => {

        if (
            event.target.classList.contains(
                "modal-overlay"
            )
        ) {

            closeProductModal();

        }

    }
);


/* ==================================================
   CHECKOUT
================================================== */

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );

const checkoutClose =
    document.getElementById(
        "checkoutClose"
    );

const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );


/* ==================================================
   DATA MÍNIMA
================================================== */

const reservationDate =
    document.getElementById(
        "reservationDate"
    );


const today =
    new Date();


const todayString =
    today.toISOString()
        .split("T")[0];


reservationDate.min =
    todayString;


/* ==================================================
   ABRIR CHECKOUT
================================================== */

function openCheckout() {

    if (cart.length === 0) {

        alert(
            "Adicione pelo menos um item ao carrinho antes de continuar."
        );

        return;

    }


    closeCart();


    checkoutModal.classList.add(
        "active"
    );


    checkoutModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "no-scroll"
    );


    goToCheckoutStep(1);

}


checkoutButton.addEventListener(
    "click",
    openCheckout
);


/* ==================================================
   FECHAR CHECKOUT
================================================== */

function closeCheckout() {

    checkoutModal.classList.remove(
        "active"
    );


    checkoutModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "no-scroll"
    );

}


checkoutClose.addEventListener(
    "click",
    closeCheckout
);


/* ==================================================
   ETAPAS DO CHECKOUT
================================================== */

const checkoutPanels =
    document.querySelectorAll(
        ".checkout-panel"
    );

const checkoutSteps =
    document.querySelectorAll(
        ".checkout-step"
    );


function goToCheckoutStep(step) {

    checkoutPanels.forEach(panel => {

        panel.classList.toggle(
            "active",
            Number(
                panel.dataset.panel
            ) === step
        );

    });


    checkoutSteps.forEach(item => {

        item.classList.toggle(
            "active",
            Number(
                item.dataset.step
            ) <= step
        );

    });

}


/* ==================================================
   CAMPOS
================================================== */

const customerName =
    document.getElementById(
        "customerName"
    );

const customerPhone =
    document.getElementById(
        "customerPhone"
    );

const customerEmail =
    document.getElementById(
        "customerEmail"
    );

const customerNotes =
    document.getElementById(
        "customerNotes"
    );

const reservationTime =
    document.getElementById(
        "reservationTime"
    );

const guests =
    document.getElementById(
        "guests"
    );

const table =
    document.getElementById(
        "table"
    );


/* ==================================================
   ERROS
================================================== */

function setError(
    input,
    message
) {

    const group =
        input.closest(
            ".form-group"
        );


    const error =
        group.querySelector(
            ".error-message"
        );


    group.classList.add(
        "error"
    );


    error.textContent =
        message;

}


function clearError(input) {

    const group =
        input.closest(
            ".form-group"
        );


    const error =
        group.querySelector(
            ".error-message"
        );


    group.classList.remove(
        "error"
    );


    error.textContent =
        "";

}


/* ==================================================
   VALIDAÇÃO DO CLIENTE
================================================== */

function validateCustomer() {

    let valid = true;


    if (
        customerName.value.trim().length < 3
    ) {

        setError(
            customerName,
            "Digite seu nome completo."
        );

        valid = false;

    } else {

        clearError(
            customerName
        );

    }


    const phoneDigits =
        customerPhone.value
            .replace(/\D/g, "");


    if (
        phoneDigits.length < 10
    ) {

        setError(
            customerPhone,
            "Digite um telefone válido."
        );

        valid = false;

    } else {

        clearError(
            customerPhone
        );

    }


    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (
        !emailRegex.test(
            customerEmail.value.trim()
        )
    ) {

        setError(
            customerEmail,
            "Digite um e-mail válido."
        );

        valid = false;

    } else {

        clearError(
            customerEmail
        );

    }


    return valid;

}


/* ==================================================
   VALIDAÇÃO DA RESERVA
================================================== */

function validateReservation() {

    let valid = true;


    if (
        !reservationDate.value
    ) {

        setError(
            reservationDate,
            "Escolha uma data."
        );

        valid = false;

    } else {

        clearError(
            reservationDate
        );

    }


    if (
        !reservationTime.value
    ) {

        setError(
            reservationTime,
            "Escolha um horário."
        );

        valid = false;

    } else {

        clearError(
            reservationTime
        );

    }


    if (
        !guests.value
    ) {

        setError(
            guests,
            "Escolha a quantidade de pessoas."
        );

        valid = false;

    } else {

        clearError(
            guests
        );

    }


    if (
        !table.value
    ) {

        setError(
            table,
            "Escolha uma mesa."
        );

        valid = false;

    } else {

        clearError(
            table
        );

    }


    return valid;

}


/* ==================================================
   SALVAR DADOS DO CLIENTE
================================================== */

function saveCustomerData() {

    checkoutData.customer = {

        name:
            customerName.value.trim(),

        phone:
            customerPhone.value.trim(),

        email:
            customerEmail.value.trim(),

        notes:
            customerNotes.value.trim()

    };

}


/* ==================================================
   SALVAR RESERVA
================================================== */

function saveReservationData() {

    checkoutData.reservation = {

        date:
            reservationDate.value,

        time:
            reservationTime.value,

        guests:
            guests.value,

        table:
            table.value

    };

}


/* ==================================================
   FORMATAR DATA
================================================== */

function formatDate(date) {

    if (!date) {
        return "";
    }


    const parts =
        date.split("-");


    return `${parts[2]}/${parts[1]}/${parts[0]}`;

}


/* ==================================================
   RESUMO
================================================== */

function generateSummary() {

    const summary =
        document.getElementById(
            "checkoutSummary"
        );


    const customer =
        checkoutData.customer;


    const reservation =
        checkoutData.reservation;


    const productsHTML =
        cart.map(item => `

            <div class="summary-product">

                <span>
                    ${item.quantity}x
                    ${item.name}
                </span>

                <strong>
                    ${formatCurrency(
                        item.price *
                        item.quantity
                    )}
                </strong>

            </div>

        `).join("");


    summary.innerHTML = `

        <div class="summary-section">

            <h4>
                Cliente
            </h4>


            <div class="summary-row">

                <span>
                    Nome
                </span>

                <strong>
                    ${customer.name}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Telefone
                </span>

                <strong>
                    ${customer.phone}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    E-mail
                </span>

                <strong>
                    ${customer.email}
                </strong>

            </div>

        </div>



        <div class="summary-section">

            <h4>
                Reserva
            </h4>


            <div class="summary-row">

                <span>
                    Data
                </span>

                <strong>
                    ${formatDate(
                        reservation.date
                    )}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Horário
                </span>

                <strong>
                    ${reservation.time}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Pessoas
                </span>

                <strong>
                    ${reservation.guests}
                </strong>

            </div>


            <div class="summary-row">

                <span>
                    Mesa
                </span>

                <strong>
                    ${reservation.table}
                </strong>

            </div>

        </div>



        <div class="summary-section">

            <h4>
                Seu pedido
            </h4>


            <div class="summary-products">

                ${productsHTML}

            </div>


            <div class="summary-total">

                <span>
                    Total
                </span>

                <strong>
                    ${formatCurrency(
                        getCartTotal()
                    )}
                </strong>

            </div>

        </div>

    `;

}


/* ==================================================
   ETAPA 1 → ETAPA 2
================================================== */

document
    .getElementById(
        "nextToReservation"
    )
    .addEventListener(
        "click",
        () => {

            if (
                !validateCustomer()
            ) {

                return;

            }


            saveCustomerData();


            goToCheckoutStep(2);

        }
    );


/* ==================================================
   ETAPA 2 → ETAPA 1
================================================== */

document
    .getElementById(
        "backToCustomer"
    )
    .addEventListener(
        "click",
        () => {

            goToCheckoutStep(1);

        }
    );


/* ==================================================
   ETAPA 2 → ETAPA 3
================================================== */

document
    .getElementById(
        "nextToSummary"
    )
    .addEventListener(
        "click",
        () => {

            if (
                !validateReservation()
            ) {

                return;

            }


            saveReservationData();


            generateSummary();


            goToCheckoutStep(3);

        }
    );


/* ==================================================
   ETAPA 3 → ETAPA 2
================================================== */

document
    .getElementById(
        "backToReservation"
    )
    .addEventListener(
        "click",
        () => {

            goToCheckoutStep(2);

        }
    );


/* ==================================================
   CONFIRMAR PEDIDO
================================================== */

checkoutForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (
            !validateCustomer() ||
            !validateReservation()
        ) {

            return;

        }


        saveCustomerData();

        saveReservationData();

        generateSummary();

        showConfirmation();

    }
);


/* ==================================================
   CONFIRMAÇÃO
================================================== */

const confirmationModal =
    document.getElementById(
        "confirmationModal"
    );

const confirmationDetails =
    document.getElementById(
        "confirmationDetails"
    );

const closeConfirmation =
    document.getElementById(
        "closeConfirmation"
    );


function generateOrderNumber() {

    return Math.floor(
        100000 +
        Math.random() * 900000
    );

}


function showConfirmation() {

    const orderNumber =
        generateOrderNumber();


    confirmationDetails.innerHTML = `

        <div class="confirmation-detail">

            <span>
                Pedido
            </span>

            <strong>
                #${orderNumber}
            </strong>

        </div>


        <div class="confirmation-detail">

            <span>
                Cliente
            </span>

            <strong>
                ${checkoutData.customer.name}
            </strong>

        </div>


        <div class="confirmation-detail">

            <span>
                Data
            </span>

            <strong>
                ${formatDate(
                    checkoutData.reservation.date
                )}
            </strong>

        </div>


        <div class="confirmation-detail">

            <span>
                Horário
            </span>

            <strong>
                ${checkoutData.reservation.time}
            </strong>

        </div>


        <div class="confirmation-detail">

            <span>
                Mesa
            </span>

            <strong>
                ${checkoutData.reservation.table}
            </strong>

        </div>


        <div class="confirmation-detail">

            <span>
                Total
            </span>

            <strong>
                ${formatCurrency(
                    getCartTotal()
                )}
            </strong>

        </div>

    `;


    checkoutModal.classList.remove(
        "active"
    );


    confirmationModal.classList.add(
        "active"
    );


    confirmationModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /*
       O pedido foi "finalizado".
       Portanto, limpamos o carrinho.
    */

    cart = [];

    saveCart();

    updateCart();

}


/* ==================================================
   FECHAR CONFIRMAÇÃO
================================================== */

closeConfirmation.addEventListener(
    "click",
    () => {

        confirmationModal.classList.remove(
            "active"
        );


        confirmationModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "no-scroll"
        );


        checkoutForm.reset();


        checkoutData = {

            customer: {},

            reservation: {}

        };


        goToCheckoutStep(1);

    }
);


/* ==================================================
   RESERVA DO HERO
================================================== */

document
    .getElementById(
        "reservationButton"
    )
    .addEventListener(
        "click",
        () => {

            if (cart.length === 0) {

                alert(
                    "Adicione pelo menos um prato ao pedido antes de fazer a reserva."
                );

                document
                    .getElementById(
                        "cardapio"
                    )
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                return;

            }


            openCheckout();

        }
    );


/* ==================================================
   TECLA ESC
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {

            return;

        }


        closeProductModal();

        closeCart();

        closeCheckout();

    }
);


/* ==================================================
   INICIALIZAÇÃO
================================================== */

updateCart();
```

---

# 🚀 O que mudou na V5?

Agora temos uma aplicação com um fluxo muito mais completo.

## 1. Checkout visual

Ao clicar:

**Continuar para checkout**

abre uma tela própria:

```text
┌─────────────────────────────────────────┐
│ Bella Tavola                            │
│ Finalizar pedido                    X   │
├─────────────────────────────────────────┤
│ ① Seus dados                            │
│ ② Reserva                               │
│ ③ Resumo                                │
├─────────────────────────────────────────┤
│                                         │
│ Seus dados                              │
│                                         │
│ Nome completo                           │
│ [____________________________]          │
│                                         │
│ Telefone                                │
│ [____________________________]          │
│                                         │
│ E-mail                                  │
│ [____________________________]          │
│                                         │
│              [ Continuar ]              │
└─────────────────────────────────────────┘
```

---

# 2. Dados do cliente

O usuário precisa informar:

```text
Nome
Telefone
E-mail
Observações
```

E o JavaScript verifica os campos.

Por exemplo:

```javascript
if (customerName.value.trim().length < 3) {
```

Se o nome tiver menos de três caracteres, aparece uma mensagem de erro.

---

# 3. Reserva

Depois vem a segunda etapa:

```text
Data
Horário
Quantidade de pessoas
Mesa
```

Por exemplo:

```text
Data:
[ 10/10/2026 ]

Horário:
[ 20:00 ▼ ]

Pessoas:
[ 4 pessoas ▼ ]

Mesa:
[ Mesa 04 — Terraço ▼ ]
```

---

# 4. Validação

Agora temos validação para:

* nome
* telefone
* e-mail
* data
* horário
* número de pessoas
* mesa

O usuário não consegue avançar enquanto os dados obrigatórios estiverem incorretos.

---

# 5. Resumo

Antes de confirmar, o cliente vê algo como:

```text
CLIENTE

Nome ........ João Silva
Telefone ..... (31) 99999-9999
E-mail ....... joao@email.com


RESERVA

Data .......... 10/10/2026
Horário ....... 20:00
Pessoas ....... 4
Mesa .......... Mesa 04 — Terraço


SEU PEDIDO

2x Pizza Margherita       R$ 84,00
1x Pasta della Casa       R$ 48,00
1x Dolce Italiano         R$ 28,00

────────────────────────────

TOTAL                     R$ 160,00
```

E somente então:

**Confirmar pedido**

---

# 6. Tela de confirmação

Depois da confirmação:

```text
              ✓

          TUDO CERTO!

       Pedido confirmado.

Obrigado por escolher
o Bella Tavola.

Pedido       #582391
Cliente      João Silva
Data         10/10/2026
Horário      20:00
Mesa         Mesa 04
Total        R$ 160,00

     [ Voltar ao restaurante ]
```

O número do pedido é gerado pelo JavaScript.

---

# ⚠️ Uma observação importante

Esta V5 é uma **simulação frontend**.

Ela ainda **não possui backend**.

Portanto:

```text
HTML
   ↓
CSS
   ↓
JavaScript
   ↓
localStorage
```

Tudo acontece no navegador.

Ainda não existe:

```text
JavaScript
    ↓
API
    ↓
Servidor
    ↓
Banco de dados
```

Por isso a reserva não é realmente enviada para um restaurante.

E isso é proposital: **estamos construindo a aplicação progressivamente**.

---

# 🧠 O que você está aprendendo neste projeto

O Projeto 03 já está começando a reunir vários conceitos importantes de frontend:

```text
HTML5
 │
 ├── Semântica
 ├── Formulários
 ├── Acessibilidade
 └── Estrutura da aplicação
        │
        ▼
CSS3
 │
 ├── Flexbox
 ├── Grid
 ├── Responsividade
 ├── Modal
 ├── Sidebar
 ├── Formulários
 └── Design responsivo
        │
        ▼
JavaScript
 │
 ├── DOM
 ├── Eventos
 ├── Arrays
 ├── Objetos
 ├── Funções
 ├── Métodos de array
 ├── Validação
 ├── LocalStorage
 ├── Estado da aplicação
 └── Manipulação dinâmica do HTML
```

### Próxima evolução possível do Projeto 03

A próxima versão poderia ser uma **V6**, onde finalmente começamos a aproximar o projeto de uma aplicação profissional:

```text
V6
│
├── Máscara de telefone
├── Sistema de disponibilidade de mesas
├── Bloqueio de datas passadas
├── Horários dinamicamente disponíveis
├── Cupom de desconto
├── Taxa de serviço
├── Forma de pagamento visual
├── PIX / cartão (simulação)
├── impressão do pedido
├── geração de recibo
├── persistência da reserva
└── preparação para API/backend
```

Aí o **Projeto 03** já teria uma excelente base para, posteriormente, conectar um backend em **Node.js + Express + banco de dados**, transformando essa interface em um sistema realmente full-stack.
