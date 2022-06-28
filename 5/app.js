const container = document.querySelector('.container');
const generatedArray = document.createElement('p');
const sortedArray = document.createElement('p');

const lettersArray = [ 'A', 'B', 'C', 'D' ];
const newLettersArray = [];

let sumA = 0;
let sumB = 0;
let sumC = 0;
let sumD = 0;
const randomLetterGenerator = () => {
	return lettersArray[Math.floor(Math.random() * lettersArray.length)];
};

for (let i = 0; i < 200; i++) {
	let randomLetter = randomLetterGenerator();
	newLettersArray.push(randomLetter);
}
// console.log(newLettersArray);

generatedArray.innerText = newLettersArray;

const sortedLetterArray = newLettersArray.sort((a, b) => {
	return a.localeCompare(b);
});

// console.log(sortedLetterArray);
sortedArray.innerText = sortedLetterArray;
container.append(generatedArray, sortedArray);
