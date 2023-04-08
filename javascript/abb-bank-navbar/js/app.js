let langall = document.querySelector('.lang-all');
let langchoice = document.querySelectorAll('.lang-all div');
let langLinks = document.querySelectorAll('.lang-all a');
let btn = document.querySelector('.lang .lang-view');
let body = document.querySelector('body');
let langcode = document.querySelector('.langcode');
let arrowIcon = document.getElementById('arrow-icon');
btn.onclick = function () {
  arrowIcon.classList.toggle('rotate');
  langall.classList.toggle('d-none');
  langall.classList.toggle('active');
  langchoice.forEach(function (i) {
    i.addEventListener('click', function () {
      langchoice.forEach(function (v) {
        if (v != i && !v.classList.contains('d-none')) {
          i.classList.add('d-none');
        }
        else if (v != i && v.classList.contains('d-none')) {
          v.classList.remove('d-none');
        }
      });
      this.classList.add('active');
      langcode.textContent = this.querySelector('a').textContent;
    });
  });

}
body.addEventListener('click', function (event) {
  if (!langall.contains(event.target) && !btn.contains(event.target)) {
    langall.classList.add('d-none');
  }
});

let search = document.querySelector('.search');
let searchSec = document.querySelector('.search-sec');
search.onclick = function () {
  searchSec.classList.toggle('d-none');
  iconX = document.querySelector('.iconx');
  iconX.onclick = function () {
    searchSec.classList.add('d-none');
  }
}

let burger_icon = document.querySelector('.burger-icon');
let all_burger = document.querySelector('.all-burger');
burger_icon.onclick = function(){
  if(all_burger.classList.contains('left-0')){
    all_burger.classList.remove('left-0');
    all_burger.classList.add('left-1');
  }
  else{
    all_burger.classList.remove('left-1');
    all_burger.classList.add('left-0');
  }
}



const ac_menus = document.querySelectorAll('.ac-menu');
ac_menus.forEach(function(menu) {
  const burger_arrow = menu.querySelector('.burger-arrow');
  const ac2 = menu.querySelector('.ac-2');
  let isExpanded = false;
  
  menu.addEventListener("click", function () {
    burger_arrow.classList.toggle('rotate');
    
    if (isExpanded) {
      ac2.style.height = "0";
      ac2.style.visibility = "hidden";
      isExpanded = false;
    }
    else {
      ac2.style.height = ac2.scrollHeight + "px";
      ac2.style.visibility = "visible";
      isExpanded = true;
    }
  });
});













