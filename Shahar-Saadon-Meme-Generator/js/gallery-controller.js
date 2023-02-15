'use strict'

function renderImages() {
    let elGalleryContainer = document.querySelector('.grid-container')
    let strHtmls = gImgs.map(img => `
    <img src="/images/${img.id}.jpg" title="" onclick="onImgSelect(${img.id})" >
    `
    ).join('')
    elGalleryContainer.innerHTML = strHtmls

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