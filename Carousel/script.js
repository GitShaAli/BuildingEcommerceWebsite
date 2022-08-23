const images = document.getElementById('imgs');

const img = document.querySelectorAll('#imgs img');

let index = 0;

function run(){
    index++;
    if(index>=img.length){
        index=0;
    }

    images.style.transform = `translateX(${-index * 650}px`;

}

setInterval(() => {
    run();
}, 1000);
