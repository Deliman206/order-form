'use strict';
var buy = document.getElementById("purchaseProduct").hidden=true;
var users=[];
var cart=[];
var amount=[];

var productNames = ['','bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
if(buy){
    buy.hidden = true;
}

function User(name,street,city,state,zip,phone){
    this.name=name;
    this.street=street;
    this.city=city;
    this.state=state;
    this.zip=zip;
    this.phone=phone;
    users.push(this);
}
(function renderProductList(){
    var selectEl = document.getElementsByName("product")[0];
    for(var i=0; i<productNames.length; i++){
        var optionEl = document.createElement('option');
        optionEl.textContent = productNames[i];
        selectEl.appendChild(optionEl);
    }
})();
function infoHandler(event){
    event.preventDefault();
    if (!event.target.name.value||!event.target.street.value||!event.target.city.value||!event.target.state.value||!event.target.zip.value||!event.target.phone.value){
        return alert('Fields cannot be empty!');
    }
    //Store Data
    var name = event.target.name.value;
    var street = event.target.street.value;
    var city = event.target.city.value;
    var state = event.target.state.value;
    var zip = event.target.zip.value;
    var phone = event.target.phone.value;

    new User(name,street,city,state,zip,phone);
    storeUserData();
    //Do stuff with forms
    document.getElementById("user-info").hidden=true;//Hide Form 1
    document.getElementById("purchaseProduct").hidden=false;//Unhide Form 2
    event.target.reset();//Then reset
}
function addCartHandler(event){
    event.preventDefault();
    if (!event.target.product.value||!event.target.quantity.value){
        return alert('Fields cannot be empty!');
    }
    var item= event.target.product.value;
    var quantity = event.target.quantity.value;
    cart.push(item);
    amount.push(quantity);
    storeCartData();
    event.target.reset();
}
function storeUserData(){
    localStorage.users = JSON.stringify(users);
}
function retrieveUserData(){
    if(localStorage.users){
        localStorage.users;
        users = JSON.parse(localStorage.users);
    }
}
function storeCartData(){
    localStorage.cart = JSON.stringify(cart);
    localStorage.amount = JSON.stringify(amount);
}
function retrieveCartData(){
    if(localStorage.cart){
        localStorage.cart;
        cart = JSON.parse(localStorage.cart);
        localStorage.amount;
        amount = JSON.parse(localStorage.amount);
    }
}
document.getElementById("user-info").addEventListener('submit',infoHandler); //set submit event on info form
document.getElementById("purchaseProduct").addEventListener('submit',addCartHandler); //set submit event on purchase form