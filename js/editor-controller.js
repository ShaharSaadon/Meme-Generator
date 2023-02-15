'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
const MEME_KEY = 'memeDB'

let gElCanvas
let gCtx
let gIsMovable = false
let gStartPos


function onInit() {
    renderImages()
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    addListeners()
    renderMemes()
    //reseize canvas
}

function renderMeme() {
    var image = new Image();
    image.src = `/images/${gMeme.selectedImgId}.jpg`;
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    onDrawText()
}

function onDrawText() {
    const meme = getMeme()
    meme.lines.forEach(line => {
        drawText(line);
    });

    drawRectOnText()
}

function onSetLineText() {
    let elText = document.querySelector('.meme-text')
    setLineText(elText.value)
    renderMeme()
}

function onChangeColor(color) {
    changeColor(color)
    renderMeme()
}

function onChangeFontSize(operator) {
    changeFontSize(operator)
    renderMeme()
}

function onChangeAlign(direction) {
    changeAlign(direction)
}

function onChangeLines() {
    changeLines()
    let elText = document.querySelector('.meme-text')
    elText.value = getMeme().lines[gMeme.selectedLineIdx].txt
    document.querySelector('.meme-text').focus()

}

function onChangeFont(fontFamily){
    changeFont(fontFamily)
}

function addListeners() {
    addMouseListeners()
    // addTouchListeners()
    //Listen for resize ev
    //   window.addEventListener('resize', () => {
    //     onInit()
    // })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function onDown(ev) {
    console.log('Down')
    const pos = getEvPos(ev)
    checkTouchText(pos)
}

function checkTouchText(pos) {
    const meme = getMeme()
    if (pos.y > meme.lines[0].position.y && pos.y < meme.lines[0].position.y + meme.lines[0].height) {
        console.log('yes')
        meme.selectedLineIdx = 0
    }
    else if (pos.y > meme.lines[1].position.y && pos.y < meme.lines[1].position.y + meme.lines[1].height) {
        console.log('yes')
        meme.selectedLineIdx = 1
    }

    renderMeme()
}

function onMove(ev) {
    console.log('move ')
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
        x: ev.offsetX,
        y: ev.offsetY,
    }
    // Check if its a touch ev
    if (TOUCH_EVS.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
        }
    }
    return pos
}

function onAddLine(){
addLine()
}

function onDeleteSelectedLine(){
    deleteSelectedLine()
}

function onSave(){
    saveMeme(prompt('What is the name of the meme?'))
    onClearTextInput()
    resetMeme()
}

function onClearTextInput() {
    const elMemeText = document.querySelector('.meme-text')
    elMemeText.value = ''
  }
  
// function onClearCanvas(){
//     gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
// }

// function draw(ev) {4
//     const { offsetX, offsetY } = ev //offset= where the user touch at the Canvas!
//     switch (gCurrShape) {
//         case 'triangle':
//             drawTriangle(offsetX, offsetY)
//             break
//         case 'rect': drawRect(offsetX, offsetY)
//             break
//         case 'circle': drawCircle(offsetX, offsetY)
//             break
//         case 'text':
//         const text = document.querySelector('.txt').value
//         drawText(gMeme,offsetX, offsetY)
//             break
//         case 'pen': drawPoint(offsetX, offsetY)
//             break
//     }
// }




// function resizeCanvas() {
//     const elContainer = document.querySelector('.meme-canvas')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
//   }














//Onsetlang
// On delete meme :deleteBook(bookId)
    // renderBooks()
    // flashMsg('Book Deleted')
//On addMeme
// On UpdateMme