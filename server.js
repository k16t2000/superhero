let superheroes=require("superheroes");
/*console.log(superheroes.all);
console.log(superheroes.random());*/
let supervillains=require("supervillains");
/*console.log(supervillains.all);*/
/*dostaju vse imena*/
supervillains.all.forEach(element => {
    console.log(element)
});
/*name random*/ 
console.log(supervillains.random());
/*3 zadanie */
console.log(`${superheroes.random()} fights ${supervillains.random()}`);
/*console.log(supervillains.random());*/
/*task1 get the names of all supervillains
2-get a random supervillain name
3-make a random superhero fight a random supervilliain in the console.log() */
