// Q2. Live Character Counter with Warning Behavior
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.counter-app{max-width:650px;margin:auto;background:#fff;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.counter-app textarea{box-sizing:border-box;width:100%;min-height:180px;padding:12px;border:1px solid #cbd5e1;border-radius:8px;font:16px/1.5 Arial;resize:vertical}.counter-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:10px}.counter-value{font-weight:bold;color:#15803d}.counter-value.warning{color:#b77900}.counter-value.limit{color:#dc2626}.counter-app button{padding:9px 14px;border:0;border-radius:7px;background:#2458cc;color:#fff;cursor:pointer}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='counter-app';
  app.innerHTML='<h1>Live Character Counter</h1><p>Maximum length: 100 characters.</p><textarea id="message-input" maxlength="100" aria-label="Your message" placeholder="Start typing..."></textarea><div class="counter-row"><span id="remaining-counter" class="counter-value" aria-live="polite">100 characters remaining</span><button id="reset-button" type="button">Reset</button></div>';
  document.body.appendChild(app);
  const textarea=app.querySelector('#message-input'), counter=app.querySelector('#remaining-counter');
  function updateCounter() {
    const remaining=100-textarea.value.length;
    counter.textContent=remaining+(remaining===1?' character remaining':' characters remaining');
    counter.classList.toggle('warning',remaining<=20 && remaining>0);
    counter.classList.toggle('limit',remaining===0);
    counter.setAttribute('aria-label',counter.textContent);
  }
  // maxlength is a safeguard; beforeinput explicitly prevents insertion at the limit.
  textarea.addEventListener('beforeinput',(event)=>{
    if(event.inputType && event.inputType.startsWith('insert') && textarea.value.length>=100) event.preventDefault();
  });
  textarea.addEventListener('input',updateCounter);
  app.querySelector('#reset-button').addEventListener('click',()=>{textarea.value='';updateCounter();textarea.focus();});
  updateCounter();
})();