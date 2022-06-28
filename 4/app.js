const container = document.querySelector('.container');
const generatedArray = document.createElement('p');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');
const p4 = document.createElement('p');

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
	randomLetter === 'A' && sumA++;
	randomLetter === 'B' && sumB++;
	randomLetter === 'C' && sumC++;
	randomLetter === 'D' && sumD++;
}
// console.log(newLettersArray);
// console.log(sumA);
// console.log(sumB);
// console.log(sumC);
// console.log(sumD);
// console.log(sumA + sumB + sumC + sumD);
generatedArray.innerText = newLettersArray;
p1.innerText = `Masyve esančių "A" raidžių skaičius: ${sumA}`;
p2.innerText = `Masyve esančių "B" raidžių skaičius: ${sumB}`;
p3.innerText = `Masyve esančių "C" raidžių skaičius: ${sumC}`;
p4.innerText = `Masyve esančių "D" raidžių skaičius: ${sumD}`;
container.append(generatedArray, p1, p2, p3, p4);
