function showMessage() {
  document.getElementById("message").classList.add("show");
}

// Floating hearts
const hearts = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.position = 'fixed';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
  heart.style.animation = 'float 5s linear';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 300);

const style = document.createElement('style');
style.innerHTML = `
@keyframes float {
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
`;

document.head.appendChild(style);
