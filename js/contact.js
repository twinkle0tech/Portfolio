document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const formMessage = document.getElementById('form-message');
            const originalBtnText = submitBtn.textContent;
            
            try {
                // Show loading state
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                submitBtn.classList.add('loading');
                formMessage.textContent = '';
                formMessage.className = '';
                
                // Get form data
                const formData = new FormData(contactForm);
                
                // Send to PHP
                const response = await fetch('submit.php', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    formMessage.textContent = result.message;
                    formMessage.className = 'success-message';
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formMessage.textContent = '';
                        formMessage.className = '';
                    }, 5000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }
            } catch (error) {
                // Show error message
                formMessage.textContent = error.message;
                formMessage.className = 'error-message';
            } finally {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                submitBtn.classList.remove('loading');
            }
        });
    }
});