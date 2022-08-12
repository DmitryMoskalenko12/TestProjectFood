const modal = ()=>{

const trigger = document.querySelectorAll('[data-btn]'),
      close = document.querySelector('.modal__close'),
      modal = document.querySelector('.modal'),
      scroll1 = scroll();
   
function showModal() {
  modal.style.display = 'block';
  document.body.style.overflow ='hidden';
  clearInterval(timeOut);
  document.body.style.marginRight=`${scroll1}px`;
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow ='';
  document.body.style.marginRight =`0px`;
}

function scroll() {
  const div = document.createElement('div');
  div.classList.add('blockscrol');
  div.style.cssText=`
  overflow-y: scroll;
  visibility: hidden;
  height: 50px;
  width: 50px;`
  document.body.append(div)
  let result = div.offsetWidth - div.clientWidth;
  div.remove();
  return result;
}

trigger.forEach(item=>{
  item.addEventListener('click', showModal);
});
  close.addEventListener('click', closeModal);

document.addEventListener('keydown',(e)=>{
  if (e.code === 'Escape') {
  closeModal()
}
});

window.addEventListener('scroll', modalEndList);

function modalEndList() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
  showModal();
  window.removeEventListener('scroll', modalEndList);
  }
}
modal.addEventListener('click',(e)=>{
  if(e.target === modal){
  closeModal()
  }
})
const timeOut = setTimeout(showModal, 300000);
 
}

export default modal;
