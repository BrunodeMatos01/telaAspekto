function toggleMenu() {
    var menu = document.getElementById("menuDropdown");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
    document.getElementById("menuDropdown").style.display = "none";
}

document.addEventListener("click", function(event) {
    var menu = document.getElementById("menuDropdown");
    var button = document.querySelector(".menu-btn");
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.getElementById("slides");
    let startX = 0;
    let endX = 0;

    slides.addEventListener("touchstart", function (event) {
        startX = event.touches[0].clientX; // Captura a posição inicial do toque
    });

    slides.addEventListener("touchmove", function (event) {
        endX = event.touches[0].clientX; // Atualiza a posição conforme o dedo se move
    });

    slides.addEventListener("touchend", function () {
        let difference = startX - endX;
        
        if (difference > 50) {
            // Deslizou para a esquerda (próximo slide)
            document.getElementById("next").click();
        } else if (difference < -50) {
            // Deslizou para a direita (slide anterior)
            document.getElementById("prev").click();
        }
    });
});

const slides = document.querySelector("#slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

document.querySelector("#next").addEventListener("click", () => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

document.querySelector("#prev").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

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
    emailjs.init("Xy7BiQ8nwvim4-FWq"); // Substitua pelo seu User ID do EmailJS
})();

// Função para enviar o e-mail
function sendMail() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const empresa = document.getElementById("empresa").value;
    const cargo = document.getElementById("cargo").value;
    const num_func = document.getElementById("num-func").value;
    const mensagem = document.getElementById("mensagem").value;

    // Validações
    if (!validarEmail(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert("Por favor, insira um telefone válido com DDD (Ex: (11)987654321).");
        return false;
    }

    // Configura os parâmetros para o e-mail
    const templateParams = {
        nome: nome,
        email: email,
        telefone: telefone,
        empresa: empresa,
        cargo: cargo,
        num_func: num_func,
        mensagem: mensagem,
    };

    // Enviando o e-mail via EmailJS
    emailjs.send("service_efsze7f", "template_2q68ras", templateParams)
        .then(function(response) {
            console.log("Formulário Enviado!", response.status, response.text);
            alert("Formulário Enviado!");
        }, function(error) {
            console.log("Erro ao enviar formulário", error);
            alert("Erro ao enviar o Formulário, tente novamente.");
        });

    // Evita o comportamento padrão do formulário
    return false;
}





