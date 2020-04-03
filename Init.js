let count = 1000;
let  localStorageName = "highScore";
let highScore = localStorage.getItem(localStorageName) == null ? 0 :
    localStorage.getItem(localStorageName);

ctx.beginPath();
ctx.strokeStyle = 'white';
ctx.arc(350,300,250,0,Math.PI*2);
ctx.stroke();
ctx.font = "30px sans-serif";
ctx.fillStyle = 'white';
ctx.fillText('Circle',320,300);
function instruction(){
    clear();
    ctx.font = "15px sans-serif";
    ctx.fillStyle = 'white';
    ctx.fillText('Your have only 20 seconds to try your best!',150,100);
    ctx.fillText('Destroy the Circles as much as you can!',150,150);
    ctx.fillText('Free Fire...! Shooting for FUN...!',150,200);
    ctx.fillText('Click the Play Game button bellow to play',150,250);
    ctx.fillText('If you want another try,',150,300);
    ctx.fillText('Click the Restart button bellow. ',150,350);
    ctx.fillText('Press Up arrow to fire, Left arrow to move left, Right arrow to move right.',150,400);
    ctx.fillText('If you like this game, let'+ "s share to your friends ^_^", 150,500);
}
function showScore() {
    highScore = Math.max(score, highScore);
    localStorage.setItem(localStorageName, highScore);
    ctx.font = "25px sans-serif";
    ctx.fillStyle = 'white';
    ctx.fillText('Game Over',280,250);
    ctx.fillText('Your score: '+ score ,280,300);
    ctx.fillText('Best Score: '+highScore,280,350)
}
function gameReady() {
        let countDown = 4;
        let y = setInterval(function countDow() {
            clear();
            countDown --;
            ctx.font = "35px sans-serif";
            ctx.fillStyle = 'white';
            ctx.fillText(countDown,340,300);
            if(countDown===0){
                clear();
                ctx.font = "35px sans-serif";
                ctx.fillStyle = 'white';
                ctx.fillText('Go!',340,300);
            }
            if (countDown<0){
                clear();
                clearInterval(y);
                setTimer();
                start();
            }
        },1000);

}
function setTimer(){
    let time = 20;
    let x = setInterval(function setTimer(){
        time--;
        document.getElementById('time').innerHTML ='Your time: ' + time;
        if(time===0){
            clearInterval(x);
            document.getElementById('time').innerHTML = '<span style="color: chartreuse">Time is up!</span>';
            stop();
            clear();
            showScore();
        }
        else if(!ship.alive){
            clearInterval(x);
            document.getElementById('time').innerHTML = '<span style="color: red">Your ship has been destroyed!</span>';
            stop();
            clear();
            showScore();
        }
    },1000);
}
function localScore() {
    if(localStorage.getItem(localStorageName) == null) {
        highScore = 0;
    } else {
        highScore = localStorage.getItem(localStorageName);
    }
}
