const container = document.querySelector('.container');
const text = document.createElement('p');

function generateRandomString(stringLength) {
	const generatedArray = [];
	const lowerCaseLetters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	const randomLetterGenerator = () => {
		return lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
	};

	console.log(randomLetterGenerator());
	for (let i = 0; i < stringLength; i++) {
		let randomLetter = randomLetterGenerator();
		generatedArray.push(randomLetter.toUpperCase());
	}
	console.log(generatedArray);
	return generatedArray.join('');
}
const generatedString = generateRandomString(5);
console.log(generatedString);
text.innerText = `sugeneruotas splatazodis: ${generatedString}`;
container.append(text);
