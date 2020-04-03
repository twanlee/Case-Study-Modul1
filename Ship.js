
const SHIP_SIZE = 40;
let Ship = function () {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.speed = 7;
    this.alive = true;
    this.a = 90/180*Math.PI;
    this.r = SHIP_SIZE/2;
    this.draw = function () {
        ctx.strokeStyle = 'white';
        ctx.lineWidth = SHIP_SIZE / 20;
        ctx.beginPath();
        ctx.moveTo(
            this.x + this.r * Math.cos(this.a),
            this.y - this.r * Math.sin(this.a),
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) + Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) - Math.cos(this.a))
        );
        ctx.lineTo(
            this.x - this.r * (Math.cos(this.a) - Math.sin(this.a)),
            this.y + this.r * (Math.sin(this.a) + Math.cos(this.a))
        );
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = 'yellow';
        ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);
    };
    this.collision = function () {
        if(this.x < 0- this.r){
            this.x = canvas.width + this.r;
        }else if(this.x > canvas.width + this.r){
            this.x = 0-this.r;
        }

    }
}