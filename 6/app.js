const container = document.querySelector('.container');
const generatedArray = document.createElement('p');

const randomNumberGenerator = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const numbersArray = [];

for (let i = 0; i < 10; i++) {
	if (i === 0) {
		numbersArray.push(randomNumberGenerator(5, 25));
	} else if (i === 1) {
		numbersArray.push(randomNumberGenerator(5, 25));
	} else if (i === 2) {
		numbersArray.push(numbersArray[0] + numbersArray[1]);
	} else if (i === 3) {
		numbersArray.push(numbersArray[1] + numbersArray[2]);
	} else if (i === 4) {
		numbersArray.push(numbersArray[2] + numbersArray[3]);
	} else if (i === 5) {
		numbersArray.push(numbersArray[3] + numbersArray[4]);
	} else if (i === 6) {
		numbersArray.push(numbersArray[4] + numbersArray[5]);
	} else if (i === 7) {
		numbersArray.push(numbersArray[5] + numbersArray[6]);
	} else if (i === 8) {
		numbersArray.push(numbersArray[6] + numbersArray[7]);
	} else if (i === 9) {
		numbersArray.push(numbersArray[7] + numbersArray[8]);
	}
}
console.log(numbersArray);
generatedArray.innerText = `Sugeneruoto masyvo skaičiai: ${numbersArray}`;
container.append(generatedArray);
