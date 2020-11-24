function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:"
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
        var selectedSize = sizeArray[i].value;
        text1 = text1+selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal =10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Double Extra Large Pizza") {
        sizeTotal = 20;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+ runningTotal+".00"+"</strong></h3>";
};

function getVeggies(runningTotal,text1) {
    var veggiesTotal = 0;
    var selectedVeggies = [];
    var veggiesArray = document.getElementsByClassName("veggies");
    for (var v = 0; v < veggiesArray.length; v++) {
        selectedVeggies.push(veggiesArray[v].value);
        console.log("selected veggie item: ("+veggiesArray[v].value+")");
        text1 = text1+veggiesArray[v].value+"<br>";
    }
    var veggieCount = selectedVeggies.length;
    if(veggieCount > 1) {
        veggiesTotal = (veggieCount -1);
    }else {
        veggiesTotal = 0;
    }
    runningTotal = (runningTotal + veggiesTotal);
    console.log("total selcted veggie items: "+veggieCount);
    console.log(veggieCount+"veggie - 1 free veggie = "+"$"+veggiesTotal+".00");
    console.log("veggie text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1
    document.getElementById("totalPrice").innerHTML="<h3>Total: <strong>$"+ runningTotal+".00"+"</strong></h3>";
}