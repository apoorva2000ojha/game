score = 0;
cross = true;

audio = new Audio('bgmusic.m4a')
audiogo = new Audio('gameovermusic.wav')
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    audio.play();
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        girl = document.querySelector('.girl');
        girl.classList.add('animateGirl');
        setTimeout(() => {
            girl.classList.remove('animateGirl');
        }, 700);
    }


       if (e.keyCode == 39) { 
          girl = document.querySelector('.girl');
         girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
         girl.style.left = girlX + 112 + "px";
        }
    
    
        if (e.keyCode == 37) { 
            girl = document.querySelector('.girl');
            girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
            girl.style.left = girlX - 112 + "px";
                }
     
 }


setInterval(() => {
    girl = document.querySelector('.girl');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

   
    dx = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(girl, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX,offsetY);

if(offsetX < 60 && offsetY < 60){
    gameover.innerHTML = "Game Over- Reload to start again"
    obstacle.classList.remove('obstacleAni');
    
    audiogo.play()
    setTimeout(() => {
        audio.pause()
    }, 1000);
}
else if(offsetX < 145 && cross){
    score+= 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
        cross = true;
    },1000);
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newDur + 's';
}, 500);
}
   
    


}, 100);

function updateScore(score){
scoreCont.innerHTML = "Your Score is:" + score;
}

