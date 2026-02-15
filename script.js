// Form redirect handler for Netlify form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Let Netlify handle the submission, then redirect
            setTimeout(function() {
                window.location.href = './confirmation.html';
            }, 500);
        });
    }
});
