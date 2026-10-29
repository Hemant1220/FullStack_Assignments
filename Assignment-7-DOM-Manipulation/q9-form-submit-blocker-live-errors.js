// Q9. Form Submit Blocker with preventDefault() and Live Errors
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.validation-app{max-width:590px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.validation-app label{display:block;margin:16px 0 6px;font-weight:bold}.validation-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}.validation-app input.invalid{border-color:#dc2626}.field-error{min-height:19px;margin:4px 0 0;color:#b42318;font-size:14px}.validation-app button{margin-top:20px;padding:10px 15px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}.form-success{padding:12px;background:#dcfce7;color:#166534;border-radius:7px;margin-top:16px;font-weight:bold}.form-success[hidden]{display:none}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='validation-app';
  app.innerHTML='<h1>Form Validation</h1><p>Correct highlighted fields; errors disappear when the input becomes valid.</p><form id="validation-form" novalidate><label for="person-name">Name</label><input id="person-name" name="name" autocomplete="name" aria-describedby="name-error"><p class="field-error" id="name-error" aria-live="polite"></p><label for="person-email">Email</label><input id="person-email" name="email" type="email" autocomplete="email" aria-describedby="email-error"><p class="field-error" id="email-error" aria-live="polite"></p><label for="person-password">Password</label><input id="person-password" name="password" type="password" autocomplete="new-password" aria-describedby="password-error"><p class="field-error" id="password-error" aria-live="polite"></p><button type="submit">Submit Form</button></form><p class="form-success" id="form-success" role="status" hidden>Form Submitted Successfully</p>';
  document.body.appendChild(app);
  const form=app.querySelector('#validation-form'), success=app.querySelector('#form-success');
  const fields=[
    {input:app.querySelector('#person-name'),error:app.querySelector('#name-error'),validate:(v)=>v.trim().length>0,message:'Name is required.'},
    {input:app.querySelector('#person-email'),error:app.querySelector('#email-error'),validate:(v)=>v.trim().includes('@'),message:'Enter an email address containing @.'},
    {input:app.querySelector('#person-password'),error:app.querySelector('#password-error'),validate:(v)=>v.length>=6,message:'Password must be at least 6 characters long.'}
  ];
  function validateField(field){
    const valid=field.validate(field.input.value);
    field.error.textContent=valid?'':field.message; field.input.classList.toggle('invalid',!valid);
    field.input.setAttribute('aria-invalid',String(!valid)); return valid;
  }
  fields.forEach((field)=>field.input.addEventListener('input',()=>{validateField(field);success.hidden=true;}));
  form.addEventListener('submit',(event)=>{
    event.preventDefault(); // Stop navigation while validating.
    const valid=fields.map(validateField).every(Boolean);
    if(!valid){success.hidden=true;const first=fields.find((field)=>!field.validate(field.input.value));if(first)first.input.focus();return;}
    success.hidden=false; form.reset();
    fields.forEach((field)=>{field.error.textContent='';field.input.classList.remove('invalid');field.input.setAttribute('aria-invalid','false');});
  });
})();