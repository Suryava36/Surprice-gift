// 💌 Unlock Site
function enterSite() {
  document.getElementById('intro-screen').style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
  playMusic();
  generateHearts();
  startSlideshow();
}

// 🎶 Music Controls
let musicPlaying = true;
const bgMusic = document.getElementById('bg-music');

function playMusic() {
  bgMusic.play().catch(() => {
    // auto-play might be blocked
  });
}

function toggleMusic() {
  if (musicPlaying) {
    bgMusic.pause();
    document.getElementById('music-btn').innerText = "🔇";
  } else {
    bgMusic.play();
    document.getElementById('music-btn').innerText = "🔊";
  }
  musicPlaying = !musicPlaying;
}

// 🖼️ Slideshow
function startSlideshow() {
  const container = document.getElementById('slideshow');
  for (let i = 1; i <= 25; i++) {
    const img = document.createElement('img');
    img.src = `photos/${i}.jpg`;
    if (i === 1) img.classList.add('active');
    container.appendChild(img);
  }

  let index = 0;
  const images = container.querySelectorAll('img');
  setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }, 3000); // change every 3 sec
}

// ❤️ Floating Hearts
function generateHearts() {
  const hearts = document.querySelector('.hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
}
// 🎉 Confetti