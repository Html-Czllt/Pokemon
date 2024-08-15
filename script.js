document.querySelector('.message h1').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.content').offsetTop,
        behavior: 'smooth'
    });
    localStorage.setItem('visited', 'true'); // Marca como visitado após o clique
});

// Função para adicionar ou remover a classe 'visible' com base na rolagem
function checkVisibility() {
    const sections = document.querySelectorAll('.features, .additional, .final');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardVisibilityThreshold = windowHeight * 0.75;

        if (cardTop < cardVisibilityThreshold) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 300); // Delay para cada card aparecer um pouco depois do anterior
        } else {
            card.classList.remove('visible');
        }
    });
}

// Adiciona ou remove visibilidade ao rolar
window.addEventListener('scroll', checkVisibility);

// Verifica visibilidade na carga da página
window.addEventListener('load', () => {
    if (localStorage.getItem('visited') === 'true') {
        localStorage.removeItem('visited');
        checkVisibility();
    }
});
