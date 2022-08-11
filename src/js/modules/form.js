
const form = ()=>{

const form = document.querySelector('.modal-form');
const formOrder = document.querySelector('.order__form');
const sanksWrapper = document.querySelector('.modal-thanks');
const modalError = document.querySelector('.modal-error');

const modal = document.querySelector('.modal');
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow =''
}

function bindForm(selector) {
  selector.addEventListener('submit',(e)=>{
    e.preventDefault()
    async function postData(url, data) {
      let res = await fetch(url, {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: data});
      return await res.json()
    }

    const formData = new FormData(selector);
    const json = JSON.stringify(Object.fromEntries(formData.entries()))
    postData('http://localhost:3000/postInfo', json)
    .then(()=>{
      setTimeout(closeModal, 500), 
      setTimeout(() => {
        sanksWrapper.style.display = 'block';
      }, 1000),
      setTimeout(()=>{
        sanksWrapper.style.display ='none';
      }, 4000)
    }
    ).catch(()=>{
      closeModal(), 
      modalError.style.display = 'block',
      setTimeout(()=>{
        modalError.style.display ='none';
      }, 4000)
    }).finally(
      selector.reset()
    ) 
  })
}
bindForm(formOrder);
bindForm(form);
}
export default form;