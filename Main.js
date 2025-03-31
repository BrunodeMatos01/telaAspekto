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

document.getElementById("customForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário se houver erro

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let empresa = document.getElementById("empresa").value.trim();
    let cargo = document.getElementById("cargo").value;
    let numFunc = document.getElementById("num-func").value;
    let mensagem = document.getElementById("mensagem").value.trim();
    
    // Validação do e-mail
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Validação do telefone (apenas números e formato correto)
    let regexTelefone = /^(\d{2})9?\d{8}$/; // Exemplo válido: 11987654321
    if (!regexTelefone.test(telefone)) {
        alert("Por favor, insira um telefone válido com DDD (Ex: +55(11)987654321).");
        return;
    }

    // Inicializar o EmailJS (lembre-se de substituir pelo seu public key)
    emailjs.init('Xy7BiQ8nwvim4-FWq');  // Substitua pela sua chave pública

    // Dados do template para enviar ao email
    let templateParams = {
        nome: nome,
        email: email,
        telefone: telefone,
        empresa: empresa,
        cargo: cargo,
        num_func: numFunc,
        mensagem: mensagem,
    };

    // Envia o email usando o EmailJS
    emailjs.send('service_efsze7f', 'template_2q68ras', templateParams)
        .then(function(response) {
            // Se tudo estiver certo, alerta o usuário que a mensagem foi enviada
            alert('Mensagem enviada com sucesso!');
        }, function(error) {
            // Caso haja erro no envio
            alert('Falha no envio. Tente novamente.');
        });
});
