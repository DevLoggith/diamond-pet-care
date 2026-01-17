// TODO: Find/create brand graphic to go with brand text
// https://github.com/DevLoggith/diamond-pet-care/issues/3#issue-3786914746

document.addEventListener("DOMContentLoaded", () => {
	// insert nav
	document.getElementById("navbar").innerHTML = `
        <div class="container">
            <div class="nav-brand">🐾 Diamond Pet Care</div>
            <button id="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul id="navMenu" class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="about.html">About</a></li>
            </ul>
            <div id="mobileOverlay"></div>
        </div>
    `;

	// insert footer
	document.getElementById("footer").innerHTML = `
        <div class="container">
            <p>&copy; 2026 Diamond Pet Care</p>
        </div>
    `;
});
