document.addEventListener("DOMContentLoaded", function() {
    
    // Configurações: O elemento aparece quando 10% dele estiver na tela
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                // Lógica 1: Se for o estilo "fade-in-section"
                if (entry.target.classList.contains('fade-in-section')) {
                    entry.target.classList.add('is-visible');
                }

                // Lógica 2: Se for o estilo "reveal-on-scroll" (novo CSS)
                if (entry.target.classList.contains('reveal-on-scroll')) {
                    entry.target.classList.add('visible');
                }

                // Para de observar após animar
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleciona TODOS os elementos com qualquer uma das classes
    const elements = document.querySelectorAll('.fade-in-section, .reveal-on-scroll');
    
    // Começa a vigiar
    elements.forEach(el => {
        observer.observe(el);
    });
});