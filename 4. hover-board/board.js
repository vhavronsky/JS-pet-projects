const board = document.querySelector('#board'),
      colors = ['#8A2BE2', '#66FFFF', '#FFE4C4', '#DC143C', '#FFD700'],
      CIRCLES_NUMBER = 500;

for (let i = 0; i < CIRCLES_NUMBER; i++) {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    
    circle.addEventListener('mouseover', setColor);
    circle.addEventListener('mouseleave', removeColor);

    board.append(circle);
}

function setColor(event) {
    const element = event.target;

    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
    const element = event.target;

    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px black';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}