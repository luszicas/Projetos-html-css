// Dados dos Milagres (Traduzido do seu arquivo anterior)
// Usei as mesmas URLs de imagem que você me mandou
const milagres = [
    {
        id: 1,
        image: "../img/milagre-legnica.jpg",
        title: "Milagre de Legnica",
        location: "Legnica",
        country: "Polônia",
        year: "2013",
        description: "Durante a Missa de Natal, uma hóstia caiu e apresentou sinais de sangramento. Exames revelaram tecido cardíaco humano em sofrimento. A veneração foi aprovada pelo bispo local."
    },
    {
        id: 2,
        image: "../img/milagre-sokolka.webp",
        title: "Milagre de Sokólka",
        location: "Sokólka",
        country: "Polônia",
        year: "2008",
        description: "Uma hóstia colocada em água transformou-se parcialmente em tecido miocárdico humano. Estudos científicos confirmaram a natureza do tecido. Reconhecido pela Arquidiocese de Białystok."
    },
    {
        id: 3,
        image: "../img/milagre-tixtla.png",
        title: "Milagre de Tixtla",
        location: "Tixtla",
        country: "México",
        year: "2006",
        description: "Durante uma adoração, a hóstia começou a sangrar espontaneamente. Análises confirmaram sangue humano tipo AB. O milagre foi oficialmente reconhecido em 2013."
    },
    {
        id: 4,
        image: "../img/milagre-chirattakonam.webp",
        title: "Milagre de Chirattakonam",
        location: "Chirattakonam",
        country: "Índia",
        year: "2001",
        description: "A imagem do rosto de Cristo apareceu impressa na hóstia consagrada. O Arcebispo local reconheceu o evento e declarou o local como santuário."
    },
    {
        id: 5,
        image: "../img/milagre-buenosaries.jpg",
        title: "Milagre de Buenos Aires",
        location: "Buenos Aires",
        country: "Argentina",
        year: "1996",
        description: "Sob supervisão do então Cardeal Jorge Mario Bergoglio, a hóstia transformou-se em tecido do ventrículo esquerdo humano, com sinais de sofrimento intenso."
    },
    {
        id: 6,
        image: "../img/milagre-betania.jpg",
        title: "Milagre de Betânia",
        location: "Betânia",
        country: "Venezuela",
        year: "1991",
        description: "Uma hóstia sangrou durante a Santa Missa no santuário mariano de Betânia. O bispo local confirmou o milagre após investigações científicas."
    },
    {
        id: 7,
        image: "../img/milagre-tumaco.png",
        title: "Milagre de Tumaco",
        location: "Tumaco",
        country: "Colômbia",
        year: "1906",
        description: "Diante de um tsunami iminente, o Santíssimo Sacramento foi levado em procissão até o mar, que recuou milagrosamente, salvando a cidade."
    },
    {
        id: 8,
        image: "../img/milagre-siena.jpg",
        title: "Milagre de Siena",
        location: "Siena",
        country: "Itália",
        year: "1730",
        description: "Hóstias consagradas permanecem incorruptas há quase 300 anos, sem sinais de deterioração, contrariando as leis naturais."
    },
    {
        id: 9,
        image: "../img/milagre-ludberg.jpg",
        title: "Milagre de Ludbreg",
        location: "Ludbreg",
        country: "Croácia",
        year: "1411",
        description: "O vinho consagrado transformou-se visivelmente em sangue no cálice. A relíquia é venerada com aprovação papal."
    },
    {
        id: 10,
        image: "../img/milagre-avignon.jpg",
        title: "Milagre de Avignon",
        location: "Avignon",
        country: "França",
        year: "1433",
        description: "Durante uma enchente, as águas se dividiram diante do ostensório com o Santíssimo, permitindo acesso seco ao altar."
    },
    {
        id: 11,
        image: "../img/milagre-turim.jpg",
        title: "Milagre de Turim",
        location: "Turim",
        country: "Itália",
        year: "1453",
        description: "Após um roubo, a hóstia consagrada elevou-se no ar e permaneceu suspensa até ser recolhida solenemente."
    },
    {
        id: 12,
        image: "../img/milagre-amsterdam.jpg",
        title: "Milagre de Amsterdam",
        location: "Amsterdam",
        country: "Holanda",
        year: "1345",
        description: "Uma hóstia lançada ao fogo não se queimou e foi encontrada intacta, dando origem à Procissão Silenciosa anual."
    },
    {
        id: 13,
        image: "../img/milagre-cassia.jpg",
        title: "Milagre de Cássia",
        location: "Cássia",
        country: "Itália",
        year: "1330",
        description: "Uma hóstia se transformou em sangue e manchou um breviário. A relíquia é venerada até hoje."
    },
    {
        id: 14,
        image: "../img/milagre-offida.jpg",
        title: "Milagre de Offida",
        location: "Offida",
        country: "Itália",
        year: "1273",
        description: "Tentaram destruir uma hóstia roubada, mas ela se transformou em carne visível e sangue fervente."
    },
    {
        id: 15,
        image: "../img/milagre-bolsena.jpg",
        title: "Milagre de Bolsena",
        location: "Bolsena",
        country: "Itália",
        year: "1263",
        description: "A hóstia sangrou durante a Missa, levando o Papa Urbano IV a instituir a Solenidade de Corpus Christi."
    },
    {
        id: 16,
        image: "../img/milagre-santarem.jpg",
        title: "Milagre de Santarém",
        location: "Santarém",
        country: "Portugal",
        year: "1247",
        description: "Uma hóstia roubada começou a sangrar e emitir luz intensa. A relíquia é venerada até hoje."
    },
    {
        id: 17,
        image: "../img/milagre-daroca.webp",
        title: "Milagre de Daroca",
        location: "Daroca",
        country: "Espanha",
        year: "1239",
        description: "Hóstias consagradas foram encontradas ensanguentadas após uma batalha. Reconhecidas oficialmente."
    },
    {
        id: 18,
        image: "../img/milagre-alatri.gif",
        title: "Milagre de Alatri",
        location: "Alatri",
        country: "Itália",
        year: "1228",
        description: "Uma hóstia escondida transformou-se em carne. O Papa Gregório IX reconheceu o milagre."
    },
    {
        id: 19,
        image: "../img/milagre-ferrara.jpg",
        title: "Milagre de Ferrara",
        location: "Ferrara",
        country: "Itália",
        year: "1171",
        description: "A hóstia sangrou abundantemente durante a Missa, manchando a abóbada da igreja."
    },
    {
        id: 20,
        image: "../img/milagre-lanciano.jpg",
        title: "Milagre de Lanciano",
        location: "Lanciano",
        country: "Itália",
        year: "750",
        description: "O mais antigo milagre eucarístico reconhecido. A hóstia tornou-se carne e o vinho, sangue humano tipo AB."
    }
];


// #region Cards e Renderização
let cardsVisiveis = 3;
const container = document.getElementById('miracles-container');
const btnLoadMore = document.getElementById('load-more-btn');

function criarCardHTML(milagre) {
    return `
        <article class="miracle-card">
            <div class="card-img-wrapper">
                <img src="${milagre.image}" alt="${milagre.title}">
                <div class="card-bar"></div>
            </div>
            
            <div class="card-content">
                <div class="card-meta">
                    <span class="dot"></span>
                    <span>${milagre.location}, ${milagre.country} • ${milagre.year}</span>
                </div>
                
                <h3>${milagre.title}</h3>
                
                <p>${milagre.description}</p>
                
                <div class="card-footer">
                    <span>✦ Milagre Eucarístico</span>
                </div>
            </div>
        </article>
    `;
}

function renderizarMilagres() {
    container.innerHTML = '';

    const milagresParaMostrar = milagres.slice(0, cardsVisiveis);

    milagresParaMostrar.forEach(milagre => {
        container.innerHTML += criarCardHTML(milagre);
    });

    if (cardsVisiveis >= milagres.length) {
        btnLoadMore.style.display = 'none';
    }
}

btnLoadMore.addEventListener('click', () => {
    cardsVisiveis += 3;
    renderizarMilagres();
});

renderizarMilagres();
// #endregion

// #region Navbar Toggler
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}
// #endregion

// #region Animações Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible-scroll');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-scroll');
hiddenElements.forEach((el) => observer.observe(el));
// #endregion