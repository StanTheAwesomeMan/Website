const colors = [
  'var(--flamingo)',
  'var(--pink)',
  'var(--mauve)',
  'var(--red)',
  'var(--maroon)',
  'var(--peach)',
  'var(--yellow)',
  'var(--green)',
  'var(--teal)',
  'var(--sky)',
  'var(--sapphire)',
  'var(--blue)',
  'var(--lavender)'
];

const text = document.getElementById('loremipsum');
let currentColorIndex = 0;

function changeColor() {
  let nextColorIndex;
  do {
    nextColorIndex = Math.floor(Math.random() * colors.length);
  } while (nextColorIndex === currentColorIndex);

  text.style.color = colors[nextColorIndex];
  currentColorIndex = nextColorIndex;
}

// Initial color
text.style.color = colors[currentColorIndex];

// Change color
setInterval(changeColor, 1000);

// Show site
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a.nav');
  const sites = document.querySelectorAll('.site');

  function showSite(id) {
    sites.forEach(site => site.classList.remove('active'));
    document.querySelector(id).classList.add('active');
  }

  links.forEach(link => link.addEventListener('click', function(e) {
    e.preventDefault();
    showSite(this.getAttribute('href'));
  }));

  showSite('#home');
});

// Randomize images
document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('imageTable');
  const tableImages = table.getElementsByTagName('img');
  const sectionImages = document.querySelectorAll('.site .img');

  // Simple seeded random number generator
  function seededRandom(seed) {
    return Math.sin(seed) * 10000 - Math.floor(Math.sin(seed) * 10000);
  }

  // Use current date as seed
  const seed = new Date().getMilliseconds();

  // Generate random seeds and update images
  for (let i = 0; i < tableImages.length; i++) {
    const randomSeed = Math.floor(seededRandom(seed + i) * 1000);
    const imageUrl = `https://picsum.photos/seed/${randomSeed}/700/400`;

    tableImages[i].src = imageUrl;
    sectionImages[i] && (sectionImages[i].src = imageUrl);
  }
});
