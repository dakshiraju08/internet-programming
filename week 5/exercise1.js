document.addEventListener('DOMContentLoaded',myFunction);

function myFunction(){
    var element=document.getElementById("circle");
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    alert("The button was pressed");
}