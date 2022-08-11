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
export default card;