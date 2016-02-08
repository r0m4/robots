$(function(){
var curPosX = 0;
var curPosY = 0;
var interval;
var n = 10; // На сколько двигать за раз
var width = document.documentElement.clientWidth; // Ширина экрана
var height = document.documentElement.clientHeight; // Высота экрана
var imgWidth = 100; // Ширина картинки
var imgHeight = 100; // Высота картинки
var img1 = document.getElementById("img1");

function move() {
  img1.style.left = (curPosX += n) + "px";
  img1.style.top = (curPosY += n) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  };
  //
}
//interval = setInterval(move, 1000);
//setTimeout(move, 100)
    

function moveRight(){
    img1.style.left = (curPosX += n) + "px";
}

function moveLeft(){
    img1.style.right= (curPosX += n) + "px";
}



addEventListener("keydown",function(event){
    
    if(event.keyCode==37){
        console.log(event.keyCode, "keyUp");
        interval = setInterval(moveLeft,1);
        event.stopPropagation();
    } 
})

addEventListener("keyup",function(event){
    
    if(event.keyCode==37){
        console.log(event.keyCode, "keyDown");
        clearInterval(interval);
    } 
})

addEventListener("keydown",function(event){
    
    if(event.keyCode==39){
        console.log(event.keyCode, "keyUp");
        interval = setInterval(moveRight,1);
        event.stopPropagation();
    } 
})

addEventListener("keyup",function(event){
    
    if(event.keyCode==39){
        console.log(event.keyCode, "keyDown");
        clearInterval(interval);
    } 
})

});