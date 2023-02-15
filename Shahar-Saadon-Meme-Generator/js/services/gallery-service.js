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


];

function getSelectedImg(id){
    const img = gImgs.find(img => id===img.id)
    return img
}

// function getImg(searchBy){   
// }
