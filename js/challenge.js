let counter = document.querygetElementById('counter').value;

let timer = true

setInterval(function(){

if(timer){
  counter.innerText++;
}
  
}, 1000)
