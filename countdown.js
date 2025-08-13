// Cuenta regresiva para el lanzamiento
const countdownElement = document.getElementById('countdown');

function startCountdown(endDate) {
        const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "¡La oferta ha comenzado!";
        }
    }, 1000);
}

// Fecha de inicio de coderforum
const cyberMondayDate = new Date("2026-11-04T03:00:00Z").getTime(); 
startCountdown(cyberMondayDate);

// Suscripción al newsletter
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("¡Gracias por suscribirte!");
});
// Mostrar/Ocultar Respuestas en la Sección FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.arrow');

        answer.classList.toggle('visible');
        icon.classList.toggle('rotated');
    });
});