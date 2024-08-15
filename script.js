document.querySelector('.message h1').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.features').offsetTop,
        behavior: 'smooth'
    });
    localStorage.setItem('visited', 'true'); // Marca como visitado após o clique
});

// Função para adicionar ou remover a classe 'visible' com base na rolagem
function checkVisibility() {
    const sections = document.querySelectorAll('.features, .additional, .final');
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;

    // Verifica visibilidade das seções
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // Verifica visibilidade dos cards
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;
        const cardVisibilityThreshold = windowHeight * 0.75;

        if (cardTop < cardVisibilityThreshold && (cardTop + cardHeight) > 0) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 300); // Delay para cada card aparecer um pouco depois do anterior
        } else {
            card.classList.remove('visible');
        }
    });
}

// Função para mostrar ou esconder o botão de rolar para o topo
function handleScroll() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > window.innerHeight / 2) { // Aparece a partir da Seção 2
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
}

// Adiciona ou remove visibilidade ao rolar
window.addEventListener('scroll', () => {
    checkVisibility();
    handleScroll(); // Atualiza a visibilidade do botão de rolar para o topo
});

// Verifica visibilidade na carga da página
window.addEventListener('load', () => {
    if (localStorage.getItem('visited') === 'true') {
        localStorage.removeItem('visited');
        checkVisibility();
    }
});

// Função para rolar suavemente até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Adiciona o evento de clique no botão
document.getElementById('scrollToTop').addEventListener('click', (e) => {
    e.preventDefault();
    scrollToTop();
});
