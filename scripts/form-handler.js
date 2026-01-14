// Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("contactForm");
	form.addEventListener("submit", handleFormSubmit);
});

function showMessage(text, type) {
	const formAlert = document.getElementById("formAlert");
	formAlert.textContent = text;
	formAlert.classList.add(type);

	// Scroll to message
	formAlert.scrollIntoView({ behavior: "smooth", block: "nearest" });

	// Hide message after 5 seconds
	setTimeout(() => {
		formAlert.classList.remove(type);
		formAlert.textContent = "";
	}, 5000);
}

async function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const submitBtn = form.querySelector('button[type="submit"]');
	const formData = new FormData(form);
	formData.append("access_key", "96d06aa1-2f54-448f-baca-9f31face8100");

	// Get form values
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const message = document.getElementById("message").value.trim();

	// Basic validation
	if (!name || !email || !message) {
		showMessage('Please fill in all required fields indicated with a "*"', "error");
		return;
	}

	// Email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		showMessage("Please enter a valid email address.", "error");
		return;
	}

	// Phone number validation
	const phoneRegex = /^[2-9]{1}[0-9]{9}$/;
	if (phone && !phoneRegex.test(phone)) {
		showMessage('Please enter a phone number with the format "2345678901"', "error");
		return;
	}

	// form submission w/web3 forms
	const originalText = submitBtn.textContent;
	submitBtn.textContent = "Sending...";
	submitBtn.disabled = true;

	try {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (response.ok) {
			showMessage("Thank you for your message! I'll get back to you soon.", "success");
			form.reset();
		} else {
			alert("Error: " + data.message);
		}
	} catch (error) {
		alert("Something went wrong. Please try again.");
	} finally {
		submitBtn.textContent = originalText;
		submitBtn.disabled = false;
	}

	// Clear form
	form.reset();
}
