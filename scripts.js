const drawingPad = document.querySelector('.container');
const gridChanger = document.querySelector('.grid')

function clear(){
    while(drawingPad.firstChild){
        drawingPad.removeChild(drawingPad.firstChild);
    }
}

function resize(gridNumber){
    if(!Number(gridNumber)) return;
    let number = Number(gridNumber);
    let pxSize = 400/number - 2;
    
    for(let i = 0; i < number*number; i++){
        const gridBox = document.createElement('div');
        gridBox.style.width = `${pxSize}px`;
        gridBox.style.height = `${pxSize}px`;
        gridBox.style.border = "1px solid grey";

        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.add("colored");
        });

        drawingPad.appendChild(gridBox);
    }
}

gridChanger.addEventListener('click', () => {
    clear();
    resize(prompt("Number of Squares per side? e.g 16 in a 16x16"));
});