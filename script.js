/* =========================================================
   XYZ MASTER DEMO
   Frontend-only
========================================================= */


const demoBusiness = {
    name: "XYZ Cafe & Restaurant",

    welcome:
        "Hello! 👋 Welcome to XYZ Cafe & Restaurant. How can I help you today?",

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
                "Hello! 👋 Welcome to XYZ Cafe & Restaurant. What would you like to know?"
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
                "Our menu includes burgers, pizzas, pasta, sandwiches, coffee, drinks, and desserts. 🍕🍔☕ Would you like to know about a specific item?"
        },

        // BURGER
        {
            keywords: [
                "burger",
                "burgers"
            ],
            response:
                "Our burgers start at NPR 350. Popular options include the Classic Burger (NPR 350), Cheese Burger (NPR 400), and Double Beef Burger (NPR 500). 🍔"
        },

        // PIZZA
        {
            keywords: [
                "pizza",
                "pizzas"
            ],
            response:
                "Our pizzas start at NPR 600. Popular choices include Margherita (NPR 600), Pepperoni (NPR 750), and BBQ Chicken (NPR 800). 🍕"
        },

        // PASTA
        {
            keywords: [
                "pasta",
                "pastas"
            ],
            response:
                "We offer Alfredo Pasta (NPR 450), Chicken Pasta (NPR 500), and Spicy Arrabbiata (NPR 450). 🍝"
        },

        // SANDWICH
        {
            keywords: [
                "sandwich",
                "sandwiches"
            ],
            response:
                "Our sandwiches start at NPR 300. Popular choices include Chicken Sandwich (NPR 350), Club Sandwich (NPR 450), and Grilled Cheese Sandwich (NPR 300). 🥪"
        },

        // COFFEE & DRINKS
        {
            keywords: [
                "coffee",
                "drink",
                "drinks",
                "beverage",
                "beverages"
            ],
            response:
                "We serve espresso, cappuccino, latte, iced coffee, soft drinks, and fresh juices. Drinks start from NPR 150. ☕🥤"
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
                "Our desserts include chocolate cake (NPR 300), cheesecake (NPR 350), and ice cream (NPR 200). 🍰🍨"
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
                "Our menu items start from around NPR 150, with most main dishes priced between NPR 300 and NPR 800. Ask me about any specific item and I'll tell you the price."
        },

        // OPENING HOURS
        {
            keywords: [
                "hours",
                "hour",
                "open",
                "opening",
                "close",
                "closing",
                "when are you open"
            ],
            response:
                "We're open every day from 10:00 AM to 10:00 PM. 🕐"
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
                "We're located in Kathmandu, Nepal. 📍 You can visit us anytime during our opening hours."
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
                "Yes, we accept table reservations. Please contact our team with your preferred date, time, and number of guests. 🪑"
        },

        // DELIVERY
        {
            keywords: [
                "delivery",
                "deliver",
                "delivering",
                "food delivery"
            ],
            response:
                "Yes, delivery is available. 🛵 Please contact us for delivery availability and ordering details."
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
                "Yes, takeaway orders are available. You can contact us to place your order and arrange a pickup time. 🥡"
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
                "You can contact us at hello@example.com or call us at 98XXXXXXXX. We'd be happy to help! 📞"
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
                "We accept cash, major cards, and popular digital payment methods. 💳"
        },

        // POPULAR FOOD
        {
            keywords: [
                "popular",
                "best",
                "recommend",
                "recommendation",
                "recommended",
                "best food"
            ],
            response:
                "Some of our popular choices are the Classic Burger 🍔, Margherita Pizza 🍕, and Alfredo Pasta 🍝."
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
                "Yes! We have several vegetarian options, including Margherita Pizza, Spicy Arrabbiata Pasta, Grilled Cheese Sandwich, salads, and desserts. 🥗"
        },

        // SPICY FOOD
        {
            keywords: [
                "spicy",
                "spicy food",
                "hot food"
            ],
            response:
                "If you like spicy food, we recommend our Spicy Arrabbiata Pasta and BBQ Chicken Pizza. 🌶️"
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
                "You can find XYZ Cafe & Restaurant on our social media pages for the latest updates, offers, and food photos. 📱"
        },

        // THANK YOU
        {
            keywords: [
                "thank",
                "thanks",
                "thank you"
            ],
            response:
                "You're very welcome! 😊 Let me know if there's anything else I can help you with."
        }
    ],

    // FALLBACK
    fallback:
        "I'm happy to help! You can ask me about our menu, prices, opening hours, location, reservations, delivery, takeaway, or contact information."
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