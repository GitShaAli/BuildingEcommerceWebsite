const btn = document.getElementById('btn');
const cbtn = document.getElementById('cbtn');
const container = document.getElementById('container');

btn.addEventListener('click',()=>{
    container.classList.add('active');
})

cbtn.addEventListener('click',()=>{
    container.classList.remove("active");
})