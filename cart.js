"use strict";
retrieveUserData();
retrieveCartData();

function deleteHandler(){
    console.log(event.target);
}

if (localStorage.users && localStorage.cart){
    var mainEl = document.getElementById('main');
    for(var i=0; i<cart.length; i++){ 
        var nameEl = document.createElement('h2');
        nameEl.textContent = cart[i]; //The first item in the array in ''
        mainEl.appendChild(nameEl);
        var quantityTitle = document.createElement('h3');
        quantityTitle.textContent = 'Quantity';
        var quantityEl = document.createElement('p');
        quantityEl.textContent = amount[i];
        mainEl.appendChild(quantityEl);
        var deleteEl = document.createElement('button');
        deleteEl.innerHTML = "Delete";
        mainEl.appendChild(deleteEl);
    }
}else{
    alert("There is nothing here.");
}
document.getElementById("button").addEventListener('click',deleteHandler);