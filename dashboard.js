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
    buyButton.addEventListener('click',()=>{
        cardNumber2 = card.id;
    })
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
            localStorage.setItem("wishlist" + cardData[i]['id'], JSON.stringify(cardData[i]));
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
/*let buy = document.querySelectorAll(".buy");
function sendtoLocalStorage(cardData,cardNumber2){
    for(let i =0;i< cardData.length;i++){
        if(cardData[i].id == cardNumber2){
            localStorage.setItem("buy" + cardData[i]['id'], JSON.stringify(cardData[i]));
        }
    }
}
buy.forEach((button)=>{
    button.addEventListener('click',()=>{
        alert("Sucessfully buy this Product");
        sendtoLocalStorage(cardData,cardNumber2);
        alert(cardNumber2);
    });
})*/
