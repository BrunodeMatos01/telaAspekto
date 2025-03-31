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

    // Se tudo estiver correto, monta a mensagem e envia para o WhatsApp
    let telefoneDestino = "55SEUNUMERO"; // Substitua pelo seu número com DDD
    let texto = `Olá!%0A%0A*Nome:* ${nome}%0A*E-mail:* ${email}%0A*Telefone:* ${telefone}%0A*Empresa:* ${empresa}%0A*Cargo:* ${cargo}%0A*Número de Funcionários:* ${numFunc}%0A*Mensagem:* ${mensagem}`;
    let url = `https://api.whatsapp.com/send?phone=${telefoneDestino}&text=${texto}`;

    window.open(url, "_blank");
});