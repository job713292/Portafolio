
// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const form = document.getElementById('contactForm');

    formMessage.style.display = 'block';
    formMessage.style.background = 'rgba(99, 102, 241, 0.1)';
    formMessage.style.border = '1px solid var(--primary-action)';
    formMessage.style.color = 'var(--primary-action)';
    formMessage.textContent = '✓ ¡Mensaje enviado! Te contactaré pronto.';

    form.reset();

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});