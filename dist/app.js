const viewer=document.querySelector('#viewer');
const image=document.querySelector('#viewer-image');
const title=document.querySelector('#viewer-title');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
 image.src=button.dataset.image;image.alt=button.dataset.title+'。本文はモザイク処理済み';title.textContent=button.dataset.title;
 viewer.showModal();document.body.classList.add('modal-open');
}));
document.querySelector('#close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const rect=viewer.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)viewer.close();}});
viewer.addEventListener('close',()=>document.body.classList.remove('modal-open'));
