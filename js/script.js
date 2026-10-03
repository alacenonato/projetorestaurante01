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