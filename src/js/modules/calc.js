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
export default calc;