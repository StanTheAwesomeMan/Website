const colors = [
  'var(--flamingo)', 'var(--pink)', 'var(--mauve)', 'var(--red)',
  'var(--maroon)', 'var(--peach)', 'var(--yellow)', 'var(--green)',
  'var(--teal)', 'var(--sky)', 'var(--sapphire)', 'var(--blue)',
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