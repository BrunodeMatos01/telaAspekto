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

   var input = document.querySelector("#telefone");
   window.intlTelInput(input, {
       initialCountry: "br", 
       utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",  
       autoHideDialCode: false,  
       separateDialCode: true    
   });

   document.getElementById("customForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var empresa = document.getElementById("empresa").value;
    var cargo = document.getElementById("cargo").value;
    var numFunc = document.getElementById("num-func").value;
    var mensagem = document.getElementById("mensagem").value;

    var texto = `*Formulário de Contato*\n\n`;
    texto += `*Nome:* ${nome}\n`;
    texto += `*Email:* ${email}\n`;
    texto += `*Telefone:* ${telefone}\n`;
    texto += `*Empresa:* ${empresa}\n`;
    texto += `*Cargo:* ${cargo}\n`;
    texto += `*Número de Funcionários:* ${numFunc}\n`;
    texto += `*Mensagem:* ${mensagem}`;

    var numeroWhatsApp = "5547988525262";  

    var url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
});