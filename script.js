// CONFIGURAÇÃO: coloque aqui o WhatsApp da Terlim Store, somente números.
const WHATSAPP_NUMBER = '5500000000000';
// Altere a data quando definir o lançamento. Formato ISO com horário de Brasília.
const LAUNCH_DATE = '2026-09-16T20:00:00-03:00';

function updateCountdown(){
  const diff = new Date(LAUNCH_DATE).getTime() - Date.now();
  const d = Math.max(0, diff);
  const days=Math.floor(d/86400000), hours=Math.floor(d/3600000)%24, minutes=Math.floor(d/60000)%60, seconds=Math.floor(d/1000)%60;
  document.getElementById('days').textContent=String(days).padStart(2,'0');
  document.getElementById('hours').textContent=String(hours).padStart(2,'0');
  document.getElementById('minutes').textContent=String(minutes).padStart(2,'0');
  document.getElementById('seconds').textContent=String(seconds).padStart(2,'0');
}
updateCountdown(); setInterval(updateCountdown,1000);
function openWhatsApp(){
  const url='https://wa.me/'+WHATSAPP_NUMBER;
  window.open(url,'_blank','noopener,noreferrer');
}
document.getElementById('whatsBtn').addEventListener('click',openWhatsApp);
document.getElementById('footerWhats').addEventListener('click',e=>{e.preventDefault();openWhatsApp();});
document.getElementById('notifyForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim()||'Não informado';
  const message=document.getElementById('message').value.trim()||'Quero ser avisado quando a Terlim Store estiver no ar.';
  const text=`Olá, Terlim Store!\n\nQuero ser avisado sobre o lançamento.\n\nNome: ${name}\nE-mail: ${email}\nWhatsApp: ${phone}\n\nMensagem: ${message}`;
  window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(text),'_blank','noopener,noreferrer');
});
document.getElementById('year').textContent=new Date().getFullYear();
