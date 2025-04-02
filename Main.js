document.addEventListener("DOMContentLoaded", function () {
    // Menu Suspenso
    const menuToggle = document.querySelector(".menu-btn");
    const menu = document.getElementById("menuDropdown");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();
            menu.style.display = (menu.style.display === "block") ? "none" : "block";
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
                menu.style.display = "none";
            }
        });
    }

    // Slides
    const slides = document.getElementById("slides");
    if (slides) {
        let startX = 0;
        let endX = 0;

        slides.addEventListener("touchstart", function (event) {
            startX = event.touches[0].clientX;
        });

        slides.addEventListener("touchmove", function (event) {
            endX = event.touches[0].clientX;
        });

        slides.addEventListener("touchend", function () {
            let difference = startX - endX;
            if (difference > 50) {
                document.getElementById("next")?.click();
            } else if (difference < -50) {
                document.getElementById("prev")?.click();
            }
        });
    }

    // Navegação nos slides
    const slideElements = document.querySelectorAll(".slide");
    if (slideElements.length > 0) {
        let currentIndex = 0;
        const slideCount = slideElements.length;
        const slidesContainer = document.querySelector("#slides");

        document.querySelector("#next")?.addEventListener("click", () => {
            if (currentIndex < slideCount - 1) {
                currentIndex++;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        });

        document.querySelector("#prev")?.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            }
        });
    }

    // EmailJS
    if (typeof emailjs !== "undefined") {
        emailjs.init("Xy7BiQ8nwvim4-FWq");
    }

    // Envio de Formulário
    window.sendMail = function () {
        const nome = document.getElementById("nome")?.value;
        const email = document.getElementById("email")?.value;
        const telefone = document.getElementById("telefone")?.value;
        const empresa = document.getElementById("empresa")?.value;
        const cargo = document.getElementById("cargo")?.value;
        const num_func = document.getElementById("num-func")?.value;
        const mensagem = document.getElementById("mensagem")?.value;

        if (!validarEmail(email)) {
            alert("Por favor, insira um e-mail válido.");
            return false;
        }

        if (!validarTelefone(telefone)) {
            alert("Por favor, insira um telefone válido com DDD (Ex: (11)987654321).");
            return false;
        }

        const templateParams = { nome, email, telefone, empresa, cargo, num_func, mensagem };

        emailjs.send("service_efsze7f", "template_2q68ras", templateParams)
            .then(function (response) {
                console.log("Formulário Enviado!", response.status, response.text);
                alert("Formulário Enviado!");
            }, function (error) {
                console.log("Erro ao enviar formulário", error);
                alert("Erro ao enviar o Formulário, tente novamente.");
            });

        return false;
    };
});

// Funções de validação
function validarEmail(email) {
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}

function validarTelefone(telefone) {
    let regexTelefone = /^(\d{2})9?\d{8}$/;
    return regexTelefone.test(telefone);
}
