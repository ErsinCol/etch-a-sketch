const body = document.querySelector('body')

const container = document.createElement('div')
container.style.width = '800px'
container.style.height = '800px'
container.style.display = 'flex'
container.style.border = '2px solid black'
container.style.flexWrap = 'wrap'

body.appendChild(container)

for(let counter = 0 ; counter < 256 ; counter++){
    const child = document.createElement('div')
    child.style.flexBasis = '50px'
    child.style.margin = '0px'
    child.style.border = '0px'
    container.appendChild(child)
}



