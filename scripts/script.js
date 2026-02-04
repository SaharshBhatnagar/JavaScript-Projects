const canva = document.getElementsByClassName('drawZone')[0];

const canvaRender = canva.getContext('2d');

function setBrushStyles() {
    canvaRender.strokeStyle = 'cadetblue'; 
    canvaRender.lineWidth = 5;
    canvaRender.lineCap = 'round';
    canvaRender.lineJoin = 'round';
};

canva.width = window.innerWidth - 40;
canva.height = window.innerHeight - 180;
setBrushStyles();

// Handle Resize - auto refresh
window.addEventListener('resize', () => {
    canva.width = window.innerWidth - 40;
    canva.height = window.innerHeight - 180;

    setBrushStyles(); 
});


canvaRender.strokeStyle = 'cadetblue'; 
canvaRender.lineWidth = 5;
canvaRender.lineCap = 'round';
canvaRender.lineJoin = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// when mouse pressed
canva.addEventListener('mousedown', (eve) => {
    isDrawing = true;
    canvaRender.beginPath();

    lastX = eve.offsetX;
    lastY = eve.offsetY;

    canvaRender.moveTo(lastX, lastY);
    canvaRender.lineTo(eve.offsetX, eve.offsetY);
    canvaRender.stroke();
});

// when mouse move
canva.addEventListener('mousemove', (eve) => {
    if (!isDrawing) return;

    canvaRender.beginPath();
    canvaRender.moveTo(lastX, lastY);
    canvaRender.lineTo(eve.offsetX, eve.offsetY);
    canvaRender.stroke();

    lastX = eve.offsetX;
    lastY = eve.offsetY;

});

// when mouse is released
canva.addEventListener('mouseup', () => isDrawing = false);
canva.addEventListener('mouseout', () => isDrawing = false);

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
    canvaRender.clearRect(0, 0, canva.width, canva.height);
});


const saveBtn = document.getElementById('saveBtn');

saveBtn.addEventListener('click', () => {
    // Convert canvas to a PNG image string
    const imageURL = canva.toDataURL('image/png');
    
    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = imageURL;
    link.click();
});

const brushBtn = document.getElementById('brushBtn');
const eraserBtn = document.getElementById('eraserBtn');

// Switch to Brush Mode
brushBtn.addEventListener('click', () => {
    canvaRender.globalCompositeOperation = 'source-over'; 
    canvaRender.strokeStyle = 'lightcoral'; 
    canvaRender.lineWidth = 5;
});

// Switch to Eraser Mode
eraserBtn.addEventListener('click', () => {
    canvaRender.globalCompositeOperation = 'destination-out';
    canvaRender.lineWidth = 20;
});

function toggleActive(selectedBtn) {
    brushBtn.classList.remove('active-tool');
    eraserBtn.classList.remove('active-tool');
    selectedBtn.classList.add('active-tool');
}

brushBtn.addEventListener('click', () => {
    canvaRender.globalCompositeOperation = 'source-over';
    toggleActive(brushBtn);
});

eraserBtn.addEventListener('click', () => {
    canvaRender.globalCompositeOperation = 'destination-out';
    toggleActive(eraserBtn);
});