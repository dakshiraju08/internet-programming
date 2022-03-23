function myFunction(){
    var element=document.getElementById("circle");
    element.style.opacity='1';    
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    var element=document.getElementById("circle");
    element.style.backgroundColor='blue';
    
}

document.addEventListener('DOMContentLoaded',myFunction);