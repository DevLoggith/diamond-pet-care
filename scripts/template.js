// TODO: create brand graphic before brand text

document.addEventListener('DOMContentLoaded', () => {
    // insert nav
    document.getElementById('navbar').innerHTML = `
        <div class="container">
            <div class="nav-brand">🐾 Diamond Pet Care</div>
            <ul class="nav-links list-unstyled">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
    `;
    
    // insert footer
    document.getElementById('footer').innerHTML = `
        <div class="container">
            <p>&copy; 2026 Diamond Pet Care</p>
        </div>
    `;
});
