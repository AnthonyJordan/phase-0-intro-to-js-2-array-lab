// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
let copyOfCats;

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    return copyOfCats = [...cats, name]
}

function prependCat(name){
    return copyOfCats = [name, ...cats]
}

function removeLastCat(){
    return copyOfCats = cats.slice(0, -1)
}

function removeFirstCat(){
    return copyOfCats = cats.slice(1)
}