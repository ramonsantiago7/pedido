const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');

noBtn.addEventListener('mouseover', function() {
    // Tamanho máximo da área onde o botão pode se mover
    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    // Gera novas posições aleatórias para o botão "Não"
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Atualiza a posição do botão "Não"
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});