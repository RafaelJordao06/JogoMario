const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const flag = document.querySelector('.flag');
const gram = document.querySelector('.gram1');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const flagPosition = flag.offsetLeft;
    const marioPositionLeft = mario.offsetLeft;
    const gramPositionLeft = gram.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        flag.style.animation = 'none';
        flag.style.left = `${flagPosition}px`;
        gram.style.left = `${gramPositionLeft}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imagens/game-over.png'
        mario.style.width = '80px'
        mario.style.marginLeft = ' 35px'
        clearInterval(loop);
    }else if (marioPositionLeft == 0 && flagPosition <= 30){
            flag.style.animation = 'none';
            flag.style.left = `${flagPosition}px`;
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
            gram.style.left = `${gramPositionLeft}px`;
            mario.src = './imagens/end.gif'
            mario.style.width = '210px'
            mario.style.bottom = '-6%'
            mario.style.left = '-15px'
            clearInterval(loop);        
    }
},10);

document.addEventListener('keydown', jump);