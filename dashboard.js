    let cardData =[
        {url:'lenovogamingpc.jpg',name:'Lenovo Legion Gaming PC',actualPrice:'10,00,000',discountPrice:'5,00,000',id:1},
        {url:'lenovocpu.jpg',name:'Lenovo Thinkcentre PC',actualPrice:'1,00,000',discountPrice:'50,000',id:2},
        {url:'lenovotab.jpg',name:'Wifi Only Android 11 Lenovo Tab M10 3rd GEN FHD - TB-328 FU , Accelerometer, Screen Size: 10.1',actualPrice:'20,000',discountPrice:'14,999',id:3},
        {url:'lenovogaming.jpg',name:'Lenovo Thinkcentre gaming PC',actualPrice:'1,50,000',discountPrice:'80,000',id:4},
        {url:'lenovolaptop.jpg',name:'ThinkPad P16s 40.64cms - 13th Gen Intel i7',actualPrice:'1,60,999',discountPrice:'1,39,699',id:5}
    ];
let cardNumber =0;
//code to acess card container
let cardContainer = document.getElementById("cardHolder");

//function to creatte image
function createImage(card){
    let cardImg = document.createElement("img");
    cardImg.setAttribute('src',card.url);
    cardImg.classList.add('image');
    let imgDIv = document.createElement("div");
    imgDIv.classList.add('imgDiv');
    imgDIv.appendChild(cardImg);
    return imgDIv;
}
//code to create name 
function productName(card){
    let nameh2 = document.createElement("h2");
    nameh2.textContent = card.name;
    return nameh2;
}
//function to create price 
function productPrice(card){
    let actualPricedel = document.createElement("del");
    actualPricedel.textContent = card.actualPrice;
    let afterdiscountPrice = document.createElement("p");
    afterdiscountPrice.textContent = card.discountPrice;
    afterdiscountPrice.appendChild(actualPricedel);
    return afterdiscountPrice;
}
// functionn to crete buybutton
function buybutton(card){
    let buyButton = document.createElement("button");
    buyButton.textContent = 'Buy Now';
    buyButton.classList.add('buy');
    return buyButton;
}
//function to create a button to add to wishlist
function addwishlist(card){
    let addWishlist = document.createElement("button");
    addWishlist.textContent = 'Add to WishList';
    addWishlist.classList.add('wish');
    addWishlist.addEventListener('click',()=>{
        cardNumber = card.id;
    })
    return addWishlist;
}
//function to create card
function createCard(card){
    let cardImg = createImage(card);
    let nameh2 = productName(card);
    let price = productPrice(card);
    let buyButton = buybutton(card);
    let addWishlist = addwishlist(card);

    let division = document.createElement("div");
    division.appendChild(cardImg);
    division.appendChild(nameh2);
    division.appendChild(price);
    division.appendChild(buyButton);
    division.appendChild(addWishlist);
    division.classList.add('productcard');

    return division;
}
//code to add card inn thee container
cardData.forEach((card) => {
    cardContainer.appendChild(createCard(card));
})
let wishlist = document.querySelectorAll(".wish");
function sendtoLocalStorage(cardData,cardNumber){
    for(let i =0;i< cardData.length;i++){
        if(cardData[i].id == cardNumber){
            localStorage.setItem(cardData[i]['id'], JSON.stringify(cardData[i]));
        }
    }
}
wishlist.forEach((button) =>{
    button.addEventListener('click',() =>{
        alert("id");
        sendtoLocalStorage(cardData,cardNumber);
        alert(cardNumber);
    })
})

//code to add functionality to buy
let buy = document.querySelectorAll(".buy");
buy.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert("Sucessfully buy this Product");
    });
})
