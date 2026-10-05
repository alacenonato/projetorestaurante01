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