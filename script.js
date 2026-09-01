document.addEventListener("DOMContentLoaded", () => {
    /*
      CONFIGURAÇÃO RÁPIDA
      1. WHATSAPP_NUMBER: Apenas números com DDI e DDD (sem o sinal de '+', espaços ou hífen).
      2. CONTACT_EMAIL: E-mail de contato exibido.
      3. LAUNCH_DATE: Data de lançamento no formato ISO.
    */

    const WHATSAPP_NUMBER = "5511932199533";
    const CONTACT_EMAIL = "contato@terlimstore.com.br";
    const LAUNCH_DATE = "2026-12-31T20:00:00-03:00";

    const emailElement = document.getElementById("emailText");
    if (emailElement) {
        emailElement.textContent = CONTACT_EMAIL;
    }

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const message = document.getElementById("message").value.trim();

            const text =
                `Olá, Terlim Store!%0A%0A` +
                `Nome: ${encodeURIComponent(name)}%0A` +
                `E-mail: ${encodeURIComponent(email)}%0A` +
                `WhatsApp: ${encodeURIComponent(phone || "Não informado")}%0A%0A` +
                `Mensagem:%0A${encodeURIComponent(message)}`;

            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
        });
    }

    function updateCountdown() {
        const target = new Date(LAUNCH_DATE).getTime();
        const now = Date.now();
        let diff = Math.max(0, target - now);

        const days = Math.floor(diff / 86400000); diff %= 86400000;
        const hours = Math.floor(diff / 3600000); diff %= 3600000;
        const minutes = Math.floor(diff / 60000); diff %= 60000;
        const seconds = Math.floor(diff / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.textContent = String(days).padStart(2, "0");
            hoursEl.textContent = String(hours).padStart(2, "0");
            minutesEl.textContent = String(minutes).padStart(2, "0");
            secondsEl.textContent = String(seconds).padStart(2, "0");
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
