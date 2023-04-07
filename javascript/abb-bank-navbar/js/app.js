let langall = document.querySelector('.lang-all');
let langchoice = document.querySelectorAll('.lang-all div');
let langLinks = document.querySelectorAll('.lang-all a');
let btn = document.querySelector('.lang .lang-view');
let body = document.querySelector('body');
let langcode = document.querySelector('.langcode');
let arrowIcon = document.getElementById('arrow-icon');
btn.onclick = function(){
  arrowIcon.classList.toggle('rotate')
    langall.classList.toggle('d-none');
    langall.classList.toggle('active');
    langchoice.forEach(function(i){
      i.addEventListener('click', function(){
        langchoice.forEach(function(v){
          if(v != i && !v.classList.contains('d-none')){
            i.classList.add('d-none');
          }
          else if(v != i && v.classList.contains('d-none')){
            v.classList.remove('d-none');
          }
        });
        this.classList.add('active');
        langcode.textContent = this.querySelector('a').textContent;
      });
    });
    
}
body.addEventListener('click', function(event) {
  if (!langall.contains(event.target) && !btn.contains(event.target)) {
      langall.classList.add('d-none');
  }
});

let search = document.querySelector('.search');
let searchSec = document.querySelector('.search-sec');
search.onclick = function(){
  searchSec.classList.toggle('d-none');
  iconX = document.querySelector('.iconx');
  iconX.onclick = function(){
    searchSec.classList.add('d-none');
  }
}

