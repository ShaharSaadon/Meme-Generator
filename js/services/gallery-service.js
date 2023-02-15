'use strict'

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
var gImgs = [
    {
        id: 1,
        url: '/images/1.jpg',
        keywords: ['trump', 'america']
    },
    {
        id: 2,
        url: '/images/2.jpg',
        keywords: ['dog', 'cat']
    },
    {
        id: 3,
        url: '/images/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: '/images/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: '/images/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: '/images/6.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 7,
        url: '/images/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: '/images/8.jpg',
        keywords: ['funny', 'cat']
    }


]

var gMemes = loadMemes()

function getSelectedImg(id) {
    const img = gImgs.find(img => id === img.id)
    return img
}

function saveMeme(name) {
    var id = gMemes.length + 1
    const meme = 
        {
            id,
            name: name,
            url: gElCanvas.toDataURL()
        }
    
    gMemes.push(meme)
    saveToStorage(MEME_KEY, gMemes)

}

function loadMemes() {
    var gMemes = loadFromStorage(MEME_KEY)
    if (!gMemes || !gMemes.length) gMemes = [];
    saveToStorage(MEME_KEY, gMemes)
    return gMemes
}

