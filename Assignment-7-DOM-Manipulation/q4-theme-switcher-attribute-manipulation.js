// Q4. Theme Switcher Using Attribute Manipulation
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;margin:24px;transition:background .2s,color .2s}.theme-switcher{max-width:720px;margin:auto;padding:26px;border-radius:14px;box-shadow:0 6px 24px #17203320}.theme-switcher .buttons{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0}.theme-switcher button{padding:10px 15px;border:0;border-radius:8px;cursor:pointer;background:#2458cc;color:white}.theme-light{background:#f4f7fb;color:#202938}.theme-light .theme-switcher{background:white}.theme-dark{background:#111827;color:#f8fafc}.theme-dark .theme-switcher{background:#1f2937;color:#f8fafc}.theme-blue{background:#dbeafe;color:#12305a}.theme-blue .theme-switcher{background:#eff6ff;color:#12305a}.theme-note{font-family:monospace;overflow-wrap:anywhere}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='theme-switcher';
  app.innerHTML='<h1>Theme Switcher</h1><p>Pick a theme. The body class and custom data-theme attribute are updated with setAttribute().</p><div class="buttons"><button type="button" data-theme-choice="light">Light</button><button type="button" data-theme-choice="dark">Dark</button><button type="button" data-theme-choice="blue">Blue</button></div><p id="theme-status" class="theme-note" aria-live="polite"></p>';
  document.body.appendChild(app);
  const status=app.querySelector('#theme-status'), allowed=['light','dark','blue'];
  function applyTheme(theme) {
    if(!allowed.includes(theme)) return;
    const classes=Array.from(document.body.classList).filter((name)=>!name.startsWith('theme-'));
    classes.push('theme-'+theme);
    document.body.setAttribute('class',classes.join(' '));
    document.body.setAttribute('data-theme',theme);
    status.textContent='Current theme: '+theme+' | body[data-theme="'+theme+'"]';
  }
  app.querySelector('.buttons').addEventListener('click',(event)=>{
    const button=event.target.closest('button[data-theme-choice]'); if(button) applyTheme(button.dataset.themeChoice);
  });
  applyTheme('light');
})();