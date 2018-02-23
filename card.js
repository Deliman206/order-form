var shoppingCart = [];
function Product(name, cost, quantity, picture, description) {
    this.name = name;
    this.cost = cost;
    this.quantity = quantity;
    this.picture = picture;
    this.description = description;
}
Product.prototype.renderDelete = function(){
    if(this.quantity === 0){
        shoppingCart.pop(this);
    }
}
Product.prototype.renderTotal = function(){
    return this.quantity * this.cost;
}
Product.prototype.renderHtmlCard = function(){
    var div = document.createElement('div');
    div.setAttribute(id, 'this.name');
    main.appendChild(div);
    var image = document.createElement('img');
    image.textContent(picture);
    div.appendChild(image);
    var title = document.createElement('h1');
    title.textContent('this.name');
    div.appendChild(title);
    var description = document.createElement('p');
    description = textContent('this.description');
    div.appendChild(description);
    var saleContainer = document.createElement('div');
    saleContainer.setAttribute(id,'sale');
    div.appendChild(sale);
    var saleHeader = document.createElement('h2');
    saleHeader.textContent('Price: ' + this.cost);
    sale.appendChild(saleHeader);
    createHtml(quantityHeader, h2, 'Quantity', sale);
    createHtml(remove, button, 'Delete', sale);
    createHtml(addToCart,button, 'Add To Cart', sale);
}
Product.prototype.renderCSSCard = function(){
    css(div, width, 700);
    css(image, float, right);
    css(image, width, 300);
    css(image, height, 275);
    css(title, width, 350);
    css(description,width,350);
    css(sale,width,350);
    css(remove,width,250);
    css(remove,display,inline-block);
}
new Product('bag',12,0,'/img.bag.jpg','R2D2 rollable bag with handle.');
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function createHtml(variableName, elementToMake, content, appendWhere){
    var variableName = document.createElement('elementToMake');
    variableName.textContent(content);
    appendWhere.appendChild(variableName);
}
function css(element,property, change){
    element.style.property = change;
}