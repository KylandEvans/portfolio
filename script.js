const htmlElement = document.getElementsByTagName("html");
const openNavToggle = document.querySelector(".nav-controller");
const closeNavToggle = document.querySelector(".nav-close-container");
const nav = document.querySelector(".nav");

function closeNav() {
	nav.style.display = "none";
	closeNavToggle.style.display = "none";
	openNavToggle.style.display = "flex";
	htmlElement[0].classList.remove("noscroll");
}

function openNav() {
	nav.style.display = "flex";
	openNavToggle.style.display = "none";
	closeNavToggle.style.display = "flex";
	htmlElement[0].classList.add("noscroll");
}

function navWindowResize() {
	htmlElement[0].classList.remove("noscroll");
	if (window.innerWidth > 1024) {
		nav.style.display = "block";
		openNavToggle.style.display = "none";
		closeNavToggle.style.display = "none";
	}
	if (window.innerWidth <= 1024) {
		nav.style.display = "none";
		openNavToggle.style.display = "flex";
		closeNavToggle.style.display = "none";
	}
}

openNavToggle.addEventListener("click", openNav);
closeNavToggle.addEventListener("click", closeNav);
window.addEventListener("resize", navWindowResize);

// Need to add scroll funtianality to scroll to each section.

const navButtons = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".scrollto-section");

for (let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener("click", () => {
		sections[i].scrollIntoView({ behavior: "smooth", block: "start" });
		navWindowResize();
	});
}
