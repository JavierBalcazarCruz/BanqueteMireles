document.getElementById('menu-btn').onclick = function(){
   var element = document.getElementById("ul-menu");
   element.classList.add("active");
}


document.getElementById('menu-close').onclick = function(){
   var element = document.getElementById("ul-menu");
   element.classList.remove("active");
}