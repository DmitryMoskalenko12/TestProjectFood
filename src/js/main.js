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
  const timeOut = setTimeout(showModal, 300000);

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
async function getCard(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Error in path ${url} ${res.status}`)
  }else{
    return await res.json()
  } 
}
getCard('http://localhost:3000/cardInfoGet')
.then((data)=>{
  data.forEach(({src,alt,title,descr,price,curs})=>{
    new Card(src,alt, title, descr, price,curs ).render();
  })
})

/* постинг данных с форм */

const form = document.querySelector('.modal-form');
const formOrder = document.querySelector('.order__form');
const sanksWrapper = document.querySelector('.modal-thanks');
const modalError = document.querySelector('.modal-error');

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

/* слайдер */

const wrapperSlides = document.querySelector('.offer__slider-wrapper');
      slides = document.querySelectorAll('.offer__slide');
      prev = document.querySelector('.offer__slider-prev');
      next = document.querySelector('.offer__slider-next');
      current = document.querySelector('#current');
      total = document.querySelector('#total');

      let slidesIndex = 1;
      if (slides.length > 10) {
        total.textContent = slides.length
      }
      if (slides.length < 10) {
        total.textContent = `0${slides.length}`
      }
      initSlides(slidesIndex)

     function initSlides(n) {
      if (n > slides.length) {
        slidesIndex = 1
      }
      if (n < 1) {
        slidesIndex = slides.length
      }

      slides.forEach((item)=>{
        item.style.display = 'none';
      })

      slides[slidesIndex - 1].style.display ='block';

      if (slides.length > 10) {
        current.textContent = slidesIndex
      }
      if (slidesIndex < 10) {
        current.textContent = `0${slidesIndex}`
      }
      
     } 

     function countSlides (num) {
      initSlides(slidesIndex += num)
     }

    prev.addEventListener('click', ()=>{
      countSlides(-1)
    });

    next.addEventListener('click', ()=>{
      countSlides(1)
    })
   
     
})