function findWord(sentence){
    return sentence.replace(/[^a-zA-Z\s]/g, '').trim().split(" ").length
}

const sentence = "Hello World";
const wordCount = findWord(sentence);
console.log(wordCount);