let body=document.querySelector("body"),toggle=document.querySelector(".toggle_2"),loader=(toggle.onclick=function(){body.classList.toggle("light")},document.querySelector(".loader"));window.addEventListener("load",function(){loader.className+=" hidden"});