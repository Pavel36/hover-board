const board = document.querySelector('#board')
const colors = ['#e5853b', '#e2dd3b', '#65e03c', '#3bddd0', '#d03bdb', '#3d3ad8']
const SQ_NUMBERS = 400

for(let i = 0; i < SQ_NUMBERS; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', ()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave', ()=>{
        removeColor(square)
    })
    
    board.append(square)
}

function setColor(elem) {
    const color = getColorRandom()
    elem.style.backgroundColor = color
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px #000'
}

function getColorRandom() {
    return colors[Math.floor(Math.random()*colors.length)]
}