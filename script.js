let board = document.querySelector('.board');
let color = 'black';
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
  let square = document.createElement('div');
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = color;
  });
  board.insertAdjacentElement('beforeend', square);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
