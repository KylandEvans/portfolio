const navToggleOpen = document.querySelector(".nav-open-container");
const navToggleClose = document.querySelector(".nav-close-container");
const navMenu = document.querySelector(".nav");
const homeNavButton = document.getElementById("home-nav-button");
const aboutNavButton = document.getElementById("about-nav-button");
const skillsNavButton = document.getElementById("skills-nav-button");
const projectsNavButton = document.getElementById("projects-nav-button");
const logoLink = document.querySelector(".logo");

function navOpen() {
	navMenu.style.display = "flex";
	navToggleOpen.style.display = "none";
	navToggleClose.style.display = "flex";
}

function navClose() {
	navMenu.style.display = "none";
	navToggleOpen.style.display = "flex";
	navToggleClose.style.display = "none";
}

function resetMenu() {
	if (window.innerWidth <= 550) {
		navToggleOpen.style.display = "flex";
		navMenu.style.display = "none";
	}
	if (window.innerWidth > 550) {
		navMenu.style.display = "flex";
		navToggleOpen.style.display = "none";
		navToggleClose.style.display = "none";
	}
	if (navToggleOpen.style.display === "flex") {
		navToggleClose.style.display = "none";
	} else if (navToggleClose.style.display === "flex") {
		navToggleOpen.style.display = "none";
	}
}

homeNavButton.addEventListener("click", () => {
	window.scrollTo(0, 0);
	resetMenu();
});

aboutNavButton.addEventListener("click", () => {
	if (window.innerWidth > 1000) {
		window.scrollTo(0, 520);
	} else if (window.innerWidth <= 1000 && window.innerWidth > 650) {
		window.scrollTo(0, 520);
	} else if (window.innerWidth <= 650) {
		window.scrollTo(0, 320);
	}
	resetMenu();
});

skillsNavButton.addEventListener("click", () => {
	if (window.innerWidth > 650) {
		window.scrollTo(0, 1530);
	} else if (window.innerWidth <= 650 && window.innerWidth > 450) {
		window.scrollTo(0, 1330);
	} else if (window.innerWidth <= 450) {
		window.scrollTo(0, 1130);
	}
	resetMenu();
});

projectsNavButton.addEventListener("click", () => {
	if (window.innerWidth > 650) {
		window.scrollTo(0, 2290);
	} else if (window.innerWidth <= 650 && window.innerWidth > 450) {
		window.scrollTo(0, 2090);
	} else if (window.innerWidth <= 450) {
		window.scrollTo(0, 1980);
	}
	resetMenu();
});

function goHome() {
	if (window.location.pathname === "./index.html") {
		window.location.href = "./index.html";
	} else {
		window.location.pathname = "../index.html";
	}
}
navToggleOpen.addEventListener("click", navOpen);
navToggleClose.addEventListener("click", navClose);
logoLink.addEventListener("click", goHome);
window.addEventListener("resize", resetMenu);

console.log(window.location.pathname);
