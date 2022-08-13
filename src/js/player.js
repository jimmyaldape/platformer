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
        this.gravity = .7;
        this.width = 30;
        this.height = 30;
    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();

        if(this.position.y + this.height < this.context.canvas.height) {
            this.position.y += this.velocity.y;
            this.velocity.y += this.gravity;
        }
        
    }

}

export { Player }