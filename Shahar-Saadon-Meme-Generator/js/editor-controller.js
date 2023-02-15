'use strict'

let gElCanvas
let gCtx
let gCurrShape='text'

function onInit() {
    renderImages()
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    onImgSelect(2)
}

function renderMeme(){
    var image = new Image();
    image.src = `/images/${gMeme.selectedImgId}.jpg`;
    gCtx.drawImage(image, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText()
}

function drawText(){
    let {txt,size,align,color} = gMeme.lines[0]
    if(txt===null) return
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'white'
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px Arial`
    gCtx.textAlign = `${align}`
    // gCtx.textBaseline = 'middle'
  
    gCtx.fillText(txt, 115, 30) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(txt, 115, 30) // Draws (strokes) a given text at the given (x, y) position.}
}

function onSetLineText(){
    let elText=document.querySelector('.meme-text')
    setLineText(elText.value) 
    renderMeme()
}

function onChangeColor(color){
changeColor(color)
renderMeme()
}

function onChangeFontSize(operator){
    changeFontSize(operator)
    renderMeme()
}


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