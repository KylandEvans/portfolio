const navToggle = document.querySelector(".mobile-nav-toggle");
const navClose = document.querySelector(".X");
const navButtons = document.querySelector(".nav-buttons");
const productButton = document.getElementById("Product-button");
const companyButton = document.getElementById("Company-button");
const connectButton = document.getElementById("Connect-button");
const productContent = document.getElementById("Product-content");
const companyContent = document.getElementById("Company-content");
const connectContent = document.getElementById("Connect-content");
const prodcutArrow = document.getElementById("product-arrow-dark");
const companyArrow = document.getElementById("company-arrow-dark");
const connectArrow = document.getElementById("connect-arrow-dark");
const closeButton = document.querySelectorAll(".X");
const signupModal = document.querySelector(".signup-modal-wrapper");
const loginModal = document.querySelector(".login-modal-wrapper");
const loginButton = document.querySelectorAll(".login-button");
const signUpButton = document.querySelectorAll(".sign-up-buttons");
const signUpSubmit = document.getElementById("signup-submit");

function toggleNav() {
	if (navButtons.style.display === "none") {
		navButtons.style.display = "flex";
	} else {
		navButtons.style.display = "none";
	}
}

function resetMenu() {
	if (window.innerWidth <= 800) {
		navButtons.style.display = "none";
	} else if (window.innerWidth > 800) {
		navButtons.style.display = "flex";
	}
}

function toggleProduct() {
	if (productContent.style.display === "block") {
		productContent.style.display = "none";
		prodcutArrow.style.transform = "rotate(-180deg)";
	} else {
		productContent.style.display = "block";
		prodcutArrow.style.transform = "rotate(-180deg)";
	}
	companyContent.style.display = "none";
	connectContent.style.display = "none";
}

function toggleCompany() {
	if (companyContent.style.display === "block") {
		companyContent.style.display = "none";
		companyArrow.style.transform = "rotate(-180deg)";
	} else {
		companyContent.style.display = "block";
		companyArrow.style.transform = "rotate(180deg)";
	}
	productContent.style.display = "none";
	connectContent.style.display = "none";
}

function toggleConnect() {
	if (connectContent.style.display === "block") {
		connectContent.style.display = "none";
	} else {
		connectContent.style.display = "block";
	}
	productContent.style.display = "none";
	companyContent.style.display = "none";
}

function close() {
	signupModal.style.display = "none";
	loginModal.style.display = "none";
}

function openSignUp() {
	signupModal.style.display = "flex";
}

function openLogin() {
	loginModal.style.display = "flex";
}

for (button of loginButton) {
	button.addEventListener("click", openLogin);
}

for (button of signUpButton) {
	button.addEventListener("click", openSignUp);
}

for (button of closeButton) {
	button.addEventListener("click", close);
}

productButton.addEventListener("click", toggleProduct);
companyButton.addEventListener("click", toggleCompany);
connectButton.addEventListener("click", toggleConnect);

navToggle.addEventListener("click", toggleNav);
window.addEventListener("resize", resetMenu);

function formCheck() {
	const form = document.getElementById("form");
	const firstName = document.getElementById("firstName");
	const lastName = document.getElementById("lastName");
	const email = document.getElementById("email");
	const password = document.getElementById("password");
	const passwordValidate = document.getElementById("passwordValidate");
	const errorName = document.getElementById("error-name");
	const errorEmail = document.getElementById("error-email");
	const errorPassword = document.getElementById("error-password");
	const errorPasswordValidate = document.getElementById(
		"error-passwordValidate"
	);
	let lowerCaseLetter = /[a-z]/g;
	let uppperCaseLetter = /[A-Z]/g;
	let numbers = /[0-9]/g;

	let pass = false;

	if (
		firstName.value.trim() === "" ||
		firstName.value.trim() == null ||
		lastName.value.trim() === "" ||
		firstName.value.trim() == null
	) {
		errorName.style.display = "flex";
		errorName.innerText = "You must enter your Fisrt and Last name.";
		pass = false;
	} else if (email.value.trim() === "" || email.value.trim() == null) {
		errorEmail.style.display = "flex";
		errorEmail.innerText = "You must enter an email address.";
		pass = false;
	} else if (!email.value.includes("@") || !email.value.includes(".com")) {
		errorEmail.style.display = "flex";
		errorEmail.innerText = "You must enter a valid email address.";
		pass = false;
	} else if (password.value === "" || password.value == null) {
		errorPassword.style.display = "flex";
		errorPassword.innerText = "You must enter a password.";
	} else if (!password.value.match(lowerCaseLetter)) {
		errorPassword.style.display = "flex";
		errorPassword.innerText = "You must have at least 1 lower case letter";
	} else if (!password.value.match(uppperCaseLetter)) {
		errorPassword.style.value = "flex";
		errorPassword.innerText = "You must have at least 1 upper case letter";
	} else if (!password.value.match(numbers)) {
		errorPassword.style.value = "flex";
		errorPassword.innerText = "You must have at least 1 number";
	} else if (password.value.length <= 6 || password.value.length >= 20) {
		errorPassword.style.display = "flex";
		errorPassword.innerText =
			"Password must be more than 6 characters and less than 20 characters";
	} else if (
		!password.value.includes("!") &&
		!password.value.includes("@") &&
		!password.value.includes("#") &&
		!password.value.includes("%") &&
		!password.value.includes("^") &&
		!password.value.includes("&") &&
		!password.value.includes("*")
	) {
		errorPassword.style.display = "flex";
		errorPassword.innerText =
			"Password must have at least one of the following characters (! , @ , # , $ , % , ^ , & ,*)";
	} else if (passwordValidate.value !== password.value) {
		errorPasswordValidate.style.display = "flex";
		errorPasswordValidate.innerText = "Passwords do not match.";
	} else {
		errorName.style.display = "none";
		errorEmail.style.display = "none";
		errorPassword.style.display = "none";
		errorPasswordValidate.style.display = "none";
		form.reset();
		window.location.href = "./signup.html";
	}
}
signUpSubmit.addEventListener("click", e => {
	e.preventDefault();
	formCheck();
});

console.log("This is a test");
