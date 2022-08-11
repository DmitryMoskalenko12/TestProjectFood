/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab */ "./src/js/modules/tab.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
'Use strict'








window.addEventListener('DOMContentLoaded', ()=>{

  function showModal() {
    _modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"].style.display = 'block';
    document.body.style.overflow ='hidden';
    clearInterval(timeOut);
  }

  Object(_modules_tab__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_card__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  
/*   const tabWrapper = document.querySelector('.tabheader__items');
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
  }) */

/* таймер */

 /*  const deadlain = '2022-08-25';
  
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
  setTime(deadlain) */

/* модальные окна  */ 

/* const trigger = document.querySelectorAll('[data-btn]');
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
  const timeOut = setTimeout(showModal, 300000); */

/* карточки */
/* class Card {
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
}) */

/* постинг данных с форм */

/* const form = document.querySelector('.modal-form');
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
bindForm(form); */

/* слайдер */

/* const wrapperSlides = document.querySelector('.offer__slider-wrapper');
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

      }) */
      

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
     /* const carousel = document.createElement('div');
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
 */
/* калькулятор */
/* const result = document.querySelector('.calculating__result span');
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
dinamicInfo('#age'); */

})






/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = ()=>{
  const result = document.querySelector('.calculating__result span'),
      gender = document.querySelectorAll('#gender  div'),
      activity = document.querySelectorAll('.calculating__choose_big  div')
          
let sex='femail', height, weight, age, activ= 1.2

function calcSum() {
  if(!sex || !height || !weight  || !age  || !activ){
   result.textContent = '______';
   return
  }

    if (sex === 'femail') {
       result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activ).toFixed(0) 
    }else{
      result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activ).toFixed(0)
    }
 
}
  calcSum()  
  
  function getInfo(parentclas, activeClass) {

    parentclas.forEach(item=>{
    item.addEventListener('click', (e)=>{
    if (e.target.getAttribute('data-active') ) {
      activ = +e.target.getAttribute('data-active')
    }else{
      sex = e.target.getAttribute('id')
    }

    parentclas.forEach((item, i)=>{
      item.classList.remove(activeClass)
    })
    e.target.classList.add(activeClass)
    calcSum()
  })
})

parentclas.forEach((item, i)=>{
  item.classList.remove(activeClass)
})
parentclas[0].classList.add(activeClass)

}

getInfo(gender, 'calculating__choose-item_active')
getInfo(activity, 'calculating__choose-item_active') 
 

  function dinamicInfo(selector) {
      const input = document.querySelector(selector)
      input.addEventListener('input',()=>{
        if(input.value.match(/\D/ig)){
          input.style.border = '2px solid red'
        }else{
          input.style.border = 'none'
        }
        switch(input.getAttribute('id')) {
          case 'height':
            height = +input.value
            break;
          case 'weight':
            weight = +input.value
            break;
          case 'age':
            age = +input.value
            break;
        }
        calcSum() 
  });
  
  }
  
dinamicInfo('#height')
dinamicInfo('#weight')
dinamicInfo('#age')
}
/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const card = ()=>{
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
  
}
/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

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
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = ()=>{
  const trigger = document.querySelectorAll('[data-btn]'),
      close = document.querySelector('.modal__close'),
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
}

/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slider = ()=>{
  const wrapperSlides = document.querySelector('.offer__slider-wrapper'),
      slidesField = document.querySelector('.slider-field'),
      slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      current = document.querySelector('#current'),
      total = document.querySelector('#total'),
      width = window.getComputedStyle(wrapperSlides).width;
      let offset = 0
      let slideIndex = 1

      if (slides.length < 10) {
        total.textContent = `0${slides.length}`
        current.textContent = `0${slideIndex}`
      }else{
        total.textContent = slides.length
        current.textContent = slideIndex
      }

      slides.forEach(item=>{
        item.style.width = width
      })
      slidesField.style.display = 'flex',
      slidesField.style.width = 100 * slides.length + '%',
      slidesField.style.transition = '0.7s all',
      wrapperSlides.style.overflow = 'hidden'  
  
      next.addEventListener('click', ()=>{
        if (offset == +width.replace(/\D/gi, '') * (slides.length - 1)) {
          offset = 0
        }else{
          offset += +width.replace(/\D/gi, '') 
        }
        
          slidesField.style.transform =`translateX(-${offset}px)`

          if (slideIndex == slides.length) {
            slideIndex = 1
          }else{
            slideIndex++
          }

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
          }else{
            current.textContent = slideIndex
          }

          dotss.forEach((item, i)=>{
            item.style.opacity='0.5'
         });
         dotss[slideIndex - 1].style.opacity = '1'

      })

      prev.addEventListener('click', ()=>{
        if (offset == 0) {
          offset = +width.replace(/\D/gi, '') * (slides.length - 1)
        }else{
          offset -= +width.replace(/\D/gi, '')
        }
        
          slidesField.style.transform =`translateX(-${offset}px)`

          if (slideIndex == 1) {
            slideIndex = slides.length
          }else{
            slideIndex--
          }

          if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
          }else{
            current.textContent = slideIndex
          }

          dotss.forEach((item, i)=>{
            item.style.opacity='0.5'
         });
         dotss[slideIndex - 1].style.opacity = '1'

      })
      

      const carousel = document.createElement('div')
     carousel.classList.add('carousel-indicators')
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
      wrapperSlides.append(carousel)

      const dotss = []

      for (let i = 0; i < slides.length; i++) {
      const dots = document.createElement('div')
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

        document.querySelector('.carousel-indicators').append(dots)
        if (i == 0) {
          dots.style.opacity='1'
        }
        dotss.push(dots)
      }  
      
      dotss.forEach((item, i)=>{
        item.addEventListener('click', (e)=>{
          const dotSlide = e.target.getAttribute('data-slide-to')
          slideIndex = dotSlide
          offset = +width.replace(/\D/gi, '') * (dotSlide - 1)
          slidesField.style.transform =`translateX(-${offset}px)`
  
            if (slides.length < 10) {
              current.textContent = `0${slideIndex}`
            }else{
              current.textContent = slideIndex
            }
  
            dotss.forEach((item, i)=>{
              item.style.opacity='0.5'
           });
           dotss[slideIndex - 1].style.opacity = '1'
        })
      })

}
/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/tab.js":
/*!*******************************!*\
  !*** ./src/js/modules/tab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tab() {
  const tabWrapper = document.querySelector('.tabheader__items'),
        tab = document.querySelectorAll('.tabheader__item'),
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
}
  

/* harmony default export */ __webpack_exports__["default"] = (tab);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const timer = ()=>{
  const deadlain = '2022-08-25';
  
  function timeRemaining(timeEnd) {
    const t =  Date.parse(timeEnd) - Date.parse(new Date()),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        hours = Math.floor(((t / (1000 * 60 * 60)) % 24)),
        minutes = Math.floor(((t / 1000 / 60) % 60)),
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
}
/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map