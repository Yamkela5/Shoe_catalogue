//my shoe data..
var shoeData = [{

        color: 'black',
        size: 4,
        brand: 'Nike',
        price: '1280',
        instock : '14',
        //image : 'nike bl.jpg'
    },
    {
        color: 'white',
        size: 2,
        brand: 'adidas',
        price: '275',
        instock : '6'
    },
      {  color: 'grey',
        size: 5,
        brand: 'Timberland',
        price: '350',
        instock : '7',
        //image : 'nike bl.jpg'
    },
    {
        color: 'Navy',
        size: 3,
        brand: 'Carvella',
        price: '275',
        instock : '9'
    },

    {
        color: 'brown',
        size: 6,
        brand: 'puma',
        price: '350',
        instock : '4',
        //image : 'nike bl.jpg'
    },
    {
        color: 'yellow',
        size: 2,
        brand: 'Stilletos',
        price: '1275',
        instock : '10'
    },
];
var tableTemplate = document.querySelector("#tableTemplate").innerHTML;

var tableTemplateInst = Handlebars.compile(tableTemplate);

var dropTemp = document.querySelector("#dropTemp").innerHTML;
var dropDownTemplateInst = Handlebars.compile(dropTemp);
var Output = document.querySelector('#Output');
Output.innerHTML = dropDownTemplateInst({
    key: shoeData
});


var colorMap = {};
var colorList = [];

function Colors(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (colorMap[shoeStock.color] === undefined) {
            colorMap[shoeStock.color] = shoeStock.color;
            colorList.push(shoeStock.color);
        }
    }
    return colorList;
}

var sizeMap = {};
var sizeList = [];

function Size(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (sizeMap[shoeStock.size] === undefined) {
            sizeMap[shoeStock.size] = shoeStock.size;
            sizeList.push(shoeStock.size);
        }
    }
    return sizeList;
}

var brandMap = {};
var brandList = [];

function Brands(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (brandMap[shoeStock.brand] === undefined) {
            brandMap[shoeStock.brand] = shoeStock.brand;
            brandList.push(shoeStock.brand);
        }
    }
    return brandList;
}


var priceMap = {};
var PriceList = [];

function Price(myShoeStock) {
    for (var i = 0; i < myShoeStock.length; i++) {
        var shoeStock = myShoeStock[i];

        if (priceMap[shoeStock.price] === undefined) {
            priceMap[shoeStock.price] = shoeStock.price;
            PriceList.push(shoeStock.price);
        }
    }
    return PriceList;
}



function displayMyShoe(myShoeStock) {
    var color = Colors(myShoeStock);
    var size = Size(myShoeStock);
    var brand = Brands(myShoeStock);
    var prices = Price(myShoeStock);

    var Output = document.querySelector('#Output');
    // console.log(color,size,brand);
    var ogarnisedDropdownData = dropDownTemplateInst({
        colors: color.sort(),
        sizes: size.sort(),
        brands: brand.sort()
    })

    //console.log(ogarnisedDropdownData);
    var colorDrpDwn = document.querySelector('#colorDrpDwn');
    var sizeDrpDwn = document.querySelector('#sizeDrpDwn');
    var brandDrpDwn = document.querySelector('#brandDrpDwn');
    var tableDisplay = document.querySelector('#tableDisplay');

    var display = tableTemplateInst({
        shoes: myShoeStock
    });



    Output.innerHTML = ogarnisedDropdownData;

    tableDisplay.innerHTML = display;
};


var addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', function() {

    var new_color = document.getElementById("new_color");
    var new_color = document.getElementById("new_color");
    var new_size = document.getElementById("new_size");
    var new_brand = document.getElementById("new_brand");
    var new_price = document.getElementById("new_price");
    var new_stock = document.getElementById("new_stock");
    if (new_color !== undefined && new_size !== undefined && new_brand !== undefined && new_price !== undefined && new_stock !== undefined) {
        shoeData.push({
            size: Number(new_size.value),
            instock: Number(new_stock.value),
            color: new_color.value,
            brand: new_brand.value,
            price: new_price.value

        })
    }
     displayMyShoe(shoeData)
});

displayMyShoe(shoeData)
Output.addEventListener('click', function(evt) {
    if (evt.target.name = "Output") {
      var dropDownTemplateInst = Handlebars.compile(dropTemp);

        var searchedColor = [];


        for (var i = 0; i < shoeData.length; i++) {
            var myStock = shoeData[i];
            if (myStock.brand === brandDrpDwn.value || myStock.color === colorDrpDwn.value || myStock.size === Number(sizeDrpDwn.value)) {
                searchedColor.push(myStock)
            }

        }
        displayMyShoe(searchedColor)


    }
    displayMyShoe(searchedColor)

});



var searchButton = document.getElementById('search');
searchButton.addEventListener('click', function() {
  var tableTemplateInst = Handlebars.compile(tableTemplate);
  var tableDisplay = document.querySelector('#tableDisplay');
  var display = tableTemplateInst({shoes : shoeData});
  tableDisplay.innerHTML = display;

});
