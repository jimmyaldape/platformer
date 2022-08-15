class Platform {
    constructor(context) {
        this.context = context;
        this.position = {
            x: 0,
            y: 0
        }

        this.width = 200;
        this.height = 200;
    }

    draw() {
        this.context.fillRect();
    }
}

export { Platform }