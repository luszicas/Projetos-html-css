const hamburger = document.querySelector(".menu-hamburger");
const nav = document.querySelector(".nav");

// Verifica se os elementos existem na página antes de tentar usar
if (hamburger && nav) {
    
    // Evento de abrir/fechar ao clicar no ícone
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Evento de fechar ao clicar em algum link do menu
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        nav.classList.remove("active");
    }));
}