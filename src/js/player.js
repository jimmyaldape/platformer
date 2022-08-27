const gravity = .45;
class Player {
    constructor(context) {
        this.context = context;
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 1,
        }
        this.width = 30;
        this.height = 30;
    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        if(this.position.y + this.height + this.velocity.y <= this.context.canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }

}

export { Player }