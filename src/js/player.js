class Player {
    constructor(context) {
        this.context = context;
        this.position = {
            x: 100,
            y: 100
        };

        this.width = 30;
        this.height = 30;
    }

    draw() {
        this.context.fillStyle = 'red';
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

export { Player }