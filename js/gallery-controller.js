'use strict'

function renderImages() {
    let elGalleryContainer = document.querySelector('.images-grid-container')
    let strHtmls = gImgs.map(img => `
    <img src="/images/${img.id}.jpg" title="" onclick="onImgSelect(${img.id})" >
    `
    ).join('')
    elGalleryContainer.innerHTML = strHtmls
}

function renderMemes(){
    console.log(gMemes)
    let elMemesContainer = document.querySelector('.memes-grid-container')
    let strHtmls = gMemes.map(meme => `
    <img src='${meme.url}' title="${meme.name}">
    `
    ).join('')
    console.log(strHtmls)
    elMemesContainer.innerHTML = strHtmls
}

function onImgSelect(imgId) {
    let elImageGallery = document.querySelector('.image-gallery')
    let elMemeCanvas = document.querySelector('.meme-container')
    elImageGallery.classList.toggle('hide')
    elMemeCanvas.classList.toggle('hide')
    setImg(imgId)
    renderMeme()
    document.querySelector('.meme-text').focus();

}

function onGallery(ev){
    ev.preventDefault()
    
    let elImageGallery = document.querySelector('.image-gallery')
    let elMemeCanvas = document.querySelector('.meme-container')
    let elMemes = document.querySelector('.memes-gallery')

    if(elImageGallery.classList.contains('hide')) elImageGallery.classList.remove('hide')    
    if(!elMemeCanvas.classList.contains('hide')) elMemeCanvas.classList.add('hide')
    if(!elMemes.classList.contains('hide')) elMemes.classList.add('hide')
}

function onMemes(ev){
    ev.preventDefault()
    let elImageGallery = document.querySelector('.image-gallery')
    let elMemeCanvas = document.querySelector('.meme-container')
    let elMemes = document.querySelector('.memes-gallery')

    if(elMemes.classList.contains('hide')) elMemes.classList.remove('hide')    
    if(!elMemeCanvas.classList.contains('hide')) elMemeCanvas.classList.add('hide')
    if(!elImageGallery.classList.contains('hide')) elImageGallery.classList.add('hide')

    renderMemes()
}
