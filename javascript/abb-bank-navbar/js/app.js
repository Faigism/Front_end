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


let slider1 = document.getElementById('slide1');
let slider2 = document.getElementById('slide2');
let slider3 = document.getElementById('slide3');
let slider4 = document.getElementById('slide4');
let btnSl1 = document.getElementById('1');
let btnSl2 = document.getElementById('2');
let btnSl3 = document.getElementById('3');
let btnSl4 = document.getElementById('4');
btnSl1.addEventListener('click', function(){
  slider1.classList.remove('d-none');
  slider2.classList.add('d-none');
  slider3.classList.add('d-none');
  slider4.classList.add('d-none');
});
btnSl2.addEventListener('click', function(){
  slider2.classList.remove('d-none');
  slider1.classList.add('d-none');
  slider3.classList.add('d-none');
  slider4.classList.add('d-none');
});
btnSl3.addEventListener('click', function(){
  slider3.classList.remove('d-none');
  slider1.classList.add('d-none');
  slider2.classList.add('d-none');
  slider4.classList.add('d-none');
});
btnSl4.addEventListener('click', function(){
  slider4.classList.remove('d-none');
  slider1.classList.add('d-none');
  slider2.classList.add('d-none');
  slider3.classList.add('d-none');
});

// navList start
let navList1 = document.getElementById('list1');
let navSpan1 = document.querySelector('.hvr-span1');
navSpan1.onmouseover = function(){
  navSpan1.style.borderBottom = "2px solid blue";
  navList1.classList.remove('d-none');
  navList1.onmouseleave = function(){
  navList1.classList.add('d-none')
  navSpan1.style.borderBottom = "none";
  }
}

let navList2 = document.getElementById('list2');
let navSpan2 = document.querySelector('.hvr-span2');
navSpan2.onmouseover = function(){
  navSpan2.style.borderBottom = "2px solid blue";
  navList2.classList.remove('d-none');
  navList2.onmouseleave = function(){
  navList2.classList.add('d-none')
  navSpan2.style.borderBottom = "none";
  }
}

let navList3 = document.getElementById('list3');
let navSpan3 = document.querySelector('.hvr-span3');
navSpan3.onmouseover = function(){
  navSpan3.style.borderBottom = "2px solid blue";
  navList3.classList.remove('d-none');
  navList3.onmouseleave = function(){
  navList3.classList.add('d-none')
  navSpan3.style.borderBottom = "none";
  }
}

let navList4 = document.getElementById('list4');
let navSpan4 = document.querySelector('.hvr-span4');
navSpan4.onmouseover = function(){
  navSpan4.style.borderBottom = "2px solid blue";
  navList4.classList.remove('d-none');
  navList4.onmouseleave = function(){
  navList4.classList.add('d-none')
  navSpan4.style.borderBottom = "none";
  }
}

let navList5 = document.getElementById('list5');
let navSpan5 = document.querySelector('.hvr-span5');
navSpan5.onmouseover = function(){
  navSpan5.style.borderBottom = "2px solid blue";
  navList5.classList.remove('d-none');
  navList5.onmouseleave = function(){
  navList5.classList.add('d-none')
  navSpan5.style.borderBottom = "none";
  }
}

let navList6 = document.getElementById('list6');
let navSpan6 = document.querySelector('.hvr-span6');
navSpan6.onmouseover = function(){
  navSpan6.style.borderBottom = "2px solid blue";
  navList6.classList.remove('d-none');
  navList6.onmouseleave = function(){
  navList6.classList.add('d-none')
  navSpan6.style.borderBottom = "none";
  }
}

let navList7 = document.getElementById('list7');
let navSpan7 = document.querySelector('.hvr-span7');
navSpan7.onmouseover = function(){
  navSpan7.style.borderBottom = "2px solid blue";
  navList7.classList.remove('d-none');
  navList7.onmouseleave = function(){
  navList7.classList.add('d-none')
  navSpan7.style.borderBottom = "none";
  }
}

let navList8 = document.getElementById('list8');
let navSpan8 = document.querySelector('.hvr-span8');
navSpan8.onmouseover = function(){
  navSpan8.style.borderBottom = "2px solid blue";
  navList8.classList.remove('d-none');
  navList8.onmouseleave = function(){
  navList8.classList.add('d-none')
  navSpan8.style.borderBottom = "none";
  }
}
// navList end


















