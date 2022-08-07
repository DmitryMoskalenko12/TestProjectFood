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

const trigger = document.querySelectorAll('.btn');
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
     
})