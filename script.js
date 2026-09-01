/*
  CONFIGURAÇÃO RÁPIDA
  1. Troque WHATSAPP_NUMBER pelo número da Terlim, somente números com DDI.
     Exemplo Brasil: 5511999999999
  2. Troque CONTACT_EMAIL pelo e-mail real.
  3. Troque LAUNCH_DATE pela data/hora de lançamento. Use o fuso local do Brasil.
*/

const WHATSAPP_NUMBER = "+5511932199533";
const CONTACT_EMAIL = "contato@terlimstore.com.br";
const LAUNCH_DATE = "2026-12-31T20:00:00-03:00";

document.getElementById("emailText").textContent = CONTACT_EMAIL;

const form = document.getElementById("contactForm");
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

function updateCountdown() {
  const target = new Date(LAUNCH_DATE).getTime();
  const now = Date.now();
  let diff = Math.max(0, target - now);

  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); diff %= 60000;
  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.getElementById("year").textContent = new Date().getFullYear();
