document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const clearFiltersBtn = document.getElementById('clearFilters');
    const propertyCards = document.querySelectorAll('.property-card');
    const noResults = document.getElementById('noResults');
    
    let activeFilters = [];
    let searchTerm = '';
    
    // Função segura para normalizar texto (evita erros se o texto for vazio)
    function normalizeText(text) {
        if (!text) return ''; 
        return text.toString()
                   .normalize('NFD')
                   .replace(/[\u0300-\u036f]/g, "")
                   .toLowerCase()
                   .trim();
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchTerm = normalizeText(e.target.value);
            filterProperties();
        });
    }
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                activeFilters = activeFilters.filter(f => f !== filter);
            } else {
                this.classList.add('active');
                activeFilters.push(filter);
            }
            
            filterProperties();
        });
    });
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            searchTerm = '';
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            activeFilters = [];
            
            filterProperties();
        });
    }
    
    function filterProperties() {
        let visibleCount = 0;
        
        propertyCards.forEach(card => {
            // Busca dados com segurança (se não existir, usa string vazia)
            const locationAttr = card.getAttribute('data-location') || '';
            const featuresAttr = card.getAttribute('data-features') || '';
            
            // Tenta achar o título de várias formas
            let titleText = '';
            const titleEl = card.querySelector('.property-title') || card.querySelector('h3');
            if (titleEl) titleText = titleEl.innerText || titleEl.textContent;
            
            // Cria texto buscável combinando Local + Título
            const searchableText = normalizeText(locationAttr + ' ' + titleText);
            
            // Cria lista de features
            const features = featuresAttr.split(',').map(f => f.trim());
            
            let matchesSearch = true;
            let matchesFilters = true;
            
            // Lógica de Busca
            if (searchTerm !== '') {
                matchesSearch = searchableText.includes(searchTerm);
            }
            
            // Lógica de Filtro
            if (activeFilters.length > 0) {
                matchesFilters = activeFilters.every(filter => features.includes(filter));
            }
            
            // Aplica visibilidade
            if (matchesSearch && matchesFilters) {
                card.style.display = 'block';
                visibleCount++;
                // Pequeno delay para animação funcionar
                requestAnimationFrame(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                });
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    // Só esconde display:none depois da animação acabar
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // Controle da mensagem "Nenhum resultado"
        if (noResults) {
            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }
    }
    
    // Inicializa estilos de transição
    propertyCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.display = 'block'; // Garante que começam visíveis
        card.style.opacity = '1';
    });
});