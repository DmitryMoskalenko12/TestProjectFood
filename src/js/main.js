'Use strict'
window.addEventListener('DOMContentLoaded', ()=>{
  const tabWrapper = document.querySelector('.tabheader__items');
        tab = document.querySelectorAll('.tabheader__item');
        content = document.querySelectorAll('.tabcontent');

  function hideTabContent() {
    content.forEach((elem) => {
      elem.style.display = 'none';
      tab.forEach(item=>{
        item.classList.remove('tabheader__item_active');
      })
    });
  }

  function showTabContent(i = 0) {
    content[i].style.display = 'block';
    tab[i].classList.add('tabheader__item_active');

  }
  hideTabContent();
  showTabContent();

  tabWrapper.addEventListener('click', (e)=>{
    if(e.target && e.target.classList.contains('tabheader__item')){
      tab.forEach((item, i)=>{
        if(e.target === item){
          hideTabContent();
          showTabContent(i);
        }
      })
    }
  })

/* таймер */

  const deadlain = '2022-08-25';
  
  function timeRemaining(timeEnd) {
    const t =  Date.parse(timeEnd) - Date.parse(new Date());
        days = Math.floor((t / (1000 * 60 * 60 * 24)));
        hours = Math.floor(((t / (1000 * 60 * 60)) % 24));
        minutes = Math.floor(((t / 1000 / 60) % 60));
        seconds = Math.floor((t / 1000 ) % 60);

  return{
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
  }
  function setZero(num) {
    if(num < 10){
      return `0${num}`;
    }else{
      return num;
    }
    }
  function setTime(timeEnd) {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds'),
          timeCount = setInterval(updateTime, 1000);
          updateTime();
  function updateTime() {
          const time = timeRemaining(timeEnd);
          if(time.total <= 0){
          days.innerHTML = '00'
          hours.innerHTML = '00'
          minutes.innerHTML = '00'
          seconds.innerHTML = '00'
          }else{
          days.innerHTML = setZero(time.days),
          hours.innerHTML = setZero(time.hours),
          minutes.innerHTML = setZero(time.minutes),
          seconds.innerHTML = setZero(time.seconds);
          }
    if (time.total <= 0) {
      clearInterval(timeCount)
    }
  }
  }
  setTime(deadlain)

/* модальные окна  */ 

const trigger = document.querySelectorAll('[data-btn]');
      close = document.querySelector('.modal__close');
      modal = document.querySelector('.modal');

  function showModal() {
    modal.style.display = 'block';
    document.body.style.overflow ='hidden';
    clearInterval(timeOut);
  }

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow =''
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
  const timeOut = setTimeout(showModal, 10000);

/* карточки */
class Card {
  constructor(src, alt, title, descr, price, curs ){
  this.src = src,
  this.alt = alt,
  this.title = title,
  this.descr = descr,
  this.curs = curs,
  this.wrapper = document.querySelector('.menu__field >.container'),
  this.price = price * this.curs
  }
  render(){
    const div = document.createElement('div');
          div.classList.add('menu__item');
          div.innerHTML=` <img src=${this.src} alt=${this.alt}>
          <h3 class="menu__item-subtitle">Меню ${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price.toFixed(0)}</span> грн/день</div>
          </div>
          `
    this.wrapper.append(div)
  }
}
new Card("img/tabs/vegy.jpg","vegy","Фитнес", 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',5, 28).render();

new Card("img/tabs/elite.jpg","elite","Премиум",'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',12, 28).render();

new Card("img/tabs/post.jpg","post","Постное",'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',8, 28).render();
/* постинг данных с форм */

const form = document.querySelector('.modal-form');
const formOrder = document.querySelector('.order__form');
const sanksWrapper = document.querySelector('.modal__content')
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
    .then(
      selector.reset(),
      setTimeout(closeModal, 2000), 
      s = document.createElement('div'),
      s.classList.add('modal__title'),
      s.textContent ='Спасибо мы скоро свяжемся с вами',
      sanksWrapper.append(s),
      setTimeout(()=>{
        s.remove()
      }, 1500)
    ) 
  })
}
bindForm(formOrder);
bindForm(form);



})