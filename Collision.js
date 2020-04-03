let score = 0;

function ballCrash(ball,ammo) {
        let leftBall = ball.x - ball.radius;
        let rightBall = ball.x + ball.radius;
        let topBall = ball.y - ball.radius;
        let bottomBall = ball.y + ball.radius;
        let leftAmmo = ammo.x - 2.5;
        let rightAmmo = ammo.x + 2.5;
        let topAmmo = ammo.y - 2.5;
        let bottomAmmo = ammo.y + 2.5;
        if (rightBall < leftAmmo || bottomBall < topAmmo || leftBall > rightAmmo || topBall > bottomAmmo) {
            return false;
        } else {
            return true;
        }
}
function shipCrash(ship,ball) {
    let leftBall = ball.x - ball.radius;
    let rightBall = ball.x + ball.radius;
    let topBall = ball.y - ball.radius;
    let bottomBall = ball.y + ball.radius;
    let leftShip = ship.x - ship.r;
    let rightShip = ship.x + ship.r;
    let topShip = ship.y - ship.r;
    let bottomShip = ship.y + ship.r;
    if((bottomShip < topBall) || (topShip > bottomBall) || (rightShip < leftBall) || (leftShip > rightBall)){
        return false;
    } else {
        return true;
    }
}

function checkBallCrash() {
    for (i=0; i<balls.length; i++){
        for( j=0; j<ammo.length; j++){
            if(ballCrash(balls[i],ammo[j])){
                balls[i].alive = false;
                ammo.splice(j,1);
            }
        }if(!balls[i].alive){
            let sound = new Audio();
            sound.src = 'Blop.wav';
            sound.play();
            balls.splice(i,1);
            score ++;
        }
    }
}
function checkShipCrash() {
    for(i=0; i<balls.length; i++){
        if(shipCrash(ship,balls[i])){
            ship.alive = false;
            balls[i].alive = false;
        }
    }if (!ship.alive){
        stop();
        // let deathSound = new Audio();
        // deathSound.src = 'neck.wav';
        // deathSound.load();
        // deathSound.play();
    }
}
