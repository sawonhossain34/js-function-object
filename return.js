function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}
var finalPrice = bringSingara(200);
console.log('Eating singara:', finalPrice);