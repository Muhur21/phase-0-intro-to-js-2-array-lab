const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){ 
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function removeFirstCat(name){
    return cats.slice(name);
}

function appendCat(name){
    const Cats = cats.slice();
    Cats.push(name);
    return Cats;
}

function prependCat(name){
    const Cats = cats.slice();
    Cats.unshift(name);
    return Cats;
}

function removeLastCat(name){
    const Cats = cats.slice();
    Cats.pop(name);
    return Cats;
}

function removeFirstCat(name){
    const Cats = cats.slice();
    Cats.shift(name);
    return Cats;
}