// ==========================================
// CONTACT FORM HANDLER
// ==========================================
// TODO: redo code for handling form submissions
// TODO: create hamburger menu toggle for  mobile screens
function showMessage(text, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList = "";
        formMessage.textContent = "";
    }, 5000);
}

function handleFormSubmit() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Basic validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    // In a real application, you would send this data to a server
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
    document.getElementById('contactForm').reset();
}

// ==========================================
// HIGHLIGHT CURRENT PAGE IN NAVIGATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Remove active class from all links first
        link.classList.remove('active');
        
        // Add active class to current page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// MOBILE MENU TOGGLE (Optional Enhancement)
// ==========================================

// You can add a mobile hamburger menu here if needed
// This is a placeholder for future enhancement

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.dataset.originalText = button.textContent;
        button.textContent = 'Sending...';
    } else {
        button.disabled = false;
        button.textContent = button.dataset.originalText;
    }
}

// Example usage in form submission (commented out):
// const submitButton = document.querySelector('.contact-form button');
// setButtonLoading(submitButton, true);
// // ... perform async operation
// setButtonLoading(submitButton, false);