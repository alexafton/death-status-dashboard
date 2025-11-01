// JavaScript for Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light-mode') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        localStorage.setItem('theme', 'dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// JavaScript for Contact Form (using EmailJS)
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    // Initialize EmailJS with your public key
    // NOTE: Replace 'YOUR_EMAILJS_PUBLIC_KEY' with your actual key
    // emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        formStatus.textContent = 'Sending...';
        formStatus.style.color = '#e50914'; // Use dark accent color for sending/error

        // This is a placeholder for the actual EmailJS send function.
        // To make this work, you need to uncomment the emailjs.init line above
        // and replace the placeholder with the actual EmailJS code:
        /*
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function() {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = '#00cc00'; // Green for success
                contactForm.reset();
            }, function(error) {
                formStatus.textContent = 'Failed to send message. Please try again later.';
                console.error('FAILED...', error);
            });
        */

        // Simulated success for demonstration
        setTimeout(() => {
            formStatus.textContent = 'Message sent successfully! (Simulated)';
            formStatus.style.color = '#00cc00'; // Green for success
            contactForm.reset();
        }, 1500);
    });
}
