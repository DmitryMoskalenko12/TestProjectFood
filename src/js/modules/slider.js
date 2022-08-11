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
export default slider;