// TODO: Redo code for handling form submissions
// https://github.com/DevLoggith/diamond-pet-care/issues/2#issue-3786910496

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
});

function showMessage(text, type) {
    const formAlert = document.getElementById('formAlert');
    formAlert.textContent = text;
    formAlert.classList.add(type);
    
    // Scroll to message
    formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formAlert.classList.remove(type);
        formAlert.textContent = "";
    }, 5000);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields indicated with a "*"', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

     // Phone number validation
    const phoneRegex = /^[2-9]{1}[0-9]{9}$/
    if (phone && !phoneRegex.test(phone)) {
        showMessage('Please enter a phone number with the format "2345678901"', 'error');
        return;
    }
    
    // Simulate form submission
    // In production send via web3 forms
    console.log('Form submitted with data:', {
        name,
        email,
        phone,
        service,
        message
    });
    
    // Show success message
    showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
    
    // Clear form
    form.reset();
}
