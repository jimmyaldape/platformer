import './src/style.css'
import { Player } from "./src/js/player.js";

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

const player = new Player(context);

function animate() {
    requestAnimationFrame(animate);
    
    context.clearRect(0,0, canvas.width, canvas.height);

    player.update();
}

animate();