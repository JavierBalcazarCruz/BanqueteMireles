/*Cuando da click al menu se activa*/
document.getElementById('menu-btn').onclick = function(){
   var element = document.getElementById("ul-menu");
   element.classList.add("active");
}

/*Cuando da click al menu se desactiva*/
document.getElementById('menu-close').onclick = function(){
   var element = document.getElementById("ul-menu");
   element.classList.remove("active");
}