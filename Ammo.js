let ammo = [];
let Bullet = function () {
    this.x = ship.x-2+ ship.r * Math.cos(ship.a);
    this.y = ship.y-2 - ship.r * Math.sin(ship.a);
    this.alive = true;
    this.render = function () {
        if (this.alive) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.x, this.y, 5, 5)
        }
    };
    this.update = function () {
        if (this.alive) {
            this.y -= 2;
        } else if (this.y > canvas.height) {
            this.alive = false;
        }
    }
    // this.move = function () {
    //     this.y -= 2;
    // }
}
function createBullet() {
    let bullets = new Bullet();
    ammo.push(bullets);
    console.log(ammo);
    for(i=0; i<ammo.length; i++){
        if(!ammo[i].alive){
            ammo.splice(i,1);
            i--;
        }
    }
}
function bulletUpdate() {
    for (let i = 0; i < ammo.length; i++) {
       // ammo[i].move();
        ammo[i].render();
        ammo[i].update();
        // ammo[i].checkCollision();
    }
}

function shoot() {
    // clear();
    createBullet();

}