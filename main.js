import './src/style.css'
import { Player } from "./src/js/player.js";

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const player = new Player(context);

const keys = {
    right: {
        pressed: false,
    },
     left: {
        pressed: false,
     },
     up:{
        pressed: false,
     },
     down: {
        pressed: false,
     },

}

function animate() {
    requestAnimationFrame(animate)
    context.clearRect(0,0, canvas.width,canvas.height)

    player.update();   
}


animate();

addEventListener('keydown', ({keyCode}) => {
    // console.log(keyCode);

    switch (keyCode) {
        case 39:
            console.log('RIGHT');
            break;
        case 37:
            console.log('LEFT')
           break;
        case 38: 
            console.log('UP')
            break;
        case 40:
            console.log('DOWN')
            break;
    }
})