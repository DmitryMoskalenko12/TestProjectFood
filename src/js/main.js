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
              <div class="menu__item-cost">Ціна:</div>
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
      slidesField = document.querySelector('.slider-field');
      slides = document.querySelectorAll('.offer__slide');
      prev = document.querySelector('.offer__slider-prev');
      next = document.querySelector('.offer__slider-next');
      current = document.querySelector('#current');
      total = document.querySelector('#total');
      width = window.getComputedStyle(wrapperSlides).width;
      let offset = 0;
      let slideIndex = 1;

      if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`
      }else{
        total.textContent = slides.length;
        current.textContent = slideIndex
      }

      slides.forEach(item=>{
        item.style.width = width;
      })
      slidesField.style.display = 'flex',
      slidesField.style.width = 100 * slides.length + '%',
      slidesField.style.transition = '0.7s all',
      wrapperSlides.style.overflow = 'hidden'  
  
      next.addEventListener('click', ()=>{
        if (offset == +width.replace(/\D/gi, '') * (slides.length - 1)) {
          offset = 0
        }else{
          offset += +width.replace(/\D/gi, ''); 
        }
        
          slidesField.style.transform =`translateX(-${offset}px)`;

          if (slideIndex == slides.length) {
            slideIndex = 1;
          }else{
            slideIndex++;
          }

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          }else{
            current.textContent = slideIndex;
          }

          dotss.forEach((item, i)=>{
            item.style.opacity='0.5'
         });
         dotss[slideIndex - 1].style.opacity = '1';

      })

      prev.addEventListener('click', ()=>{
        if (offset == 0) {
          offset = +width.replace(/\D/gi, '') * (slides.length - 1)
        }else{
          offset -= +width.replace(/\D/gi, '');
        }
        
          slidesField.style.transform =`translateX(-${offset}px)`;

          if (slideIndex == 1) {
            slideIndex = slides.length;
          }else{
            slideIndex--;
          }

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
          }else{
            current.textContent = slideIndex;
          }

          dotss.forEach((item, i)=>{
            item.style.opacity='0.5'
         });
         dotss[slideIndex - 1].style.opacity = '1';

      })
      

     /*  let slidesIndex = 1;
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
    */
     const carousel = document.createElement('div');
     carousel.classList.add('carousel-indicators');
     carousel.style.cssText =`
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      margin-right: 15%;
      margin-left: 15%;
      list-style: none;`
      wrapperSlides.append(carousel);

      const dotss = [];

      for (let i = 0; i < slides.length; i++) {
      const dots = document.createElement('div');
      dots.setAttribute('data-slide-to', i + 1)
      dots.style.cssText =`
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;`;

        document.querySelector('.carousel-indicators').append(dots);
        if (i == 0) {
          dots.style.opacity='1'
        }
        dotss.push(dots)
      }  
      
      dotss.forEach((item, i)=>{
        item.addEventListener('click', (e)=>{
          const dotSlide = e.target.getAttribute('data-slide-to');
          slideIndex = dotSlide;
          offset = +width.replace(/\D/gi, '') * (dotSlide - 1);
          slidesField.style.transform =`translateX(-${offset}px)`;
  
            if (slides.length < 10) {
              current.textContent = `0${slideIndex}`;
            }else{
              current.textContent = slideIndex;
            }
  
            dotss.forEach((item, i)=>{
              item.style.opacity='0.5'
           });
           dotss[slideIndex - 1].style.opacity = '1';
        })
      })

/* калькулятор */
const result = document.querySelector('.calculating__result span');
      gender = document.querySelectorAll('#gender  div');
      activity = document.querySelectorAll('.calculating__choose_big  div');
          
let sex='femail', height, weight, age, activ= 1.2;

function calcSum() {
  if(!sex || !height || !weight  || !age  || !activ){
   result.textContent = '______';
   return;
  }

    if (sex === 'femail') {
       result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activ).toFixed(0) 
    }else{
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activ).toFixed(0)
    }
 
}
  calcSum();  
  
  function getInfo(parentclas, activeClass) {

    parentclas.forEach(item=>{
    item.addEventListener('click', (e)=>{
    if (e.target.getAttribute('data-active') ) {
      activ = +e.target.getAttribute('data-active');
    }else{
      sex = e.target.getAttribute('id');
    }

    parentclas.forEach((item, i)=>{
      item.classList.remove(activeClass);
    })
    e.target.classList.add(activeClass);
    calcSum()
  })
})

parentclas.forEach((item, i)=>{
  item.classList.remove(activeClass);
})
parentclas[0].classList.add(activeClass);

}

getInfo(gender, 'calculating__choose-item_active');
getInfo(activity, 'calculating__choose-item_active'); 
 

  function dinamicInfo(selector) {
      const input = document.querySelector(selector);
      input.addEventListener('input',()=>{
        if(input.value.match(/\D/ig)){
          input.style.border = '2px solid red'
        }else{
          input.style.border = 'none'
        }
        switch(input.getAttribute('id')) {
          case 'height':
            height = +input.value;
            break;
          case 'weight':
            weight = +input.value;
            break;
          case 'age':
            age = +input.value;
            break;
        }
        calcSum() 
  });
  
  }
  
dinamicInfo('#height');
dinamicInfo('#weight');
dinamicInfo('#age');

})




