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

function validateEmail(email) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}

function validatePhoneNumber(phone) {
	if (!phone) return true;
	const phoneRegex = /^[2-9]{1}[0-9]{9}$/;
	return phoneRegex.test(phone);
}

function validateForm(name, email, phone, message) {
	if (!name || !email || !message) {
		showMessage('Please fill in all required fields indicated with a "*"', "error");
		return false;
	}

	if (!validateEmail(email)) {
		showMessage("Please enter a valid email address", "error");
		return false;
	}

	if (!validatePhoneNumber(phone)) {
		showMessage('Please enter a phone number with the format "2345678901"', "error", "");
		return false;
	}

	return true;
}

async function submitForm(formData, submitBtn) {
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
			return true;
		} else {
			showMessage("Error: " + data.message, "error");
			return false;
		}
	} catch (error) {
		showMessage("Something went wrong. Please try again.", "error");
		return false;
	} finally {
		submitBtn.textContent = originalText;
		submitBtn.disabled = false;
	}
}

async function handleFormSubmit(event) {
	event.preventDefault();
	const form = event.target;
	const submitBtn = form.querySelector('button[type="submit"]');

	// Get & sanitize form values
	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const message = document.getElementById("message").value.trim();

	if (!validateForm(name, email, phone, message)) {
		return;
	}

	const formData = new FormData(form);
	formData.append("access_key", "96d06aa1-2f54-448f-baca-9f31face8100");

	const success = await submitForm(formData, submitBtn);

	if (success) {
		form.reset();
	}
}
