let gridDiv = document.querySelector('.grid')
let adjustButton = document.querySelector('.adjust-button')

function clearGrid(){
    let child = gridDiv.firstElementChild;

    while(child){
        gridDiv.removeChild(child);
        child = gridDiv.firstElementChild;
    }

}

function colorBorder(e){
    // this.classList.add('hover-block');
    // this.style.backgroundColor = 'black';

    if(this.color){

        this.color = this.color.darken(10);

        this.style.backgroundColor = this.color.toString();
        // console.log(this.color);
    }
    else{
        let color = '#' + Math.floor(Math.random()*16777215).toString(16);

        this.color = tinycolor(color);

        this.style.backgroundColor = color;

        
        // this.style.backgroundColor = this.color.toString();
    }
}

function uncolorBorder(e){
    // this.classList.remove('hover-block');

    this.style.backgroundColor = 'transparent';
}

function createGrid(gridSize){

    clearGrid();

    for(let i = 0; i < gridSize;++i){
        let actualRow = document.createElement('div');
        actualRow.classList.add('row');

        for(let j = 0; j < gridSize;++j){
            let actualBlock = document.createElement('div');
            actualBlock.classList.add('block');
            actualBlock.addEventListener('mouseenter',colorBorder);
            // actualBlock.addEventListener('mouseleave',uncolorBorder);
            // actualBlock.innerText = 'holis';
            actualRow.appendChild(actualBlock);
        }

        gridDiv.appendChild(actualRow)
    }
}

function changeDimension(e){
    let newGridSize = +prompt('Set new dimenision (min 16, max 100):')


    if(isNaN(newGridSize) || newGridSize < 16 || newGridSize > 100){
        console.log('grid dimension not changing (invalid input)')
    }
    else{
        createGrid(newGridSize);
    }

 


    // createGrid(+newGridSize);

}


createGrid(16);

document.addEventListener('click',changeDimension);
