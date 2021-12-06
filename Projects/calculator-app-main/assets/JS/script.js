const answerDisplay = document.querySelector(".answer-display");
const problemDisplay = document.querySelector(".problem-display");
const history = document.querySelector(".history-content");
const clearHistoryButton = document.querySelector(".clear-history");
const deleteButton = document.querySelector(".delete-button");
let tempVar;

//Current Issues:

//What is left to add:

//Working on Now:

function clearEntry() {
	let answerDisplayChildren = answerDisplay.childNodes;
	for (let child of answerDisplayChildren) {
		child.remove();
	}
}

function convertToNumber(num) {
	let parsedNum;
	let returnNum;
	if (num.includes(",")) {
		parsedNum = num.replaceAll(",", "");
		returnNum = Number.parseFloat(parsedNum);
	} else {
		returnNum = Number.parseFloat(num);
	}
	return returnNum;
}

function displayButtonPress(button) {
	button.classList.add("clicked");
	let timeout = "1s";
	setTimeout(() => {
		button.classList.remove("clicked");
	}, timeout);
}

function addToAnswerDisplay(numStr) {
	let splitStr = [];
	let numStr2 = "";
	if (numStr.includes(".")) {
		splitStr = numStr.split(".");
		numStr = splitStr[0];
		numStr2 = splitStr[1];
		document.querySelector(".decimal").disabled = true;
	}
	clearEntry();

	if (numStr.length <= 3) {
		clearEntry();
		answerDisplay.append(numStr);
	} else if (numStr.length === 4) {
		clearEntry();
		answerDisplay.append(numStr.substring(0, 1) + "," + numStr.substring(1));
	} else if (numStr.length === 5) {
		clearEntry();
		answerDisplay.append(numStr.substring(0, 2) + "," + numStr.substring(2));
	} else if (numStr.length === 6) {
		clearEntry();
		answerDisplay.append(numStr.substring(0, 3) + "," + numStr.substring(3));
	} else if (numStr.length === 7) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 1) +
				"," +
				numStr.substring(1, 4) +
				"," +
				numStr.substring(4)
		);
	} else if (numStr.length === 8) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 2) +
				"," +
				numStr.substring(2, 5) +
				"," +
				numStr.substring(5)
		);
	} else if (numStr.length === 9) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 3) +
				"," +
				numStr.substring(3, 6) +
				"," +
				numStr.substring(6)
		);
	} else if (numStr.length === 10) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 1) +
				"," +
				numStr.substring(1, 4) +
				"," +
				numStr.substring(4, 7) +
				"," +
				numStr.substring(7)
		);
	} else if (numStr.length === 11) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 2) +
				"," +
				numStr.substring(2, 5) +
				"," +
				numStr.substring(5, 8) +
				"," +
				numStr.substring(8)
		);
	} else if (numStr.length === 12) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 3) +
				"," +
				numStr.substring(3, 6) +
				"," +
				numStr.substring(6, 9) +
				"," +
				numStr.substring(9)
		);
	} else if (numStr.length === 13) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 1) +
				"," +
				numStr.substring(1, 4) +
				"," +
				numStr.substring(4, 7) +
				"," +
				numStr.substring(7, 10) +
				"," +
				numStr.substring(10)
		);
	} else if (numStr.length === 14) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 2) +
				"," +
				numStr.substring(2, 5) +
				"," +
				numStr.substring(5, 8) +
				"," +
				numStr.substring(8, 11) +
				"," +
				numStr.substring(11)
		);
	} else if (numStr.length === 15) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 3) +
				"," +
				numStr.substring(3, 6) +
				"," +
				numStr.substring(6, 9) +
				"," +
				numStr.substring(9, 12) +
				"," +
				numStr.substring(12)
		);
	} else if (numStr.length === 16) {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 1) +
				"," +
				numStr.substring(1, 4) +
				"," +
				numStr.substring(4, 7) +
				"," +
				numStr.substring(7, 10) +
				"," +
				numStr.substring(10, 13) +
				"," +
				numStr.substring(13)
		);
	} else {
		clearEntry();
		answerDisplay.append(
			numStr.substring(0, 1) +
				"," +
				numStr.substring(1, 4) +
				"," +
				numStr.substring(4, 7) +
				"," +
				numStr.substring(7, 10) +
				"," +
				numStr.substring(10, 13) +
				"," +
				numStr.substring(13)
		);
	}
	if (numStr2 !== "") {
		answerDisplay.append(`.${numStr2}`);
	}
}

function clearHistory() {
	let historyContent = document.querySelectorAll(".history-wrapper");
	for (let item of historyContent) {
		item.remove();
	}
	clearHistoryButton.style.display = "none";
}

function addToProblemDisplay(num1, operation, currStr, num2 = "") {
	let problemDisplay = document.querySelector(".problem-display");
	if (currStr === num1 && num2 === "") {
		try {
			problemDisplay.lastChild.remove();
		} catch {}
		problemDisplay.append(`${num1} ${operation}`);
	} else if (currStr === num2 && num2 !== "") {
		try {
			problemDisplay.firstChild.remove();
			problemDisplay.lastChild.remove();
		} catch {}
		problemDisplay.append(`${num1} ${operation} ${num2} = `);
	} else if (currStr === num2 && num2 === "") {
		try {
			problemDisplay.lastChild.remove();
			problemDisplay.lastChild.remove();
		} catch {}
		problemDisplay.append(`${num1} ${operation}`);
	}
}

function main() {
	const allButtons = document.querySelectorAll(".button");
	const numButtons = document.querySelectorAll(".number-button");
	const operandButtons = document.querySelectorAll(".operand-button");
	const equals = document.querySelector(".equals-button");
	const clearButton = document.querySelector(".clear");
	const decimalPoint = document.querySelector(".decimal");
	const clearEntryBtn = document.querySelector(".clear-entry");
	const percentageButton = document.querySelector(".percentage");
	const squareBtn = document.querySelector(".exponent");
	const squareRootButton = document.querySelector(".sqrt");
	const fraction = document.querySelector(".fraction");
	const historyBtn = document.querySelector(".history-header");
	const memoryBtn = document.querySelector(".memory-header");
	const memoryContent = document.querySelector(".memory-content");
	const memory = document.querySelector(".memory-content");
	const memClear = document.querySelector(".mem-clear");
	const memRecall = document.querySelector(".mem-recall");
	const memAdd = document.querySelector(".mem-add");
	const memSubtract = document.querySelector(".mem-subtract");
	const memStore = document.querySelector(".mem-store");
	const posNegBtn = document.querySelector(".pos-neg");
	let num1 = "";
	let num2 = "";
	let operation = "";
	let currStr = num1;

	function clear() {
		num1 = "";
		num2 = "";
		operation = "";
		currStr = num1;
		try {
			answerDisplay.lastChild.remove();
			answerDisplay.lastChild.remove();
		} catch {}
		try {
			problemDisplay.lastChild.remove();
		} catch {}
		decimalPoint.disabled = false;
		answerDisplay.append("0");
	}

	for (let button of numButtons) {
		button.addEventListener("click", () => {
			if (currStr === num1 && currStr.length <= 16) {
				num1 = num1.substring(0) + button.value;
				currStr = num1;
				addToAnswerDisplay(num1);
			} else if (currStr === num2 && currStr.length <= 16) {
				num2 = num2.substring(0) + button.value;
				currStr = num2;
				addToAnswerDisplay(num2);
			}
		});
		displayButtonPress(button);
	}

	for (let operand of operandButtons) {
		operand.addEventListener("click", () => {
			decimalPoint.disabled = false;
			if (currStr === num1) {
				operation = operand.value;
				addToProblemDisplay(num1, operation, currStr);
				currStr = "";
				currStr = num2;
			} else {
				if (currStr === num2 && num2 !== "") {
					equals.click();
					operation = operand.value;
					addToProblemDisplay(num1, operation, currStr);
					currStr = num2;
					addToAnswerDisplay(num1);
				} else if (currStr === num2 && num2 === "") {
					operation = operand.value;
					addToProblemDisplay(num1, operation, currStr);
				}
			}
		});
	}
	function addHistoryHandler() {
		let historyItems = document.querySelectorAll(".history-wrapper");
		for (let item of historyItems) {
			item.addEventListener("click", e => {
				problemDisplay.innerText = e.target.firstChild.innerText;
				addToAnswerDisplay(e.target.lastChild.innerText);
				num1 = e.target.lastChild.innerText;
				currStr = num2;
			});
		}
	}

	function addToHistory(calcNum1, calcNum2, operation, answer) {
		let newHistoryContent = document.createElement("div");
		newHistoryContent.setAttribute("class", "history-wrapper");
		history.prepend(newHistoryContent);
		let newHistoryProblem = document.createElement("div");
		newHistoryProblem.setAttribute("class", "history-problem");
		newHistoryContent.append(newHistoryProblem);
		let newHistoryAnswer = document.createElement("div");
		newHistoryAnswer.setAttribute("class", "history-answer");
		newHistoryContent.append(newHistoryAnswer);
		newHistoryProblem.innerText = `${calcNum1} ${operation} ${calcNum2} = `;
		newHistoryAnswer.innerText = `${answer}`;
		clearHistoryButton.style.display = "flex";
		addHistoryHandler();
	}
	percentageButton.addEventListener("click", () => {
		if (currStr === num1) {
			try {
				answerDisplay.lastChild.remove();
			} catch {}
			problemDisplay.append("0");
			answerDisplay.append("0");
			num1 = "";
			num2 = "";
			currStr = "";
		} else if (currStr === num2) {
			let number1 = Number.parseFloat(num1);
			let number2 = Number.parseFloat(num2);
			let percentage = (number2 * number1) / 100;
			let strPercentage = percentage.toString();
			num2 = percentage;
			currStr = num2;
			addToAnswerDisplay(strPercentage);
		}
	});
	clearButton.addEventListener("click", clear);
	clearEntryBtn.addEventListener("click", () => {
		if (currStr === num1) {
			num1 = "";
			currStr = num1;
			clearEntry();
		} else if (currStr === num2) {
			num2 = "";
			currStr = num2;
			clearEntry();
		}
	});
	squareBtn.addEventListener("click", () => {
		try {
			problemDisplay.lastChild.remove();
			problemDisplay.lastChild.remove();
		} catch {}
		let squared = Number.parseFloat(num1) * Number.parseFloat(num1);
		problemDisplay.append(`sqr(${num1})`);
		addToAnswerDisplay(squared.toString());
	});
	clearHistoryButton.addEventListener("click", clearHistory);
	equals.addEventListener("click", () => {
		if (num2 === "") {
			num2 = num1;
		}
		let calcNum1 = Number.parseFloat(num1);
		let calcNum2 = Number.parseFloat(num2);
		let answer;
		if (operation === "+") {
			answer = calcNum1 + calcNum2;
		} else if (operation === "-") {
			answer = calcNum1 - calcNum2;
		} else if (operation === "*") {
			answer = calcNum1 * calcNum2;
		} else if (operation === "/") {
			answer = calcNum1 / calcNum2;
		}

		let displayAnswer = answer.toString();

		addToAnswerDisplay(displayAnswer);
		if (answer < Math.pow(2, 53) - 1) {
			if (Number.isInteger(answer)) {
				addToAnswerDisplay(displayAnswer);
			} else {
				let decimalNum = answer.toString().split(".");
				addToAnswerDisplay(decimalNum[0]);
				answerDisplay.append(`.${decimalNum[1]}`);
			}
		} else {
			clearEntry();
			answerDisplay.append(answer.toExponential());
		}

		addToProblemDisplay(num1, operation, currStr, num2);

		num1 = "";
		num2 = "";
		currStr = "";
		num1 = answer.toString();
		currStr = num2;
		decimalPoint.disabled = false;
		addToHistory(calcNum1, calcNum2, operation, answer);
	});

	window.addEventListener("keydown", e => {
		if (
			(e.code === "Digit8" && e.shiftKey === true) ||
			e.code === "NumpadMultiply"
		) {
			displayButtonPress(allButtons[11]);
			allButtons[11].click();
		} else if (
			(e.code === "Equal" && e.shiftKey === true) ||
			e.code === "NumpadAdd"
		) {
			displayButtonPress(allButtons[19]);
			allButtons[19].click();
		} else if (e.code === "Minus" || e.code === "NumpadSubtract") {
			displayButtonPress(allButtons[15]);
			allButtons[15].click();
		} else if (e.code === "Slash" || e.code === "NumpadDivide") {
			displayButtonPress(allButtons[7]);
			allButtons[7].click();
		} else if (e.code === "NumpadEnter" || e.code === "Equal") {
			e.preventDefault();
			displayButtonPress(allButtons[23]);
			allButtons[23].click();
		} else if (e.code === "Enter") {
			e.preventDefault();
			displayButtonPress(allButtons[23]);
			allButtons[23].click();
		} else if (e.code === "NumpadDecimal" || e.code === "Period") {
			displayButtonPress(allButtons[22]);
			allButtons[22].click();
		} else if (e.code === "Backspace") {
			displayButtonPress(allButtons[3]);
			allButtons[3].click();
		} else if (e.code === "Numpad7" || e.code === "Digit7") {
			displayButtonPress(allButtons[8]);
			allButtons[8].click();
		} else if (e.code === "Numpad8" || e.code === "Digit8") {
			displayButtonPress(allButtons[9]);
			allButtons[9].click();
		} else if (e.code === "Numpad9" || e.code === "Digit9") {
			displayButtonPress(allButtons[10]);
			allButtons[10].click();
		} else if (e.code === "Numpad4" || e.code === "Digit4") {
			displayButtonPress(allButtons[12]);
			allButtons[12].click();
		} else if (e.code === "Numpad5" || e.code === "Digit5") {
			displayButtonPress(allButtons[13]);
			allButtons[13].click();
		} else if (e.code === "Numpad6" || e.code === "Digit6") {
			displayButtonPress(allButtons[14]);
			allButtons[14].click();
		} else if (e.code === "Numpad1" || e.code === "Digit1") {
			displayButtonPress(allButtons[16]);
			allButtons[16].click();
		} else if (e.code === "Numpad2" || e.code === "Digit2") {
			displayButtonPress(allButtons[17]);
			allButtons[17].click();
		} else if (e.code === "Numpad3" || e.code === "Digit3") {
			displayButtonPress(allButtons[18]);
			allButtons[18].click();
		} else if (e.code === "Numpad0" || e.code === "Digit0") {
			displayButtonPress(allButtons[21]);
			allButtons[21].click();
		}
	});

	deleteButton.addEventListener("click", () => {
		if (currStr === num1) {
			num1 = num1.substring(0, num1.length - 1);
			addToAnswerDisplay(num1);
			currStr = num1;
		} else if (currStr === num2) {
			num2 = num2.substring(0, num2.length - 1);
			addToAnswerDisplay(num2);
			currStr = num2;
		}
	});

	squareRootButton.addEventListener("click", () => {
		let squareRoot = Math.sqrt(Number.parseFloat(num1));
		addToAnswerDisplay(squareRoot.toString());
		problemDisplay.append(`sqrt(${squareRoot})`);
		num1 = "";
		currStr = num1;
	});

	fraction.addEventListener("click", () => {
		let numberNum1 = 1 / Number.parseFloat(num1);
		addToAnswerDisplay(numberNum1.toString());
		problemDisplay.append(`1 / (${num1})`);
	});

	historyBtn.addEventListener("click", () => {
		history.style.display = "block";
		historyBtn.classList.add("active");
		memoryContent.style.display = "none";
		memoryBtn.classList.remove("active");
	});

	memoryBtn.addEventListener("click", () => {
		memoryBtn.classList.add("active");
		memoryContent.style.display = "block";
		history.style.display = "none";
		historyBtn.classList.remove("active");
	});

	memStore.addEventListener("click", () => {
		let newMemoryContent = document.createElement("div");
		newMemoryContent.setAttribute("class", "memory-wrapper");
		memoryContent.prepend(newMemoryContent);
		let newMemoryAnswer = document.createElement("div");
		newMemoryAnswer.setAttribute("class", "memory-answer");
		newMemoryContent.append(newMemoryAnswer);
		newMemoryAnswer.innerText = `${convertToNumber(answerDisplay.innerText)}`;
		memClear.disabled = false;
		memRecall.disabled = false;
		memClear.classList.remove("disabled");
		memRecall.classList.remove("disabled");
		let memItem = document.querySelectorAll(".memory-wrapper");
		for (let item of memItem) {
			item.addEventListener("click", e => {
				clear();
				addToAnswerDisplay(e.target.innerText);
				num1 = parseFloat(e.target.innerText);
			});
		}
	});

	memClear.addEventListener("click", () => {
		let memoryItems = document.querySelectorAll(".memory-wrapper");
		for (let item of memoryItems) {
			item.remove();
		}
		memClear.disabled = true;
		memRecall.disabled = true;
		memClear.classList.add("disabled");
		memRecall.classList.add("disabled");
	});
	memAdd.addEventListener("click", () => {
		let memItem = document.querySelector(".memory-answer");
		let parsedMemItem;
		let parsedAnswerDisplayItem;
		let numMemItem;
		let numAnswerDisplayItem;
		if (memItem.innerText.includes(",")) {
			parsedMemItem = memItem.innerText.replaceAll(",", "");
			numMemItem = Number.parseFloat(parsedMemItem);
		} else {
			numMemItem = Number.parseFloat(memItem.innerText);
		}
		if (answerDisplay.innerText.includes(",")) {
			parsedAnswerDisplayItem = answerDisplay.innerText.replaceAll(",", "");
			numAnswerDisplayItem = Number.parseFloat(parsedAnswerDisplayItem);
		} else {
			numAnswerDisplayItem = Number.parseFloat(answerDisplay.innerText);
		}
		memItem.innerText = numMemItem + numAnswerDisplayItem;
	});

	memSubtract.addEventListener("click", () => {
		let memItem = document.querySelector(".memory-answer");
		let parsedMemItem;
		let parsedAnswerDisplayItem;
		let numMemItem;
		let numAnswerDisplayItem;
		if (memItem.innerText.includes(",")) {
			parsedMemItem = memItem.innerText.replaceAll(",", "");
			numMemItem = Number.parseFloat(parsedMemItem);
		} else {
			numMemItem = Number.parseFloat(memItem.innerText);
		}
		if (answerDisplay.innerText.includes(",")) {
			parsedAnswerDisplayItem = answerDisplay.innerText.replaceAll(",", "");
			numAnswerDisplayItem = Number.parseFloat(parsedAnswerDisplayItem);
		} else {
			numAnswerDisplayItem = Number.parseFloat(answerDisplay.innerText);
		}
		memItem.innerText = numMemItem - numAnswerDisplayItem;
	});

	memRecall.addEventListener("click", () => {
		clear();
		let memItem = document.querySelector(".memory-answer");
		addToAnswerDisplay(memItem.innerText);
	});

	posNegBtn.addEventListener("click", e => {
		if (currStr === num1) {
			if (convertToNumber(num1) > 0) {
				num1 = "-" + num1.substring(0);
				currStr = num1;
				answerDisplay.innerText = num1;
			} else if (convertToNumber(num1) < 0) {
				if (num1.includes("-")) {
					num1 = num1.replace("-", "");
					currStr = num1;
					answerDisplay.innerText = num1;
				}
			}
		} else if (currStr === num2) {
			if (convertToNumber(num2) > 0) {
				num2 = "-" + num2.substring(0);
				currStr = num2;
				answerDisplay.innerText = num2;
			} else if (convertToNumber(num2) < 0) {
				if (num2.includes("-")) {
					num2 = num2.replace("-", "");
					currStr = num2;
					answerDisplay.innerText = num2;
				}
			}
		}
	});

	function openCloseHistory() {
		if (history.style.display === "none") {
			history.style.display = "block";
		} else if (history.style.display === "block") {
			history.style.display = "none";
		} else {
			history.style.display = "block";
		}
	}

	function windowChange() {
		if (window.innerWidth > 800) {
			history.style.display = "block";
		} else {
			history.style.display = "none";
		}
	}
	const historyIcon = document.querySelector(".history-icon");
	historyIcon.addEventListener("click", openCloseHistory);
	window.addEventListener("resize", windowChange);

	function openCloseMemory() {
		if (memory.style.display === "none") {
			memory.style.display = "block";
		} else if (memory.style.display === "block") {
			memory.style.display = "none";
		} else {
			memory.style.display = "block";
		}
	}
	const memAccess = document.querySelector(".mem-access");
	memAccess.addEventListener("click", openCloseMemory);
}

main();
