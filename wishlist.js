let cardKey =["wishlist1","wishlist2","wishlist3","wishlist4","wishlist5"];
let wishCard  =[];
for(let i =0; i< cardKey.length; i++){
    let data =localStorage.getItem(cardKey[i]);
    console.log(data);
    let data1 = JSON.parse(data);
    console.log(data1);
    let data3 = wishCard.push(data1);
    //wishCard.push(JSON.parse());
    console.log(data3);
}
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
function buybutton(card){
    let buyButton = document.createElement("button");
    buyButton.textContent = 'Buy Now';
    buyButton.classList.add('buy');
    buyButton.addEventListener('click',()=>{
        cardNumber = card.id;
    });
    return buyButton;
}
function removebutton(card){
    let removeButton = document.createElement("button");
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click',()=>{
        cardNumber = card.id;
    });
    return removeButton;
}
function createCard(card){
    let cardImg = createImage(card);
    let nameh2 = productName(card);
    let price = productPrice(card);
    let buyButton = buybutton(card);
    let removeButton = removebutton(card);

    let division = document.createElement("div");
    division.appendChild(cardImg);
    division.appendChild(nameh2);
    division.appendChild(price);
    division.appendChild(buyButton);
    division.appendChild(removeButton);
    division.classList.add('productcard');

    return division;
}

//code to add card inn thee container
    wishCard.forEach((card) => {
        cardContainer.appendChild(createCard(card));
    })    
//code to reemove item
let remove = document.querySelectorAll(".remove");
function removeFromLocalStorage(cardData,cardNumber){
    for(let i =0;i< cardData.length;i++){
        if(cardData[i].id == cardNumber){
            localStorage.remove("wishlist" + cardData[i]['id']);
        }
    }
}
remove.forEach((button) =>{
    button.addEventListener('click',() =>{
        alert("id");
        removeFromLocalStorage(cardData,cardNumber);
        alert(cardNumber);
    })
})