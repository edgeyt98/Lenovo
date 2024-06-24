let cardKey =[1,2,3,4,5];
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
    return buyButton;
}function createCard(card){
    let cardImg = createImage(card);
    let nameh2 = productName(card);
    let price = productPrice(card);
    let buyButton = buybutton(card);

    let division = document.createElement("div");
    division.appendChild(cardImg);
    division.appendChild(nameh2);
    division.appendChild(price);
    division.appendChild(buyButton);
    division.classList.add('productcard');

    return division;
}

//code to add card inn thee container



window.addEventListener('load',(event)=>{
    wishCard.forEach((card) => {
        cardContainer.appendChild(createCard(card));
    })    
})