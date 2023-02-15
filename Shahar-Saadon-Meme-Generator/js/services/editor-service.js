'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: null,
            size: 35,
            align: 'left',
            color: 'red'
        }
    ]
}

function getMeme(){
return gMeme
}

function downloadCanvas(elLink) {
    // Gets the canvas content and convert it to base64 data URL that can be save as an image
    const data = gElCanvas.toDataURL() // Method returns a data URL containing a representation of the image in the format specified by the type parameter.
    // console.log('data', data) // Decoded the image to base64
    elLink.href = data // Put it on the link
    elLink.download = 'my-itmg' // Can change the name of the file
}

function setLineText(txt){
gMeme.lines[0].txt=txt
}

function setImg(imgId){
gMeme.selectedImgId=imgId
}

function changeColor(color){
    gMeme.lines[0].color=color
    console.log(gMeme.lines[0].color)
}

function changeFontSize(operator){
    gMeme.lines[0].size+=operator
}
