const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

//concat operator
marvel_heros.concat(dc_heros)
console.log(marvel_heros);

//add 2 arrays
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const array2 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const array3 = array2.flat(Infinity)
console.log(array3);


console.log(Array.isArray("krishna"));
console.log(Array.from("krishna")); //['k', 'r', 'i','s', 'h', 'n','a']
console.log(Array.from({name: "krishna"})); //important


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]

