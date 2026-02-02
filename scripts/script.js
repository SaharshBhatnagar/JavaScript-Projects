const canva = document.getElementsByClassName('.drawZone');

const convaRender = canva.getContext('2d');

canva.width = window.innerWidth;
canva.height = window.innerHeight;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set the brush style
ctx.strokeStyle = '#000000'; // Black color
ctx.lineWidth = 5;           // Thickness
ctx.lineCap = 'round';       // Smooth ends
ctx.lineJoin = 'round';      // Smooth corners