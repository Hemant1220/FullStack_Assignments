// Q7. Detect Mouse Path & Coordinates Logger
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.mouse-app{max-width:650px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.coordinate-readout{font-family:monospace;background:#f1f5f9;border-radius:7px;padding:12px;margin:14px 0}.mouse-box{width:400px;height:400px;max-width:100%;box-sizing:border-box;position:relative;overflow:hidden;border:2px solid #64748b;border-radius:8px;background:linear-gradient(135deg,#eff6ff,#e0e7ff);cursor:crosshair}.box-hint{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;text-align:center;color:#475569;pointer-events:none}.mouse-dot{position:absolute;width:12px;height:12px;background:#dc2626;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 3px #dc262633}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='mouse-app';
  app.innerHTML='<h1>Mouse Coordinates Logger</h1><p>Move the mouse in the square to see browser coordinates. Double-click to place a red dot.</p><div class="coordinate-readout" id="coordinate-readout" aria-live="polite">clientX: —, clientY: —</div><div class="mouse-box" id="mouse-box" aria-label="400 by 400 mouse tracking area"><span class="box-hint">Move the mouse here<br>Double-click to place dots</span></div>';
  document.body.appendChild(app);
  const box=app.querySelector('#mouse-box'), readout=app.querySelector('#coordinate-readout');
  box.addEventListener('mousemove',(event)=>{readout.textContent='clientX: '+event.clientX+', clientY: '+event.clientY;});
  box.addEventListener('dblclick',(event)=>{
    const bounds=box.getBoundingClientRect(), dot=document.createElement('span');
    dot.className='mouse-dot'; dot.setAttribute('aria-hidden','true');
    dot.style.left=(event.clientX-bounds.left)+'px'; dot.style.top=(event.clientY-bounds.top)+'px';
    box.appendChild(dot);
    readout.textContent='Double-click dot placed at clientX: '+event.clientX+', clientY: '+event.clientY;
  });
})();