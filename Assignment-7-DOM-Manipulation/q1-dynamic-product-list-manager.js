// Q1. Dynamic Product List Manager: Add, Edit, Delete with Event Delegation
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.dom-app{max-width:720px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.product-form{display:flex;gap:8px;margin:20px 0}.product-form input{flex:1;min-width:0;padding:10px;border:1px solid #cbd5e1;border-radius:7px}.dom-app button{padding:9px 12px;border:0;border-radius:7px;cursor:pointer;background:#2458cc;color:white}.product-list{list-style:none;padding:0}.product-list li{display:flex;align-items:center;gap:8px;margin:8px 0;padding:10px;border:1px solid #e2e8f0;border-radius:8px}.product-name{flex:1;overflow-wrap:anywhere}.product-list input{flex:1;min-width:0;padding:8px;border:1px solid #94a3b8;border-radius:6px}.product-list .delete{background:#b42318}.hint{color:#64748b;font-size:14px}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='dom-app';
  app.innerHTML='<h1>Dynamic Product List</h1><p>Add, edit, or delete products. An edit saves when you click away.</p><form class="product-form" id="product-form"><input id="product-input" aria-label="Product name" placeholder="Enter a product name" required><button type="submit">Add Product</button></form><ul class="product-list" id="product-list"></ul><p class="hint">Edit/Delete use a delegated listener on the parent list.</p>';
  document.body.appendChild(app);
  const form=app.querySelector('#product-form'), input=app.querySelector('#product-input'), list=app.querySelector('#product-list');

  function addProduct(name) {
    const clean=name.trim(); if(!clean) return;
    const li=document.createElement('li'), label=document.createElement('span');
    label.className='product-name'; label.textContent=clean;
    const edit=document.createElement('button'); edit.type='button'; edit.dataset.action='edit'; edit.textContent='Edit';
    const del=document.createElement('button'); del.type='button'; del.dataset.action='delete'; del.className='delete'; del.textContent='Delete';
    li.append(label,edit,del); list.appendChild(li);
  }
  function saveEdit(li) {
    if(!li || li.dataset.editing!=='true') return;
    const editor=li.querySelector('.inline-edit'), label=li.querySelector('.product-name');
    if(editor && label) { if(editor.value.trim()) label.textContent=editor.value.trim(); editor.remove(); label.hidden=false; }
    li.dataset.editing='false';
    const button=li.querySelector('[data-action="edit"]'); if(button) button.textContent='Edit';
  }
  function beginEdit(li) {
    if(li.dataset.editing==='true') { saveEdit(li); return; }
    const label=li.querySelector('.product-name'); if(!label) return;
    li.dataset.editing='true'; label.hidden=true;
    const editor=document.createElement('input'); editor.className='inline-edit'; editor.setAttribute('aria-label','Edit product name'); editor.value=label.textContent;
    label.insertAdjacentElement('afterend',editor);
    li.querySelector('[data-action="edit"]').textContent='Save';
    editor.addEventListener('focusout',(event)=>{if(!li.contains(event.relatedTarget)) saveEdit(li);});
    editor.addEventListener('keydown',(event)=>{if(event.key==='Enter'){event.preventDefault();saveEdit(li);} if(event.key==='Escape') saveEdit(li);});
    editor.focus(); editor.select();
  }
  form.addEventListener('submit',(event)=>{event.preventDefault();addProduct(input.value);input.value='';input.focus();});
  // One listener on the parent handles buttons for every current/future item.
  list.addEventListener('click',(event)=>{
    const button=event.target.closest('button[data-action]'); if(!button) return;
    const li=button.closest('li'); if(!li) return;
    if(button.dataset.action==='delete') li.remove(); else beginEdit(li);
  });
  ['Notebook','Wireless Mouse','Water Bottle'].forEach(addProduct);
})();