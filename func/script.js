function sayHello(){
    console.log("こんにちは");
}

sayHello();

function satHelloName(name){
    console.log("こんにちは、" + name);
}

sayHelloName("太郎");


function callFunc(elm, price){
    const element = document.queryselecter(elm);
    element.textContent = "商品の値段は" + price + "円です";
}

callFunc("p#product1", 3000 );
callFunc("p#product2", 5000 );
callFunc("p#product3", 7000 );
callFunc("p#product4", 10000 );
callFunc("p#product5", 13000 );


