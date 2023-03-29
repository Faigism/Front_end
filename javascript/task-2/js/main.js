btn.onclick = function(){
    var age = prompt("Yasinizi daxil edin", "18");
    if (isNaN(age) == true || age < 18 || age > 100){
        document.getElementById('demo').innerHTML = "Yasiniz 18-den asagi ola bilmez, mutleq reqem olmalidir ve yas limiti 100-dur"
    }
    else{
        document.getElementById('demo').innerHTML = `Yas:${age}`;
    }
}