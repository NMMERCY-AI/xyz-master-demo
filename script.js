/* =========================================================
   XYZ MASTER DEMO
   Frontend-only
========================================================= */


const demoBusiness = {
    name: "XYZ Cafe & Restaurant",

    welcome:
        "Welcome to XYZ Cafe & Restaurant. How can I help you today?",

    responses: [
        // GREETING
        {
            keywords: [
                "hello",
                "hi",
                "hey",
                "good morning",
                "good afternoon",
                "good evening"
            ],
            response:
                "Hello. Welcome to XYZ Cafe & Restaurant. How can I help you?"
        },

        // MENU
        {
            keywords: [
                "menu",
                "food",
                "foods",
                "what do you have",
                "what do you serve"
            ],
            response:
                "We serve burgers, pizzas, pasta, sandwiches, coffee, drinks, and desserts. Ask me about any item for details."
        },

        // BURGER
        {
            keywords: [
                "burger",
                "burgers"
            ],
            response:
                "Our burgers start at NPR 350. Classic Burger: NPR 350. Cheese Burger: NPR 400. Double Beef Burger: NPR 500."
        },

        // PIZZA
        {
            keywords: [
                "pizza",
                "pizzas"
            ],
            response:
                "Our pizzas start at NPR 600. Margherita: NPR 600. Pepperoni: NPR 750. BBQ Chicken: NPR 800."
        },

        // PASTA
        {
            keywords: [
                "pasta",
                "pastas"
            ],
            response:
                "Alfredo Pasta: NPR 450. Chicken Pasta: NPR 500. Spicy Arrabbiata: NPR 450."
        },

        // SANDWICH
        {
            keywords: [
                "sandwich",
                "sandwiches"
            ],
            response:
                "Chicken Sandwich: NPR 350. Club Sandwich: NPR 450. Grilled Cheese Sandwich: NPR 300."
        },

        // COFFEE
        {
            keywords: [
                "coffee",
                "coffees"
            ],
            response:
                "We serve espresso, cappuccino, latte, and iced coffee. Coffee starts from NPR 150."
        },

        // DRINKS
        {
            keywords: [
                "drink",
                "drinks",
                "beverage",
                "beverages"
            ],
            response:
                "We offer soft drinks, fresh juices, iced coffee, and other beverages starting from NPR 150."
        },

        // DESSERT
        {
            keywords: [
                "dessert",
                "desserts",
                "sweet",
                "sweets"
            ],
            response:
                "We offer chocolate cake for NPR 300, cheesecake for NPR 350, and ice cream for NPR 200."
        },

        // PRICES
        {
            keywords: [
                "price",
                "prices",
                "pricing",
                "cost",
                "costs",
                "how much"
            ],
            response:
                "Our menu prices range from NPR 150 to NPR 800. Ask me about a specific dish for its price."
        },

        // OPENING HOURS
        {
            keywords: [
                "hours",
                "hour",
                "open",
                "opening",
                "close",
                "closing"
            ],
            response:
                "We're open every day from 10:00 AM to 10:00 PM."
        },

        // LOCATION
        {
            keywords: [
                "location",
                "where",
                "address",
                "located"
            ],
            response:
                "We're located in Kathmandu, Nepal."
        },

        // RESERVATION
        {
            keywords: [
                "reservation",
                "reservations",
                "reserve",
                "book",
                "booking",
                "table"
            ],
            response:
                "Yes, we accept table reservations. Please contact us with your preferred date, time, and number of guests."
        },

        // DELIVERY
        {
            keywords: [
                "delivery",
                "deliver",
                "food delivery"
            ],
            response:
                "Yes, we offer delivery. Please contact us for availability and ordering details."
        },

        // TAKEAWAY
        {
            keywords: [
                "takeaway",
                "take away",
                "takeout",
                "take out"
            ],
            response:
                "Yes, takeaway orders are available. Contact us to place your order."
        },

        // CONTACT
        {
            keywords: [
                "contact",
                "phone",
                "call",
                "email",
                "reach"
            ],
            response:
                "You can contact us at hello@example.com or call 98XXXXXXXX."
        },

        // PAYMENT
        {
            keywords: [
                "payment",
                "payments",
                "pay",
                "card",
                "cash",
                "esewa",
                "khalti"
            ],
            response:
                "We accept cash, cards, and popular digital payment methods."
        },

        // POPULAR FOOD
        {
            keywords: [
                "popular",
                "best",
                "recommend",
                "recommendation",
                "recommended"
            ],
            response:
                "Our most popular dishes are the Classic Burger, Margherita Pizza, and Alfredo Pasta."
        },

        // VEGETARIAN
        {
            keywords: [
                "vegetarian",
                "veg",
                "vegetarian food",
                "veg food"
            ],
            response:
                "Yes, we offer vegetarian options including Margherita Pizza, Spicy Arrabbiata Pasta, and Grilled Cheese Sandwich."
        },

        // SPICY
        {
            keywords: [
                "spicy",
                "spicy food",
                "hot food"
            ],
            response:
                "For spicy food, we recommend our Spicy Arrabbiata Pasta and BBQ Chicken Pizza."
        },

        // SOCIAL MEDIA
        {
            keywords: [
                "instagram",
                "social",
                "social media",
                "facebook"
            ],
            response:
                "Our social media pages have the latest updates, offers, and food photos."
        },

        // THANK YOU
        {
            keywords: [
                "thank",
                "thanks",
                "thank you"
            ],
            response:
                "You're welcome. Let me know if you need anything else."
        }
    ],

    fallback:
        "I can help with our menu, prices, opening hours, location, reservations, delivery, payments, and contact information."
};


/* =========================================================
   SELECT ELEMENTS
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const launcher =
    document.getElementById("ai-chat-launcher");

const chatWindow =
    document.getElementById("ai-chat-window");

const closeButton =
    document.querySelector(".ai-close");

const messagesContainer =
    document.getElementById("ai-messages");

const input =
    document.getElementById("ai-input");

const sendButton =
    document.getElementById("ai-send");


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        () => {

            const open =
                navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                open
            );

        }
    );


    document
        .querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



/* =========================================================
   CHAT STATE
========================================================= */

let chatOpened = false;

let isThinking = false;



/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}



/* =========================================================
   ADD MESSAGE
========================================================= */

function addMessage(
    text,
    sender
) {

    const message =
        document.createElement("div");

    message.className =
        `ai-message ${sender}`;

    message.innerHTML =
        escapeHTML(text);

    messagesContainer.appendChild(
        message
    );

    scrollChat();

}



/* =========================================================
   SCROLL CHAT
========================================================= */

function scrollChat() {

    messagesContainer.scrollTop =
        messagesContainer.scrollHeight;

}



/* =========================================================
   THINKING / TYPING ANIMATION
========================================================= */

function showTyping() {

    hideTyping();


    const typing =
        document.createElement("div");

    typing.id =
        "ai-typing";

    typing.className =
        "typing";


    typing.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;


    messagesContainer.appendChild(
        typing
    );

    scrollChat();

}


function hideTyping() {

    const typing =
        document.getElementById(
            "ai-typing"
        );

    if (typing) {

        typing.remove();

    }

}



/* =========================================================
   GET DEMO RESPONSE
========================================================= */

function getResponse(message) {

    const text =
        message
            .toLowerCase()
            .replace(/[?!.,]/g, " ")
            .replace(/\s+/g, " ")
            .trim();


    const match =
        demoBusiness.responses.find(
            item => {

                return item.keywords.some(
                    keyword =>
                        text.includes(keyword)
                );

            }
        );


    if (match) {

        return match.response;

    }


    return demoBusiness.fallback;

}



/* =========================================================
   SEND MESSAGE
========================================================= */

function sendMessage() {

    if (isThinking) {
        return;
    }


    const message =
        input.value.trim();


    if (!message) {
        return;
    }


    addMessage(
        message,
        "user"
    );


    input.value = "";


    isThinking = true;


    input.disabled = true;

    sendButton.disabled = true;


    showTyping();


    /*
       Artificial delay makes the demo
       feel like a real AI assistant.
    */

    const delay =
        800 +
        Math.min(
            message.length * 12,
            500
        );


    setTimeout(
        () => {

            hideTyping();


            const response =
                getResponse(message);


            addMessage(
                response,
                "assistant"
            );


            isThinking = false;


            input.disabled =
                false;

            sendButton.disabled =
                false;


            input.focus();

        },
        delay
    );

}



/* =========================================================
   OPEN CHAT
========================================================= */

function openChat() {

    chatWindow.style.display =
        "flex";

    chatOpened =
        true;

    input.focus();

}



/* =========================================================
   CLOSE CHAT
========================================================= */

function closeChat() {

    chatWindow.style.display =
        "none";

    chatOpened =
        false;

}



/* =========================================================
   CHAT LAUNCHER
========================================================= */

launcher.addEventListener(
    "click",
    () => {

        if (chatOpened) {

            closeChat();

        } else {

            openChat();

        }

    }
);



/* =========================================================
   CLOSE BUTTON
========================================================= */

closeButton.addEventListener(
    "click",
    closeChat
);



/* =========================================================
   SEND BUTTON
========================================================= */

sendButton.addEventListener(
    "click",
    sendMessage
);



/* =========================================================
   ENTER TO SEND
========================================================= */

input.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();

        }

    }
);



/* =========================================================
   ESCAPE TO CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            chatOpened
        ) {

            closeChat();

        }

    }
);



/* =========================================================
   WELCOME MESSAGE
========================================================= */

addMessage(
    demoBusiness.welcome,
    "assistant"
);