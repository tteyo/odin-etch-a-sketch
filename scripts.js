const drawingPad = document.querySelector('.container');

for(let i = 0; i < 256; i++){
    const gridBox = document.createElement('div');
    gridBox.classList.add("gridBox");
    gridBox.addEventListener('mouseover', () => {
        gridBox.classList.add("colored");
    });
    drawingPad.appendChild(gridBox);
}
