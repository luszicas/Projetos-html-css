/* ======================================================
   ARQUIVO: menu.js
   Responsável: Menu Mobile e Scroll Suave
   ====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU MOBILE ---
    const navMenu = document.querySelector('.nav-menu');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navContainer = document.querySelector('.nav-container');

    // Função para abrir/fechar
    function toggleMenu() {
        if (navMenu && menuIcon) {
            navMenu.classList.toggle('active');
            menuIcon.classList.toggle('active');
        }
    }

    // Clique no ícone hambúrguer
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    // Fechar ao clicar nos links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fechar ao clicar fora do menu
    document.addEventListener('click', (event) => {
        if (navContainer && navMenu) {
            const isClickInside = navContainer.contains(event.target);
            // Se o clique não foi dentro da navbar e o menu está aberto
            if (!isClickInside && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    // --- LÓGICA DO SCROLL SUAVE ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Só executa se o href não for apenas "#"
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});



// Verifica se o navegador suporta a animação
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Adiciona a classe que faz subir
        }
    });
});

// Seleciona todos os elementos que tem a classe .reveal
// Agora ele vigia quem tem .reveal, .reveal-left OU .reveal-right
const hiddenElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
hiddenElements.forEach((el) => observer.observe(el));