const fs = require('fs');
const data = fs.readFileSync('input.txt', 'utf8');
const lines = data.split(/\r?\n/)

let elves = []
let calories = 0;

lines.forEach(amount => {
    if(amount === "") {
        elves.push(calories)
        calories = 0;
    } else {
        calories += Number(amount);
    }
})

let topElf = Math.max(...elves)

console.log("The top elf is carrying: "+topElf+" calories")

let top3 = elves.sort(function(a, b){return b - a}).slice(0, 3)
let combined = top3.reduce((a, b) => a + b, 0)

console.log("The top 3 elves combined calorie count is: "+combined)