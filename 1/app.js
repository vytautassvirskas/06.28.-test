const container = document.querySelector('.container');
const text = document.createElement('p');

const calculateAge = () => {
	const name = 'Vytautas';
	const surname = 'Svirskas';
	const birthYear = 1989;
	const currentYear = 2022;
	return `Aš esu ${name} ${surname}. Man yra ${currentYear - birthYear} metai`;
};

text.append(calculateAge());
container.append(text);
