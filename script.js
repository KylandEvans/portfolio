let hbIcon = document.querySelector(".hb-icon");
let navBar = document.querySelector(".nav-bar");
let windowWidth = window.matchMedia("(min-width: 600px)");

function navToggle() {
	if (navBar.style.display == "none") {
		navBar.style.display = "block";
	} else {
		navBar.style.display = "none";
	}
}

function resetMenu() {
	if (window.innerWidth <= 600) {
		navBar.style.display = "none";
	} else if (window.innerWidth > 600) {
		navBar.style.display = "block";
	}
}

hbIcon.addEventListener("click", navToggle);
window.addEventListener("resize", resetMenu);
