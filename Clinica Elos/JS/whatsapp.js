/* ======================================================
   ARQUIVO: whatsapp.js
   Responsável: Enviar formulário e Botões para o WhatsApp
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // NÚMERO DA CLÍNICA (Configure aqui para mudar no site todo)
    const whatsappNumber = "5511996393106"; 

    /* ======================================================
       1. BOTÃO "VAMOS CONVERSAR" (HERO SECTION)
       ====================================================== */
    const heroBtn = document.getElementById('btn-hero-whatsapp');

    if (heroBtn) {
        heroBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita pular para o topo da página

            // Mensagem padrão ao clicar no botão
            const message = "Olá! Gostaria de agendar uma consulta.";
            
            // Cria o link e abre
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    /* ======================================================
       2. FORMULÁRIO DE CONTATO
       ====================================================== */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Captura os dados
            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');
            
            const name = nameInput.value;
            const userMessage = messageInput.value;

            if (!name || !userMessage) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            // Monta a mensagem personalizada do formulário
            const fullMessage = `Olá, Clínica Elos!\nMeu nome é ${name}.Gostaria de falar sobre: ${userMessage}`;

            const encodedMessage = encodeURIComponent(fullMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            contactForm.reset();
        });
    }
});