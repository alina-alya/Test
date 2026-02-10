const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const title = document.getElementById('title');
const text = document.getElementById('text');

noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener('click', () => {
    title.textContent = 'Yeeeiiii';
    text.textContent = 'Happy Valentine`s day';
    noBtn.remove();
    yesBtn.remove();
});