import './src/style.css'
import { Player } from "./src/js/player.js";
import { Platform } from "./src/js/platform.js";

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const player = new Player(context);
const platform = new Platform(context);

const keys = {
    right: {
        pressed: false,
    },
    left: {
        pressed: false,
    }
};

function animate() {
    requestAnimationFrame(animate);
    
    context.clearRect(0,0, canvas.width, canvas.height);

    player.update();

    if (keys.right.pressed) {
        player.velocity.x = 5;
    } else if (keys.left.pressed) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;
    }

}

animate();

addEventListener('keydown', ({keyCode}) => {
    // console.log(keyCode);

    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = true;
            break;
        case 83:
            console.log('down');
            break;
        case 68:
            console.log('right');
            keys.right.pressed = true;
            break;
        case 87:
            console.log('up');
            player.velocity.y -= 20;
            break;
    }
})

addEventListener('keyup', ({keyCode}) => {
    // console.log(keyCode);

    switch (keyCode) {
        case 65:
            console.log('left');
            keys.left.pressed = false;
            break;
        case 83:
            console.log('down');
            break;
        case 68:
            console.log('right');
            keys.right.pressed = false;
            break;
        case 87:
            console.log('up');
            player.velocity.y -= 20;
            break;
    }
})