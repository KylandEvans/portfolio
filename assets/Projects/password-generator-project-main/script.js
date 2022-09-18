const numsArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowerCaseLettersArr = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

const uppperCaseLettersArr = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

const standardCharsArr = [
	"!",
	"@",
	"#",
	"$",
	"%",
	"^",
	"&",
	"*",
	"?",
	"_",
	"-",
	"+",
	"=",
];

const ambiguousCharsArr = [
	"`",
	"~",
	"(",
	")",
	"{",
	"}",
	"[",
	"]",
	"|",
	"\\",
	":",
	";",
	'"',
	"'",
	"<",
	">",
	",",
	".",
	"/",
];

const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeNumbers = document.getElementById("number");
const includeStandardCharacters = document.getElementById("standard");
const includeAmbiguousCharacters = document.getElementById("ambiguous");
const passLengthSelect = document.getElementById("passLength");
const dropdownList = document.getElementById("passLength");

const generateButton = document.getElementById("generate");
const output = document.getElementById("output");

function getUserSettings(pickFromArr) {
	if (includeLowercase.checked) {
		for (let i = 0; i < lowerCaseLettersArr.length; i++) {
			pickFromArr.push(lowerCaseLettersArr[i]);
		}
	}
	if (includeUppercase.checked) {
		for (let i = 0; i < uppperCaseLettersArr.length; i++) {
			pickFromArr.push(uppperCaseLettersArr[i]);
		}
	}
	if (includeNumbers.checked) {
		for (let i = 0; i < numsArr.length; i++) {
			pickFromArr.push(numsArr[i]);
		}
	}
	if (includeStandardCharacters.checked) {
		for (let i = 0; i < standardCharsArr.length; i++) {
			pickFromArr.push(standardCharsArr[i]);
		}
	}
	if (includeAmbiguousCharacters.checked) {
		for (let i = 0; i < ambiguousCharsArr.length; i++) {
			pickFromArr.push(ambiguousCharsArr[i]);
		}
	}
	return pickFromArr;
}

function generateRandomPassword() {
	let max;
	for (let i = 0; i < dropdownList.options.length; i++) {
		if (dropdownList[i].selected) {
			max = dropdownList[i].value;
		}
	}
	let pickFromArr = [];
	getUserSettings(pickFromArr);
	let passArr = [];
	for (let i = 0; i < max; i++) {
		let char = Math.floor(Math.random() * pickFromArr.length);
		passArr.push(pickFromArr[char]);
	}
	let randPass = passArr.join("");
	output.value = randPass;
}

output.addEventListener("click", output.select);
generateButton.addEventListener("click", generateRandomPassword);
