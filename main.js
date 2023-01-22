const menuEmail = document.querySelector(".btnmenu");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuX = document.querySelector(".menuX");
const CarIcon = document.querySelector(".carIcon");
const CarMenu = document.querySelector('.main-container-order')
const CardsContainer = document.querySelector('.cards-container')


CarIcon.addEventListener('click', toggleCarMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconMenuX.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    CarMenu.classList.add('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    CarMenu.classList.add('inactive');
}
function toggleCarMenu(){
    CarMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
  
const productList = [];
productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
});
productList.push({
    name: 'Mouse',
    price: 120,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
});
productList.push({
    name: 'Video Card',
    price: 300,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
});

/*<div class="product-card">

            <img src="https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg" alt="product" class="product-img">

            <div class="product-info">
                <div>
                    <h1 class="price">$ 120,00</h1>
                    <p class="product-name">Mouse Gamer</p>
                </div>
                <figure>

                <img src="./Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="purchase-car">

                </figure>
            </div>              
        </div>*/




function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const imgCard = document.createElement('img');
        imgCard.setAttribute('src', product.image)
      
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productInfoDivPrice = document.createElement('h1');
        productInfoDivPrice.innerHTML = '$' + product.price;
        const productInfoDivName = document.createElement('p');
        productInfoDivName.innerHTML = product.name;
      
        productInfoDiv.append(productInfoDivPrice, productInfoDivName)
      
        const productinfoFigure = document.createElement('figure');
        const productimgCart = document.createElement('img');
        productimgCart.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg');
      
        productinfoFigure.append(productimgCart);
        productinfo.append(productInfoDiv, productinfoFigure);
        productCard.append(imgCard, productinfo);
      
        CardsContainer.appendChild(productCard);
      }
}

renderProducts(productList);