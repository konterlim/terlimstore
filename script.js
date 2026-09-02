/* ==============================
   CONFIGURAÇÃO DA TERLIM STORE
   ==============================
   Troque pelo número do WhatsApp da loja, somente números.
   Exemplo: 5511999999999
*/
const WHATSAPP_NUMBER = '5500000000000';

// Se quiser usar um contador real, coloque uma data futura aqui.
// Formato: '2026-10-15T20:00:00-03:00'
const LAUNCH_DATE = '';

const boxes = document.querySelectorAll('#countdown b');
function updateCountdown(){
  if(!LAUNCH_DATE){ boxes.forEach(b=>b.textContent='00'); return; }
  const diff = new Date(LAUNCH_DATE).getTime() - Date.now();
  if(diff <= 0){ boxes.forEach(b=>b.textContent='00'); return; }
  const days=Math.floor(diff/86400000), hours=Math.floor(diff/3600000)%24, mins=Math.floor(diff/60000)%60, secs=Math.floor(diff/1000)%60;
  [days,hours,mins,secs].forEach((n,i)=>boxes[i].textContent=String(n).padStart(2,'0'));
}
updateCountdown(); setInterval(updateCountdown,1000);

document.getElementById('notify-form').addEventListener('submit', function(e){
  e.preventDefault();
  if(WHATSAPP_NUMBER === '5500000000000'){
    alert('Antes de publicar, abra o arquivo script.js e coloque o número de WhatsApp da Terlim Store na variável WHATSAPP_NUMBER.');
    return;
  }
  const nome=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const phone=document.getElementById('phone').value.trim() || 'Não informado';
  const message=document.getElementById('message').value.trim() || 'Quero ser avisado quando a Terlim Store estiver no ar.';
  const text=`Olá, Terlim Store!\n\nQuero ser avisado sobre o lançamento.\n\nNome: ${nome}\nE-mail: ${email}\nWhatsApp: ${phone}\n\nMensagem: ${message}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,'_blank','noopener,noreferrer');
});
document.getElementById('year').textContent=new Date().getFullYear();
