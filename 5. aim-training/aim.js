const startBtn = document.querySelector('#start'),
      screens = document.querySelectorAll('.screen'),
      timeList = document.querySelector('#time-list'),
      timeEl = document.querySelector('#time'),
      board = document.querySelector('#board'),
      colors = ['#8A2BE2', '#66FFFF', '#FFE4C4', '#DC143C', '#FFD700'];

let time = 0, score = 0;

startBtn.addEventListener('click', event => {
    event.preventDefault();
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = +event.target.getAttribute('data-time');
        screens[1].classList.add('up');

        startGame();
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `${value} seconds left`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;    
}

function createRandomCircle() {
    const circle = document.createElement('div'),
          size = getRandomNumber(10, 60),
          { width, height } = board.getBoundingClientRect(),
          x = getRandomNumber(0, width - size),
          y = getRandomNumber(0, height - size);  

    circle.classList.add('circle');
    circle.style.background = getRandomColor();
    circle.style.width = size + 'px';
    circle.style.height = size + 'px';
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// function winTheGame() {
//     function kill() {
//         const circle = document.querySelector('.circle');

//         if (circle) 
//          circle.click();
//     }

//     setInterval(kill, 42);
// }