
function palinDrome(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedStr = str.split('').reverse().join('');

    if (str === reversedStr) {
        console.log(`${str}-palindromdur`);
    }
    else{
        console.log(`${str}-palindrome deyil`);
    }
}

let sameLatter = 'borrow or rob'
palinDrome(sameLatter)
