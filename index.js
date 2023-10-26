// get the grid container element
const gridContainer = document.querySelector('#container');

for(let i = 0; i < 16; i++){
    for(let j = 0; j < 16; j++){
        // Create a new div element for each grid
        const gridDivs = document.createElement('div');

        // give class to style the grid
        gridDivs.classList.add('grid-div');

        // Append the grid to the container
        gridContainer.appendChild(gridDivs);
    }
};

const newGridBtn = document.querySelector('.new-grid');

newGridBtn.addEventListener('click', () => {
    let gridRow = +prompt('Give Row Dimension: ');
    let gridColumn = +prompt('Give Column Dimension:');

    // Empty container from all child nodes
    gridContainer.innerHTML = '';

    if(gridRow <= 100 && gridColumn <= 100){
    for(let i = 0; i < gridRow; i++){
        for(let j = 0; j < gridColumn; j++){
            // Create a new div element for each grid
            const gridDivs = document.createElement('div');
    
            // give class to style the grid
            gridDivs.classList.add('grid-div');
    
            // Append the grid to the container
            gridContainer.appendChild(gridDivs);
    }} 

    }else if(gridRow <= 100 && gridColumn <= 100) {
        return alert('Dimension above limit of 100')
    } else{return alert("only enter numbers <= 100")
    };

    // Makes divs into grid form based on dimension given
    gridContainer.style.cssText = `
    display: grid; 
    grid-template-columns: repeat(${gridColumn}, 1fr); 
    margin-left: 1%;
    width: 50px;
    `

    const gridDivs = document.querySelectorAll('.grid-div');


gridDivs.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        const gridColor = ['blue', 'green', 'red'];
        let mathIndex= Math.floor(Math.random() * gridColor.length);

        if(grid.style.backgroundColor === gridColor[0] || grid.style.backgroundColor === gridColor[1] || grid.style.backgroundColor === gridColor[2]){
        } else{
            grid.style.backgroundColor = gridColor[mathIndex];
            console.log(grid.style.backgroundColor)
        } 
    })
}); 
});

const gridDivs = document.querySelectorAll('.grid-div');


gridDivs.forEach(grid => {
    grid.addEventListener('mouseover', () => {
        const gridColor = ['blue', 'green', 'red'];
        let mathIndex= Math.floor(Math.random() * gridColor.length);

        if(grid.style.backgroundColor === gridColor[0] || grid.style.backgroundColor === gridColor[1] || grid.style.backgroundColor === gridColor[2]){
        } else{
            grid.style.backgroundColor = gridColor[mathIndex];
            console.log(grid.style.backgroundColor)
        } 
    })
}); 