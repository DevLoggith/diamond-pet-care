// Split JavaScript into logical modules based on functionality
// https://github.com/DevLoggith/diamond-pet-care/issues/5#issue-3786946763

// hamburger menu
document.addEventListener("DOMContentLoaded", () => {
	const hamburger = document.getElementById("hamburger");
	const navMenu = document.getElementById("navMenu");
	const mobileOverlay = document.getElementById("mobileOverlay");
	const navLinks = navMenu.querySelectorAll("a");

	// Toggle menu
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("active");
		navMenu.classList.toggle("active");
		mobileOverlay.classList.toggle("active");
	});

	// Close menu when clicking overlay
	mobileOverlay.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
		mobileOverlay.classList.remove("active");
	});

	// Close menu when clicking a link
	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			hamburger.classList.remove("active");
			navMenu.classList.remove("active");
			mobileOverlay.classList.remove("active");
		});
	});
});

// highlight current page in navigation
document.addEventListener("DOMContentLoaded", function () {
	const currentPage = window.location.pathname.split("/").pop() || "index.html";
	const navLinks = document.querySelectorAll(".nav-links a");

	navLinks.forEach((link) => {
		const linkPage = link.getAttribute("href");
		link.classList.remove("active");

		if (linkPage === currentPage) {
			link.classList.add("active");
		}
	});
});
