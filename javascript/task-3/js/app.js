btn.onclick = function () {
    var groupName = document.getElementById('input_user').value;
    var num = groupName.slice(-3, -2);

    switch (num) {
        case '1':
            document.getElementById('result').innerHTML = `Qrup nomre: ${groupName}`
            document.getElementById('result').style.color = 'yellow'
            break;
        case '2':
            document.getElementById('result').innerHTML = `Qrup nomre: ${groupName}`
            document.getElementById('result').style.color = 'red'
            break;
        case '3':
            document.getElementById('result').innerHTML = `Qrup nomre: ${groupName}`
            document.getElementById('result').style.color = 'black'
            break;
        default:
            document.getElementById('result').innerHTML = 'Qrup nomresi duzgun deyil'
            document.getElementById('result').style.color = 'blue'
            break;
    }
}