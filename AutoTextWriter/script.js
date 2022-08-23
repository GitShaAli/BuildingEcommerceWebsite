const write = "Hello.. User..!!"
let index = 1;
function writer(){
    document.body.innerText=write.slice(0,index);
    index++;
    if(index>write.length){
        index=0;
    }
}

setInterval(writer,100);