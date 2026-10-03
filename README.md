# 🍽️ Projeto 03 — Página de Restaurante

Vamos continuar exatamente na trilha. Neste projeto vamos subir um nível em relação aos anteriores e construir uma página de restaurante **responsiva e visualmente profissional**, ainda sem JavaScript.

### 🎯 O que você vai praticar

* HTML5 semântico
* CSS3
* Flexbox
* CSS Grid
* Cards
* Imagens
* Tipografia
* Espaçamento
* Cores
* `hover`
* `border-radius`
* `box-shadow`
* Media Queries
* Design responsivo

### 🏗️ O que vamos construir

Uma página fictícia chamada **Bella Tavola**, contendo:

```text
┌───────────────────────────────────────┐
│ LOGO     Início  Cardápio  Sobre  📞  │
├───────────────────────────────────────┤
│                                       │
│        🍝 BELLA TAVOLA                │
│     Sabor que reúne pessoas           │
│                                       │
│          [ Ver Cardápio ]             │
│                                       │
├───────────────────────────────────────┤
│              NOSSO CARDÁPIO           │
│                                       │
│ ┌────────┐ ┌────────┐ ┌────────┐      │
│ │ Prato  │ │ Prato  │ │ Prato  │      │
│ │  🍕    │ │  🍝    │ │  🍔    │      │
│ │ R$...  │ │ R$...  │ │ R$...  │      │
│ └────────┘ └────────┘ └────────┘      │
│                                       │
├───────────────────────────────────────┤
│              SOBRE NÓS                │
│                                       │
│      imagem       texto               │
│                                       │
├───────────────────────────────────────┤
│             CONTATO                   │
├───────────────────────────────────────┤
│              FOOTER                   │
└───────────────────────────────────────┘
```

## 📁 Etapa 1 — Criar o projeto

No terminal:

```bash
mkdir projeto-03-restaurante
cd projeto-03-restaurante
```

Crie esta estrutura:

```text
projeto-03-restaurante/
│
├── index.html
│
├── css/
│   └── style.css
│
└── assets/
    └── images/
```

Por enquanto teremos apenas **HTML + CSS**.

---

# 🧱 Etapa 2 — HTML

Crie o arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Bella Tavola | Restaurante</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <!-- CABEÇALHO -->
    <header class="header">

        <div class="container">

            <a href="#" class="logo">
                Bella Tavola
            </a>

            <nav class="nav">
                <a href="#inicio">Início</a>
                <a href="#cardapio">Cardápio</a>
                <a href="#sobre">Sobre</a>
                <a href="#contato">Contato</a>
            </nav>

        </div>

    </header>


    <!-- HERO -->
    <main>

        <section id="inicio" class="hero">

            <div class="container hero-content">

                <div class="hero-text">

                    <span class="hero-subtitle">
                        Restaurante Italiano
                    </span>

                    <h1>
                        Sabor que
                        <span>reúne pessoas.</span>
                    </h1>

                    <p>
                        Uma experiência gastronômica preparada
                        com ingredientes selecionados e muito carinho.
                    </p>

                    <a href="#cardapio" class="button">
                        Ver nosso cardápio
                    </a>

                </div>

            </div>

        </section>


        <!-- CARDÁPIO -->
        <section id="cardapio" class="menu section">

            <div class="container">

                <div class="section-title">

                    <span>Nosso cardápio</span>

                    <h2>
                        Pratos especiais
                    </h2>

                    <p>
                        Confira algumas das nossas especialidades.
                    </p>

                </div>


                <div class="menu-grid">

                    <!-- CARD 1 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🍕
                        </div>

                        <div class="menu-content">

                            <h3>
                                Pizza Margherita
                            </h3>

                            <p>
                                Molho de tomate, mozzarella,
                                manjericão fresco e azeite.
                            </p>

                            <strong>
                                R$ 39,90
                            </strong>

                        </div>

                    </article>


                    <!-- CARD 2 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🍝
                        </div>

                        <div class="menu-content">

                            <h3>
                                Spaghetti Italiano
                            </h3>

                            <p>
                                Massa artesanal ao molho
                                de tomate e parmesão.
                            </p>

                            <strong>
                                R$ 34,90
                            </strong>

                        </div>

                    </article>


                    <!-- CARD 3 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🍔
                        </div>

                        <div class="menu-content">

                            <h3>
                                Bella Burger
                            </h3>

                            <p>
                                Hambúrguer artesanal, queijo,
                                tomate e molho especial.
                            </p>

                            <strong>
                                R$ 29,90
                            </strong>

                        </div>

                    </article>


                    <!-- CARD 4 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🥗
                        </div>

                        <div class="menu-content">

                            <h3>
                                Salada Mediterrânea
                            </h3>

                            <p>
                                Folhas frescas, tomate,
                                queijo e molho especial.
                            </p>

                            <strong>
                                R$ 24,90
                            </strong>

                        </div>

                    </article>


                    <!-- CARD 5 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🥩
                        </div>

                        <div class="menu-content">

                            <h3>
                                Filé Especial
                            </h3>

                            <p>
                                Filé grelhado acompanhado
                                de legumes e batatas.
                            </p>

                            <strong>
                                R$ 59,90
                            </strong>

                        </div>

                    </article>


                    <!-- CARD 6 -->
                    <article class="menu-card">

                        <div class="menu-image">
                            🍰
                        </div>

                        <div class="menu-content">

                            <h3>
                                Tiramisu
                            </h3>

                            <p>
                                Sobremesa italiana tradicional
                                com café e mascarpone.
                            </p>

                            <strong>
                                R$ 19,90
                            </strong>

                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- SOBRE -->
        <section id="sobre" class="about section">

            <div class="container about-content">

                <div class="about-image">
                    🍝
                </div>

                <div class="about-text">

                    <span>
                        Nossa história
                    </span>

                    <h2>
                        Mais que um restaurante,
                        uma experiência.
                    </h2>

                    <p>
                        A Bella Tavola nasceu da paixão pela
                        gastronomia italiana e pelo desejo de
                        reunir pessoas ao redor de uma boa mesa.
                    </p>

                    <p>
                        Trabalhamos com ingredientes selecionados
                        e receitas preparadas diariamente.
                    </p>

                    <a href="#contato" class="button">
                        Conheça nosso restaurante
                    </a>

                </div>

            </div>

        </section>


        <!-- CONTATO -->
        <section id="contato" class="contact section">

            <div class="container">

                <div class="section-title">

                    <span>
                        Fale conosco
                    </span>

                    <h2>
                        Entre em contato
                    </h2>

                </div>


                <div class="contact-grid">

                    <div>
                        <h3>Endereço</h3>
                        <p>Rua das Flores, 123</p>
                    </div>

                    <div>
                        <h3>Telefone</h3>
                        <p>(31) 99999-9999</p>
                    </div>

                    <div>
                        <h3>Horário</h3>
                        <p>Terça a Domingo — 18h às 23h</p>
                    </div>

                </div>

            </div>

        </section>

    </main>


    <!-- RODAPÉ -->
    <footer class="footer">

        <div class="container">

            <p>
                © 2026 Bella Tavola. Todos os direitos reservados.
            </p>

        </div>

    </footer>

</body>

</html>
```

---

# 🎨 Etapa 3 — CSS

Agora vamos criar o `css/style.css`.

Comece com:

```css
/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.6;
    background-color: #fffaf5;
    color: #333;
}

a {
    text-decoration: none;
    color: inherit;
}

img {
    max-width: 100%;
    display: block;
}


/* =========================
   UTILITÁRIOS
========================= */

.container {
    width: min(1100px, 90%);
    margin: 0 auto;
}

.section {
    padding: 80px 0;
}


/* =========================
   HEADER
========================= */

.header {
    background-color: #ffffff;
    border-bottom: 1px solid #eee;
}

.header .container {
    min-height: 70px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 30px;
}

.nav a {
    transition: 0.3s;
}

.nav a:hover {
    opacity: 0.6;
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 600px;

    display: flex;
    align-items: center;

    background:
        linear-gradient(
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0.55)
        ),
        url("../assets/images/restaurant.jpg");

    background-size: cover;
    background-position: center;

    color: white;
}

.hero-content {
    display: flex;
    align-items: center;
}

.hero-text {
    max-width: 650px;
}

.hero-subtitle {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: clamp(2.5rem, 6vw, 5rem);
    line-height: 1.1;
    margin: 20px 0;
}

.hero h1 span {
    display: block;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}


/* =========================
   BOTÃO
========================= */

.button {
    display: inline-block;

    padding: 14px 25px;

    background-color: #ffffff;
    color: #222;

    border-radius: 5px;

    font-weight: bold;

    transition: 0.3s;
}

.button:hover {
    transform: translateY(-3px);
}


/* =========================
   TÍTULOS
========================= */

.section-title {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 50px;
}

.section-title span,
.about-text > span {
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 2px;
}

.section-title h2,
.about-text h2 {
    font-size: 2.5rem;
    margin: 10px 0;
}


/* =========================
   CARDÁPIO
========================= */

.menu-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.menu-card {
    background-color: white;

    border-radius: 10px;

    overflow: hidden;

    box-shadow:
        0 5px 20px rgba(0, 0, 0, 0.08);

    transition: 0.3s;
}

.menu-card:hover {
    transform: translateY(-8px);
}

.menu-image {
    min-height: 180px;

    display: grid;
    place-items: center;

    font-size: 5rem;

    background-color: #f2e7dc;
}

.menu-content {
    padding: 25px;
}

.menu-content h3 {
    margin-bottom: 10px;
}

.menu-content p {
    color: #666;
    margin-bottom: 20px;
}

.menu-content strong {
    font-size: 1.2rem;
}


/* =========================
   SOBRE
========================= */

.about {
    background-color: white;
}

.about-content {
    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 60px;

    align-items: center;
}

.about-image {
    min-height: 400px;

    display: grid;
    place-items: center;

    font-size: 10rem;

    background-color: #f2e7dc;

    border-radius: 10px;
}

.about-text p {
    margin: 20px 0;
    color: #666;
}


/* =========================
   CONTATO
========================= */

.contact {
    background-color: #fffaf5;
}

.contact-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 30px;
}

.contact-grid > div {
    background-color: white;

    padding: 30px;

    border-radius: 10px;

    text-align: center;
}


/* =========================
   FOOTER
========================= */

.footer {
    padding: 30px 0;

    background-color: #222;

    color: white;

    text-align: center;
}


/* =========================
   RESPONSIVIDADE
========================= */

@media (max-width: 800px) {

    .header .container {
        flex-direction: column;
        gap: 15px;
        padding: 20px 0;
    }

    .nav {
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 500px) {

    .menu-grid {
        grid-template-columns: 1fr;
    }

    .hero {
        min-height: 500px;
    }

    .hero h1 {
        font-size: 2.8rem;
    }

    .section-title h2,
    .about-text h2 {
        font-size: 2rem;
    }

}
```

## 🧠 O que você acabou de praticar

Um dos conceitos mais importantes deste projeto é o **CSS Grid**:

```css
.menu-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}
```

Isso cria:

```text
┌─────────┐ ┌─────────┐ ┌─────────┐
│  CARD   │ │  CARD   │ │  CARD   │
└─────────┘ └─────────┘ └─────────┘
```

E no celular:

```css
@media (max-width: 500px) {

    .menu-grid {
        grid-template-columns: 1fr;
    }

}
```

passamos para:

```text
┌─────────────┐
│    CARD     │
└─────────────┘
┌─────────────┐
│    CARD     │
└─────────────┘
┌─────────────┐
│    CARD     │
└─────────────┘
```

Isso é **responsividade**.

---

## ⚠️ Uma observação

O CSS está procurando esta imagem:

```text
assets/images/restaurant.jpg
```

Se você ainda não tiver a imagem, a página continuará funcionando, mas o fundo do Hero não aparecerá corretamente.

Por enquanto, você pode simplesmente criar a pasta:

```text
assets/images/
```

e depois colocaremos imagens reais.

### 🧪 Seu primeiro desafio

Antes de eu melhorar o projeto, quero que você tente sozinho:

**Desafio 1:** adicione mais **3 pratos** ao cardápio.

**Desafio 2:** crie uma nova seção chamada **"Depoimentos"**.

**Desafio 3:** faça cada card possuir um botão:

```text
[ Ver detalhes ]
```

**Desafio 4:** faça o logo **Bella Tavola** ficar diferente usando apenas CSS.

**Desafio 5:** altere o layout para que, em telas médias, sejam exibidos **2 cards por linha**, e em telas pequenas, **1 card por linha**.

Quando terminar, podemos fazer a **versão 2 do Projeto 3**, colocando imagens reais, uma identidade visual mais profissional e refinando o CSS.

---
---


Sim — você encontrou um problema real. 👍

O `index.html` referencia:

```html
url("../assets/images/restaurant.jpg")
```

Então precisamos ter este arquivo:

```text
projeto-03-restaurante/
├── index.html
├── css/
│   └── style.css
└── assets/
    └── images/
        └── restaurant.jpg
```

Mas **isso não deveria impedir o site inteiro de carregar**. Se o HTML/CSS estiver correto, apenas a imagem de fundo não aparecerá.

### Vamos corrigir

Crie as pastas:

```bash
mkdir -p assets/images
```

Depois coloque uma imagem de restaurante dentro de:

```text
assets/images/restaurant.jpg
```

Você pode testar se o arquivo está realmente lá:

```bash
ls -lh assets/images/
```

Deve aparecer algo como:

```text
restaurant.jpg
```

### ⚠️ Um detalhe importante

No CSS temos:

```css
background:
    linear-gradient(
        rgba(0, 0, 0, 0.55),
        rgba(0, 0, 0, 0.55)
    ),
    url("../assets/images/restaurant.jpg");
```

O caminho está **correto**, porque `style.css` está dentro de:

```text
css/
```

e precisamos voltar uma pasta:

```text
css/
   ↓ ..
projeto-03-restaurante/
   ↓
assets/images/restaurant.jpg
```

### Se o site estiver completamente em branco

Aí provavelmente existe **outro erro**, e não apenas a imagem.

Faça este teste: abra diretamente o `index.html` no navegador. Se ainda não aparecer, me mande o resultado destes comandos:

```bash
pwd
```

e:

```bash
find . -maxdepth 3 -type f
```

Assim eu consigo conferir **exatamente a estrutura do seu Projeto 03** e descobrir o problema.

---
---
