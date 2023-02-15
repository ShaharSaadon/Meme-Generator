'use strict'

let gMeme = createMeme()

function createMeme() {
    return {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'New Text',
                size: 35,
                align: 'center',
                color: 'black',
                position: { x: 50, y: 50 },
                height: 0,
                font: 'impact',
                isDrag: false
            },
        ]
    }
}

function getMeme() {
    return gMeme
}

function drawText(line) {

    gCtx.beginPath()
    let { txt, size, align, color, position, font } = line
    if (txt === null) return
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = `${color}`
    gCtx.font = `${size}px ${font}`
    gCtx.textAlign = `${align}`
    gCtx.textBaseline = 'middle'

    // let textWidth = gCtx.measureText(txt).width
    let textHeight = gCtx.measureText(txt).fontBoundingBoxAscent + gCtx.measureText(txt).fontBoundingBoxDescent
    line.height = textHeight
    gCtx.fillText(txt, gElCanvas.width / 2, position.y + textHeight / 2)
    gCtx.strokeText(txt, gElCanvas.width / 2, position.y + textHeight / 2)
    gCtx.closePath()
}

function drawRectOnText(){
if (!gMeme.lines.length) return
 gCtx.strokeRect(1, gMeme.lines[gMeme.selectedLineIdx].position.y, gElCanvas.width - 1, gMeme.lines[gMeme.selectedLineIdx].height)

}

function downloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    // console.log('data', data) // Decoded the image to base64
    elLink.href = data // Put it on the link
    elLink.download = 'my-itmg' // Can change the name of the file
}

function setLineText(txt) {
    if (!gMeme.lines.length) return
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
}

function changeColor(color) {
    if (!gMeme.lines.length) return;
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function changeFontSize(operator) {
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].size += operator
}

function changeLines() {
    if (!gMeme.lines.length) return;
    console.log(gMeme.selectedLineIdx)
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
    renderMeme()
}

function changeFont(fontFamily) {
    if (!gMeme.lines.length) return;
    gMeme.lines[gMeme.selectedLineIdx].font = fontFamily
    console.log(fontFamily)
    renderMeme()
}

function changeAlign(direction) {
    if (!gMeme.lines.length) return;
    gMeme.lines[gMeme.selectedLineIdx].align = direction
    renderMeme()
}

function getDragLine() {
    return gMeme.lines[gMeme.selectedLineIdx];
}

function addLine() {
let posY
// debugger
    if (gMeme.lines.length === 1)  {
        posY = gElCanvas.height - 55
    } else if (gMeme.lines.length >= 2)  posY = gElCanvas.height / 2

    console.log(posY,gMeme.lines.length)
    const line = {
        txt: 'new line',
        size: 35,
        align: 'center',
        color: 'black',
        position: { x: 100, y: posY },
        height: 0,
        font: 'impact',
        isDrag: false,
    }

    gMeme.lines.push(line)
    gMeme.selectedLineIdx=gMeme.lines.length-2
    onChangeLines()
}

function deleteSelectedLine(){
    gMeme.lines.splice(gMeme.selectedLineIdx,1)
    if(gMeme.selectedLineIdx!==0) gMeme.selectedLineIdx--
    renderMeme()
}   




//function resetMeme() {
  //  gMeme = _initMeme();
//}

// function getDragLine() {
    // return gMeme.lines[gMeme.selectedLineIdx];
//   }

// changeTextPosition
//  if (!gMeme.lines.length) return;
//gMeme.lines[gMeme.selectedLineIdx].position.y += num;