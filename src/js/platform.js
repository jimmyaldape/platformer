class Platform {
    constructor(context) {
        this.context = context;
        this.position = {
            x: 200,
            y: 500
        }

        this.width = 200;
        this.height = 30;
    }

    draw() {
        this.context.fillStyle = 'blue';
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

export { Platform }