btn.onclick = function() {
    var result;
    if (confirm("Press a button")==true) {
        result = "Your Sites"
    }
    else{
        result = "Canceled"
    }
    document.getElementById('body-h').innerHTML = result;
}