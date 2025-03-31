emailjs.init('YOUR_USER_ID');   

const slides = document.querySelector("#slides");
const slideCount = document.querySelectorAll(".slide").length;
let currentIndex = 0;

document.querySelector("#next").addEventListener("click", () => {
    if (currentIndex < slideCount - 1) {
        currentIndex++;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});
    // Validação do e-mail
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação do telefone
    let regexTelefone = /^(\d{2})9?\d{8}$/;
    if (!regexTelefone.test(telefone)) {
        alert("Por favor, insira um telefone válido com DDD (Ex: +55(11)987654321).");
        return;
    }

   function sendMail() {
    let templateParams = {
        nome : document.getElementById('nome').value,
        email : document.getElementById('email').value,
        telefone : document.getElementById('telefone').value,
        empresa : document.getElementById('empresa').value,
        cargo : document.getElementById('cargo').value,
        num_func : document.getElementById('num-func').value,
        mensagem : document.getElementById('mensagem').value,
    }
   }

    emailjs.send('service_efsze7f', 'template_2q68ras', templateParams)
        .then(function (response) {
            console.log('Email enviado com sucesso!', response);
            alert("E-mail enviado com sucesso!");
        }, function (error) {
            console.log('Falha no envio do e-mail', error);
            alert("Houve um erro ao enviar o e-mail. Tente novamente mais tarde.");
        });
});

