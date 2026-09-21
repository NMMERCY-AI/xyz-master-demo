/* =========================================================
   XYZ MASTER DEMO
   Frontend-only
========================================================= */


/* =========================================================
   DEMO BUSINESS DATA
========================================================= */

const demoBusiness = {

    name: "XYZ",

    welcome:
        "Hello! Welcome to XYZ. 👋 How can I help you today?",

    responses: [

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
                "Hello! 👋 Great to meet you. What would you like to know about XYZ?"
        },


        {
            keywords: [
                "service",
                "services",
                "offer",
                "offers",
                "what do you do"
            ],

            response:
                "XYZ provides modern digital experiences, smart customer support, and growth-focused solutions for businesses."
        },


        {
            keywords: [
                "price",
                "pricing",
                "cost",
                "costs",
                "how much"
            ],

            response:
                "Our pricing depends on the project and features you need. Contact our team and we'll help you find the right solution."
        },


        {
            keywords: [
                "hour",
                "hours",
                "open",
                "opening",
                "close",
                "closing"
            ],

            response:
                "Our demo business is available every day from 10:00 AM to 10:00 PM."
        },


        {
            keywords: [
                "contact",
                "email",
                "phone",
                "call",
                "reach"
            ],

            response:
                "You can contact our team at hello@example.com. We'd be happy to discuss your project."
        },


        {
            keywords: [
                "location",
                "where",
                "address"
            ],

            response:
                "XYZ is based in Kathmandu, Nepal. This is a demo location that can be replaced with a client's real location later."
        },


        {
            keywords: [
                "website",
                "web",
                "website design"
            ],

            response:
                "Yes. We create modern, responsive websites designed around your brand and your customers."
        },


        {
            keywords: [
                "ai",
                "chatbot",
                "assistant"
            ],

            response:
                "Yes! This chat widget can work as a smart customer-support assistant that answers questions and guides visitors."
        }

    ],


    fallback:
        "I'm here to help with questions about XYZ, including our services, pricing, opening hours, location, and contact information. What would you like to know?"
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