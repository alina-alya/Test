document.addEventListener('DOMContentLoaded', () => {
  const screens = {
    s1: document.getElementById('screen-1'),
    s2: document.getElementById('screen-2'),
    s3: document.getElementById('screen-3'),
    final: document.getElementById('screen-final')
  };

  const btnYesLarge = document.getElementById('yes-large');
  const btnNoSmall = document.getElementById('no-small');
  const screen2Yes = document.getElementById('screen2-yes');
  const screen2No = document.getElementById('screen2-no');
  const confirmPlan = document.getElementById('confirm-plan');
  const popup = document.getElementById('popup');
  const forcePlanA = document.getElementById('force-planA');

  const video = document.querySelector('.video-wrap video');
  const finalAudio = document.getElementById('final-audio');

  function showScreen(el){
    Object.values(screens).forEach(s => s.removeAttribute('data-active'));
    el.setAttribute('data-active','');
    popup.classList.add('hidden');

    // Автоплей відео на екрані 2
    if(el === screens.s2 && video){
      video.play().catch(() => console.log("Автоплей відео заблоковано"));
    } else if(video) {
      video.pause();
      video.currentTime = 0;
    }

    // Автоплей аудіо на фінальному екрані
    if(el === screens.final && finalAudio){
      finalAudio.currentTime = 0;
      finalAudio.play().catch(() => console.log("Автоплей аудіо заблоковано"));
    } else if(finalAudio){
      finalAudio.pause();
      finalAudio.currentTime = 0;
    }
  }

  // -------------------
  // Screen 1
  // -------------------
  btnNoSmall.addEventListener('click', () => showScreen(screens.s2));
  btnYesLarge.addEventListener('click', () => showScreen(screens.final));

  // -------------------
  // Screen 2
  // -------------------
  screen2Yes.style.transition = 'transform 0.25s ease';

screen2Yes.addEventListener('mouseenter', () => {
  const card = screen2Yes.closest('.card');
  const maxMoveX = card.offsetWidth * 0.25;  // максимум 25% ширини картки
  const maxMoveY = card.offsetHeight * 0.2;  // максимум 20% висоти картки
  const x = (Math.random() * maxMoveX) - maxMoveX / 2;
  const y = (Math.random() * maxMoveY) - maxMoveY / 2;
  screen2Yes.style.transform = `translate(${x}px, ${y}px) scale(0.6)`;
});

screen2Yes.addEventListener('mouseleave', () => {
  screen2Yes.style.transform = 'scale(0.6) translate(0,0)';
});
  screen2No.addEventListener('click', () => showScreen(screens.s3));

  // -------------------
  // Screen 3
  // -------------------
  confirmPlan.addEventListener('click', () => {
    const chosen = document.querySelector('input[name="plan"]:checked').value;
    if(chosen==='B'){ popup.classList.remove('hidden'); }
    else{ showScreen(screens.final); }
  });

  forcePlanA.addEventListener('click', () => showScreen(screens.final));

  // -------------------
  // Keyboard
  // -------------------
  document.addEventListener('keydown', (e) => { if(e.key==='Escape') showScreen(screens.s1); });
});