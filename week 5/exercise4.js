var timer;
function myFunction(){ 
    document.addEventListener('keydown',myKeyDown);
}

function moveLeft()
{
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft-10+'px';    
}
function moveUp()
{
    var element=document.getElementById("circle");    
    var positionTop=element.offsetTop;
    element.style.top=positionTop-10+'px';    
}
function moveRight()
{
    var element=document.getElementById("circle");    
    var positionLeft=element.offsetLeft;
    element.style.left=positionLeft+10+'px';    
}
function moveDown()
{
    var element=document.getElementById("circle");    
    var positionTop=element.offsetTop;
    element.style.top=positionTop+10+'px';    
}

function myKeyDown(event){
    console.log(event.keyCode);
    if(event.keyCode == 37){
        clearInterval(timer);
        timer=setInterval(moveLeft,1000);
        
    }
    if(event.keyCode == 38){
        clearInterval(timer);
        timer=setInterval(moveUp,1000);
    }
    if(event.keyCode == 39){
        clearInterval(timer);
        timer=setInterval(moveRight,1000);
    }
    if(event.keyCode == 40){
        clearInterval(timer);
        timer=setInterval(moveDown,1000);
    }

}

document.addEventListener('DOMContentLoaded',myFunction);