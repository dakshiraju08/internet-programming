function myFunction(){   
    var element=document.getElementById("id2");
    element.firstChild.nodeValue="New content in paragraph";
}

function changeh1ContentFun(){
    var ele=document.getElementById("id1");
    ele.firstChild.nodeValue="New Heading";
    document.addEventListener('click',myFunction);
}

document.addEventListener('click',changeh1ContentFun);

