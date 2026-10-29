// Q5. Image Gallery with Modal Preview
(() => {
  const style=document.createElement('style');
  style.textContent='body{font:16px Arial;background:#f5f7fb;color:#202938;margin:24px}.gallery-app{max-width:950px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}.gallery-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}.gallery-grid button{border:0;padding:0;background:none;cursor:pointer;border-radius:9px;overflow:hidden}.gallery-grid img{display:block;width:100%;height:145px;object-fit:cover;transition:transform .2s}.gallery-grid button:hover img{transform:scale(1.04)}.image-modal{position:fixed;inset:0;background:#07101dd9;display:flex;align-items:center;justify-content:center;padding:24px;z-index:9999}.image-modal[hidden]{display:none}.modal-content{max-width:min(1000px,95vw);max-height:90vh;position:relative;background:white;padding:12px;border-radius:12px}.modal-content img{display:block;max-width:100%;max-height:78vh;object-fit:contain}.modal-content p{margin:8px 0 0;color:#202938}.modal-close{position:absolute;top:8px;right:8px;border:0;border-radius:50%;width:36px;height:36px;background:white;cursor:pointer;font-size:22px}';
  document.head.appendChild(style);
  const app=document.createElement('main'); app.className='gallery-app';
  app.innerHTML='<h1>Image Gallery</h1><p>Select an image to preview a larger version. Click outside the preview to close it.</p><div class="gallery-grid" id="gallery-grid"></div>';
  document.body.appendChild(app);
  const images=[
    {caption:'Mountain landscape',seed:'dom-gallery-1'},{caption:'Ocean view',seed:'dom-gallery-2'},
    {caption:'Green forest',seed:'dom-gallery-3'},{caption:'Desert scenery',seed:'dom-gallery-4'},
    {caption:'City architecture',seed:'dom-gallery-5'},{caption:'Wildflower field',seed:'dom-gallery-6'}
  ];
  const grid=app.querySelector('#gallery-grid');
  images.forEach((item)=>{
    const button=document.createElement('button'); button.type='button'; button.dataset.seed=item.seed; button.dataset.caption=item.caption;
    button.setAttribute('aria-label','Preview '+item.caption);
    const img=document.createElement('img'); img.src='https://picsum.photos/seed/'+item.seed+'/480/320'; img.alt=item.caption; img.loading='lazy';
    button.appendChild(img); grid.appendChild(button);
  });
  const modal=document.createElement('div'); modal.className='image-modal'; modal.hidden=true; modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true');
  modal.innerHTML='<div class="modal-content"><button type="button" class="modal-close" aria-label="Close preview">×</button><img alt=""><p></p></div>';
  document.body.appendChild(modal);
  const content=modal.querySelector('.modal-content'), modalImage=modal.querySelector('img'), caption=modal.querySelector('p');
  grid.addEventListener('click',(event)=>{
    const button=event.target.closest('button[data-seed]'); if(!button) return;
    modalImage.src='https://picsum.photos/seed/'+button.dataset.seed+'/1200/800'; modalImage.alt=button.dataset.caption;
    caption.textContent=button.dataset.caption; modal.hidden=false;
  });
  modal.addEventListener('click',()=>{modal.hidden=true;});
  // Prevent clicks within the modal from reaching the backdrop handler.
  content.addEventListener('click',(event)=>event.stopPropagation());
  modal.querySelector('.modal-close').addEventListener('click',()=>{modal.hidden=true;});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape') modal.hidden=true;});
})();