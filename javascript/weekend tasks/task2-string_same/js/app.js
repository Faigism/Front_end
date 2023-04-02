function findSameChar(str) {
    let letters = {};
    let duplicate = [];

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letters[letter]) {
            letters[letter]++;
        }
        else {
            letters[letter] = 1;
        }
    }
    for (let letter in letters) {
        if (letters[letter] > 1) {
            duplicate.push(letter);
        }
    }
    if (duplicate.length == 0){
        console.log('Yazdıgınız string-də eyni hərf yoxdur');
    }
    else{
        console.log(`Təkrarlanan hərflər: ${duplicate.join(',')}-dır`);
    }
    
}
let myString = 'Faiiiigg'
findSameChar(myString)