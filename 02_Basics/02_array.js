const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_Heros = marvel_heros.concat(dc_heros);
// console.log(all_Heros);

// const allHeros = [...marvel_heros, ...dc_heros];
// const allHeros = [ ...dc_heros, ...marvel_heros, ...dc_heros];
// console.log(allHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(1);
const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

console.log(Array.from("BytesSculptor"));
console.log(Array.isArray("BytesSculptor"));
console.log(Array.from({name: "Alex"})); // interesting O/P => []

let score1 = 100
let score2 = 200
let score3 = 300
let booleanValue = false

console.log(Array.of(score1, score2, score3, booleanValue));
