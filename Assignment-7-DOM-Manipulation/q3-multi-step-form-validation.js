// Q3. Multi-Step Form with Next/Back & Validation
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.wizard{max-width:560px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.step-indicator{color:#64748b}.wizard label{display:block;font-weight:bold;margin:18px 0 6px}.wizard input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}.wizard button{padding:10px 15px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}.wizard .secondary{background:#64748b}.wizard .actions{display:flex;gap:10px;margin-top:22px}.wizard .error{min-height:20px;color:#b42318;font-size:14px}.wizard .summary{padding:14px;background:#f0fdf4;border-radius:8px;line-height:1.8}.wizard [hidden]{display:none!important}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='wizard';
  app.innerHTML='<h1>Multi-Step Registration</h1><p id="step-indicator" class="step-indicator">Step 1 of 3</p><form id="wizard-form" novalidate><section data-step="0"><label for="full-name">Name</label><input id="full-name" name="name" autocomplete="name" required><p class="error" id="name-error" aria-live="polite"></p></section><section data-step="1" hidden><label for="email-address">Email</label><input id="email-address" name="email" type="email" autocomplete="email" required><p class="error" id="email-error" aria-live="polite"></p></section><section data-step="2" hidden><label for="password">Password</label><input id="password" name="password" type="password" autocomplete="new-password" required><p class="error" id="password-error" aria-live="polite"></p></section><div class="actions"><button id="back-button" class="secondary" type="button" hidden>Back</button><button id="next-button" type="button">Next</button><button id="finish-button" type="submit" hidden>Complete</button></div></form><section id="summary" class="summary" hidden aria-live="polite"></section>';
  document.body.appendChild(app);
  const form=app.querySelector('#wizard-form'), steps=Array.from(app.querySelectorAll('[data-step]'));
  const indicator=app.querySelector('#step-indicator'), back=app.querySelector('#back-button'), next=app.querySelector('#next-button'), finish=app.querySelector('#finish-button'), summary=app.querySelector('#summary');
  let currentStep=0;
  const fields=[
    {input:app.querySelector('#full-name'),error:app.querySelector('#name-error'),message:'Please enter your name.'},
    {input:app.querySelector('#email-address'),error:app.querySelector('#email-error'),message:'Please enter a valid email address.'},
    {input:app.querySelector('#password'),error:app.querySelector('#password-error'),message:'Please enter a password.'}
  ];
  function validate(index) {
    const field=fields[index], valid=field.input.value.trim()!=='' && field.input.checkValidity();
    field.error.textContent=valid?'':field.message; return valid;
  }
  function render() {
    steps.forEach((step,index)=>{step.hidden=index!==currentStep;});
    indicator.textContent='Step '+(currentStep+1)+' of 3'; back.hidden=currentStep===0; next.hidden=currentStep===2; finish.hidden=currentStep!==2;
    fields[currentStep].input.focus();
  }
  next.addEventListener('click',()=>{if(validate(currentStep)){currentStep++;render();}});
  back.addEventListener('click',()=>{currentStep=Math.max(0,currentStep-1);render();});
  fields.forEach((field)=>field.input.addEventListener('input',()=>{if(field.input.value.trim() && field.input.checkValidity()) field.error.textContent='';}));
  form.addEventListener('submit',(event)=>{
    event.preventDefault(); if(!validate(2)) return;
    const safe=(value)=>value.replace(/[&<>"']/g,(ch)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
    summary.innerHTML='<h2>Registration Summary</h2><p><strong>Name:</strong> '+safe(fields[0].input.value.trim())+'</p><p><strong>Email:</strong> '+safe(fields[1].input.value.trim())+'</p><p><strong>Password:</strong> ••••••••</p><p>All three steps are complete.</p>';
    form.hidden=true; indicator.hidden=true; summary.hidden=false;
  });
  render();
})();