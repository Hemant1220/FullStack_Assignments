// Q8. Custom Dropdown Using Only JavaScript; no select element is used.
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.dropdown-app{max-width:600px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.custom-dropdown{position:relative;width:100%;max-width:360px}.dropdown-trigger{width:100%;display:flex;justify-content:space-between;align-items:center;padding:12px;border:1px solid #94a3b8;border-radius:8px;background:white;color:#202938;cursor:pointer;text-align:left}.dropdown-options{position:absolute;top:calc(100% + 5px);left:0;right:0;z-index:20;background:white;border:1px solid #cbd5e1;border-radius:8px;box-shadow:0 8px 20px #17203320;padding:5px}.dropdown-options[hidden]{display:none}.dropdown-options button{width:100%;text-align:left;padding:10px;border:0;border-radius:5px;background:white;cursor:pointer;color:#202938}.dropdown-options button:hover,.dropdown-options button:focus{background:#eff6ff}.dropdown-status{color:#64748b;font-size:14px;margin-top:16px}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='dropdown-app';
  app.innerHTML='<h1>Custom Dropdown</h1><p>This menu is built with buttons and a list, not a select element.</p><div class="custom-dropdown" id="custom-dropdown"><button type="button" class="dropdown-trigger" id="dropdown-trigger" aria-haspopup="true" aria-expanded="false"><span id="selected-option">Choose a department</span><span aria-hidden="true">▾</span></button><div class="dropdown-options" id="dropdown-options" role="group" aria-label="Departments" hidden><button type="button" data-value="Computer Science">Computer Science</button><button type="button" data-value="Information Technology">Information Technology</button><button type="button" data-value="Electronics">Electronics</button><button type="button" data-value="Mechanical">Mechanical</button></div></div><p class="dropdown-status" id="dropdown-status" aria-live="polite">No option selected.</p>';
  document.body.appendChild(app);
  const dropdown=app.querySelector('#custom-dropdown'), trigger=app.querySelector('#dropdown-trigger'), options=app.querySelector('#dropdown-options');
  const selected=app.querySelector('#selected-option'), status=app.querySelector('#dropdown-status');
  function setOpen(open){options.hidden=!open;trigger.setAttribute('aria-expanded',String(open));}
  trigger.addEventListener('click',()=>setOpen(options.hidden));
  options.addEventListener('click',(event)=>{
    const option=event.target.closest('button[data-value]'); if(!option) return;
    selected.textContent=option.dataset.value; status.textContent='Selected department: '+option.dataset.value; setOpen(false); trigger.focus();
  });
  // true makes this outside-click listener run in the capturing phase.
  document.addEventListener('click',(event)=>{if(!dropdown.contains(event.target)) setOpen(false);},true);
})();