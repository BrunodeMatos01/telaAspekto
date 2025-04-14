document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const menuDropdown = document.getElementById("menuDropdown");
    const menuLinks = document.querySelectorAll(".menu-dropdown a");

    // Abrir menu ao passar o mouse
    menuBtn.addEventListener("mouseenter", function () {
        menuDropdown.classList.add("show");
    });

    // Fechar ao clicar fora ou em um item do menu
    document.addEventListener("click", function (event) {
        if (!menuBtn.contains(event.target) && !menuDropdown.contains(event.target)) {
            menuDropdown.classList.remove("show");
        }
    });

    // Fechar o menu ao clicar em qualquer link dentro dele
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menuDropdown.classList.remove("show");
        });
    });
});

const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");
const slideContainer = document.querySelector("#slides");
const slides = document.querySelectorAll(".slide");
const slideCount = slides.length;
let currentIndex = 0;

// Função que move para o slide certo
function goToSlide(index) {
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
}

// Botões com loop infinito
if (nextButton && prevButton && slideContainer) {
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slideCount;
        goToSlide(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        goToSlide(currentIndex);
    });
}

// Swipe com o dedo (mobile)
if (slideContainer) {
    let startX = 0;
    let endX = 0;

    slideContainer.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX;
    });

    slideContainer.addEventListener("touchmove", function (event) {
        endX = event.touches[0].clientX;
    });

    slideContainer.addEventListener("touchend", function () {
        let difference = startX - endX;

        if (difference > 50) {
            nextButton?.click(); // Vai pro próximo
        } else if (difference < -50) {
            prevButton?.click(); // Volta pro anterior
        }
    });
}


// Função para validar e-mail
function validarEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

// Função para validar telefone
function validarTelefone(telefone) {
    let regexTelefone = /^(\d{2})9?\d{8}$/;
    return regexTelefone.test(telefone);
}

// Inicializando o EmailJS
(function() {
    if (typeof emailjs !== "undefined") {
        emailjs.init("Xy7BiQ8nwvim4-FWq"); // Substitua pelo seu User ID do EmailJS
    }
})();

// Função para enviar o e-mail
function sendMail() {
    const nome = document.getElementById("nome")?.value;
    const email = document.getElementById("email")?.value;
    const telefone = document.getElementById("telefone")?.value;
    const empresa = document.getElementById("empresa")?.value;
    const cargo = document.getElementById("cargo")?.value;
    const num_func = document.getElementById("num-func")?.value;
    const mensagem = document.getElementById("mensagem")?.value;

    if (!nome || !email || !telefone || !empresa || !cargo || !num_func || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, insira um telefone válido com DDD (Ex: 11987654321).");
        return false;
    }

    // Configura os parâmetros para o e-mail
    const templateParams = {
        nome, email, telefone, empresa, cargo, num_func, mensagem
    };

    if (typeof emailjs !== "undefined") {
        emailjs.send("service_efsze7f", "template_2q68ras", templateParams)
            .then(function(response) {
                console.log("Formulário Enviado!", response.status, response.text);
                alert("Formulário Enviado!");
            }, function(error) {
                console.log("Erro ao enviar formulário", error);
                alert("Erro ao enviar o Formulário, tente novamente.");
            });
    } else {
        alert("Erro: EmailJS não está carregado.");
    }

    return false;
}