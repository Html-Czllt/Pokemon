// scripts.ts

// Função para inicializar o slider de treinadores
function initializeTrainersSlider() {
    const slider = document.querySelector('.trainers-slider') as HTMLElement;

    // Simulando dados para o slider
    const trainers = [
        'Ash Ketchum', 
        'Misty', 
        'Brock', 
        'Paul', 
        'Clemont'
    ];

    // Adicionando os itens ao slider
    trainers.forEach(trainer => {
        const trainerDiv = document.createElement('div');
        trainerDiv.classList.add('trainer-item');
        trainerDiv.innerHTML = `<p>${trainer}</p>`;
        slider.appendChild(trainerDiv);
    });
}

// Inicializa o slider quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    initializeTrainersSlider();
});
