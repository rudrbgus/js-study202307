
// 하나의 상품 !객체!에 대한 설계도
class Product{
  // 객체를 만들 때 초기값을 세팅하는 용도
  constructor(title = '냠냠', image ='https://blog.kakaocdn.net/dn/cSGF4R/btq5h0PUbMx/9RgR2KxK5oEeT9ku9O2xW1/img.png', price =1000, desc='쩝쩝박사님~'){
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = desc;
  }
}
// 객체 생성
const p1 = new Product(
  '냠냠이',
  'https://i.ytimg.com/vi/Dltx1YYP-SA/maxresdefault.jpg',
  2000,
  '냠냠박사님 죽어요');
console.log(p1);
const p2 = new Product();
console.log(p2);




// 한개의 LI 태글르 생성하는 컴포넌트 클래스 설계
class ProductItem{
  constructor(product){
    this.product = product;
  }
  render(){
    const $prod = document.createElement('li');
      $prod.classList.add('product-item');
      $prod.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>${this.product.price}원</h3>
            <p>${this.product.description}</p>
            <button>담기</button>
          </div>
        </div>
      `;
      return $prod;
  }
}




// 상품 목록에 대한 객체
const productList = {
  products: [
    p1,
    p2,
    new Product(
       '애플워치',
       'https://img.danawa.com/prod_img/500000/535/481/img/15481535_1.jpg?_v=20211215103510',
       400000,
       'APPLE watch 2세대 2022'
    ),
    new Product(
       '애플망고',
       'https://www.orangec.co.kr/shopimages/orangec/0340000000243.jpg',
       6000,
       '맛있는 애플망고'
    ),
  ],

  render() {
    // console.log('render!!', this);
    const $app = document.getElementById('app');
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    this.products.forEach(prod => {
      const productItem  = new ProductItem(prod);      
      $prodList.appendChild(productItem.render());
    });
    $app.appendChild($prodList);
  }
};

// 렌더링 명령
productList.render();