const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const textStart = document.querySelector('#text-start');
const audioStart = new Audio('./audio/theme.mp3');
const audioGameOver = new Audio('./audio/gameover.mp3');
const scoreElement = document.querySelector('#score');
let score= 0;

function start() {
    textStart.style.color = "#ececec";
    pipe.classList.add('pipe-animation');
    cloud.classList.add('cloud-animation'); 
    audioStart.play();        
}

document.addEventListener('keydown', (event) => {
    if (event.code === "Space") {
        start();
    }
    
});

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump')
}, 500)
}


function stopAudioStart() {
    audioStart.pause();
}

function stopAudio() {
    audioGameOver.pause();
}

document.addEventListener('keydown', () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
});
const loop = setInterval(() => {
    let cloudPositiom = cloud.offsetLeft;
    let pipePosition = pipe.offsetLeft;
    let marioPosition= +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;;
    cloud.style.animation = 'none';
    cloud.style.left = `${cloudPositiom}px`;;
    mario.style.animation = 'none';
    mario.style.butom = `${marioPosition}px`;;
    mario.src = './imagens/game-over.png';
mario.style.width = '70px'
mario.style.marginLeft = '20px'

textStart.style.color = "black";
textStart.innerHTML = "<strong>GAME OVER</strong>";
stopAudioStart();

audioGameOver.play();
setTimeout(stopAudio, 8080);
setTimeout(function(){
    location.reload();

}, 9000);

    }
    else if (pipePosition <= -50) {
        
        score++;
        scoreElement.textContent = score;
    }
    
},10);

