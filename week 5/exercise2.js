document.addEventListener('DOMContentLoaded',myFunction);

function myFunction(){
    var element=document.getElementById("heading");
    element.addEventListener('click',myNewFunction);
}

function myNewFunction()
{
    var element=document.getElementById("heading");
    element.firstChild.nodeValue="NEW HEADING";
}