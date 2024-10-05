
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector('.pop-text');
  textElement.addEventListener('animationend', (event) => {
      if (event.animationName === 'landAnimation') {
          textElement.style.animation = 'flyAwayAnimation 5s ease forwards';
      }
  });
});

const bm = document.querySelector('#bubble_machine'), bubble_rate = 600;

function addBubble() {
  var b = document.createElement('div');
  b.className = 'bubble';
  b.style.width = (Math.random() * 100) + 28 + 'px';
  b.style.left = Math.random() * 100 + '%';
  b.style.animationDuration = Math.floor(Math.random() * 10) + 8 + 's';

  b.onclick = function() {
    this.classList.add('pop_bubble');
    var pop = new Audio('sound/pop-sound.mp3');
    pop.volume=0.3;
    pop.play();
  }

  b.onanimationend = function() {
    this.remove();
  }

  bm.appendChild(b);
  setTimeout(addBubble, bubble_rate);
}

addBubble();
