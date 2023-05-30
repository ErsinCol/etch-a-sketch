const body = document.querySelector('body')

const h1 = document.createElement('h1')
h1.textContent = 'Sketchpad'

body.appendChild(h1)

const parentContainer = document.createElement('div')
parentContainer.classList.add('parentContainer')

const controlsContainer = document.createElement('div')
controlsContainer.classList.add('controlsContainer')
const controlsInner = document.createElement('div')
controlsInner.classList.add('controls-inner')
const h3 = document.createElement('h3')
h3.textContent = 'Controls'
const gridSize = document.createElement('div')
gridSize.textContent = '8x8'
gridSize.classList.add('grid-size')
const inputRange = document.createElement('input')
inputRange.setAttribute('type', 'range')
inputRange.setAttribute('min', '4')
inputRange.setAttribute('max', '100')
inputRange.setAttribute('value', '8')
const applyButton = document.createElement('button')
applyButton.textContent = 'Apply'
applyButton.classList.add('apply')


controlsInner.appendChild(h3)
controlsInner.appendChild(gridSize)
controlsInner.appendChild(inputRange)
controlsInner.appendChild(applyButton)

controlsContainer.appendChild(controlsInner)


const gridContainer = document.createElement('div')
gridContainer.classList.add('gridContainer')

parentContainer.appendChild(controlsContainer)
parentContainer.appendChild(gridContainer)
body.appendChild(parentContainer)

let numOfSquares = 8;

function createGridContainer(){
    gridContainer.innerHTML = ''

    gridContainer.style.setProperty('--numOfSquares', numOfSquares)

    for(let counter = 0 ; counter < numOfSquares * numOfSquares ; counter++){
        const gridChild = document.createElement('div')
        gridChild.classList.add('gridChild')
        gridContainer.appendChild(gridChild)
    }

    const gridChilds = document.querySelectorAll('.gridChild')

    gridChilds.forEach(gridChild=>{
        gridChild.addEventListener('mouseover', (e)=>{
            gridChild.classList.add('hovered')
        })
    })
}

function retry(){
    createGridContainer()
}

inputRange.addEventListener('input', (e)=>{
    numOfSquares = e.target.value;
    gridSize.textContent = `${numOfSquares}x${numOfSquares}`;
})

applyButton.addEventListener('click', ()=>{
    retry()
})

