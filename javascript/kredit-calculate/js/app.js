btn.onclick = function () {
    var kredit_meblegi = Number(document.getElementById('price').value)
    var kredit_muddeti = Number(document.getElementById('month').value)
    var kredit_faizi = Number(document.getElementById('percent').value)

    if (isNaN(kredit_meblegi) || (kredit_meblegi < '5000') || 
    (kredit_meblegi > '50000') || isNaN(kredit_muddeti) || 
    (kredit_muddeti < '1') || (kredit_muddeti > '120') || 
    isNaN(kredit_faizi) || (kredit_faizi < '10') || 
    (kredit_faizi > '20')) {
        alert('Yanlış daxil edirsiniz(rəqəm olmalıdır və ya limit aşılmamalıdır!..)')
    }
    else {
        var ayliq_odenis = ((kredit_meblegi + ((kredit_meblegi * kredit_faizi) / 100)) / kredit_muddeti).toFixed(2);
        document.getElementById('result').innerHTML = `${ayliq_odenis}`
        var umumi_odenis = (ayliq_odenis * kredit_muddeti).toFixed(2);
        document.getElementById('result2').innerHTML = `${umumi_odenis}`
    }
}