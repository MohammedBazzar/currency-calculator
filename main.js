var currency = document.querySelector(".currencyForm");

currency.onsubmit= function(e){
    e.preventDefault();
    var getCurrency=e.target.elements;
    var toJOD=getCurrency[0].value*5;
    var toUSD=getCurrency[0].value*3.7;
    console.log(toJOD);
    console.log(toUSD);
    document.querySelector(".jod").innerHTML = toJOD;
document.querySelector(".usd").innerHTML = toUSD;
}

