// ==========================================================================
// Saurabh Pandey — Main Script (Vanilla JavaScript)
// Handles dynamic copyright year and Web3Forms AJAX submission with aria-live.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Update footer year dynamically
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Contact form submission handling
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Botcheck spam trap check
      const botcheck = contactForm.querySelector('input[name="botcheck"]');
      if (botcheck && botcheck.checked) {
        return;
      }

      // Display sending status in aria-live region
      formStatus.textContent = 'Sending...';
      if (submitBtn) {
        submitBtn.disabled = true;
      }

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
          formStatus.textContent = "Message sent. Thank you, I'll reply soon.";
          contactForm.reset();
        } else {
          formStatus.textContent = "The message didn't send. Please email sauraxh@gmail.com directly.";
        }
      } catch (err) {
        formStatus.textContent = 'Network error. Please email sauraxh@gmail.com directly.';
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
        }
      }
    });
  }
});
