// let verbs = require('./verbs.js');
// let adjectives = require('./adjectives.js');
// let things = require('./things.js');

let vowels = ['a','e','i','o','u']

const randomize = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}
const randVerb = () => {
    return randomize(verbs);
}
const randAdjective = () => {
    return randomize(adjectives);
}

const randThing = () => {
    
    let thing = randomize(things);
    let article = vowels.includes(thing[0]) ? 'an' : 'a'
    return article + ' ' + thing + '!';
}

const spitMessage = () => {
//     document.getElementById("message").innerHTML='Try ' + randAdjective() + ' ' + randVerb() + ' ' + randThing();
        document.getElementById("message").innerHTML='Try ';
};

console.log('Try ' + randAdjective() + ' ' + randVerb() + ' ' + randThing());
