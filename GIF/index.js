const images = [
    'img/0.png',
    'img/1.png',
    'img/2.png',
    'img/3.png',
    'img/4.png',
    'img/5.png'
]

const gif = document.querySelector('img');
//gif.src = images[2];
let counter = 0;

function changeImage() {
    if(counter === 6) {
        counter = 0;
    }
    //console.log("change");
    gif.src = images[counter];
    counter++;
}

setInterval(changeImage, 900);