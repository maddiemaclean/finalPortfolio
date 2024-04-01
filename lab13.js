let word = "Catherine Elaine Test";
let splitWords = word.split(" "); // works as the same Python and Java split
console.log(splitWords);

const func1 = (wordsIn) => { // an example of a anonymous function in JS
    for(let i=0; i< wordsIn.length; i++){
        if(wordsIn[i].charAt(0) > 'Z' || wordsIn[i].charAt(0) < 'A'){
            return false;
        }
    }
    return true;
}

const func2 = (wordsIn) => {
    if(wordsIn.length === 0 || wordsIn.length === 1 || wordsIn.length === 2){
        return true
    }
    else{
        return false
    }
}

const func3 = (wordsIn) => {
    let char1 = wordsIn[0].charAt(wordsIn[0].length-1)
    let char2 = wordsIn[1].charAt(0)
    char1 = char1.toUpperCase()
    char2 = char2.toUpperCase()
    if(char1 === char2){
        return true
    }
    else{
        return false;
    }

}
console.log(func1(splitWords))
console.log(func2(splitWords))
console.log(func3(splitWords))

const arr = ["Test Test", "This is a test", "This Is A Test", "Catherine Elaine", "Catherine Elaine Guil", "Does this pass?", "Question Node.js"];
const filtered = arr.filter(sentence => { // filter works like the Python filter, but the format is more like an anonymous function
    const words = sentence.split(" ");
    return func1(words) && func2(words) && func3(words); //how to filter with multiple conditions
});

console.log(filtered);
