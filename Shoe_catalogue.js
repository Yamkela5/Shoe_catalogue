var Templ = document.querySelector('#template');
var brandDp = document.querySelector('#template1');
var sizeDp = document.querySelector('#template2');
var colorDp = document.querySelector('#template3');

var mybtn = document.querySelector('#button');
//console.log(mybtn);



var shoes = [{
    Color : 'black',
    Price : 1350,
    Instock : 15,
    Size : 5,
    Brand : 'Nike',
    Image : 'nike black.jpg'
  },
  {
    Color : 'white',
    Price : 275,
    Instock : 3,
    Size : 7,
    Brand : 'Adidas',
    Image : 'nike black.jpg'
  },
  {
    Color : 'Navy',
    Price : 275,
    Instock : 3,
    Size : 3,
    Brand : 'Sissy Boy',
    Image : 'nike black.jpg'
  },
  {
    Color : 'White',
    Price : 1275,
    Instock : 12,
    Size : 7,
    Brand : 'Batman'
  },
  {
    Color : 'Pink',
    Price : 905,
    Instock : 12,
    Size : 7,
    Brand : 'Timberland',
    Image : 'nike black.jpg'
  },
  {
    Color : 'Grey',
    Price : 2905,
    Instock : 12,
    Size : 6,
    Brand : 'Asics',
    Image : 'nike black.jpg'
  },
  {
    Color : 'White',
    Price : 805,
    Instock : 12,
    Size : 7,
    Brand : 'Vans'
}];

// var Templ = document.querySelector('#template').innerHTML;
//display dropdowns
var comp = Handlebars.compile(colorDp.innerHTML);
var result = comp({shoeData:shoes})
console.log(result);
var color =document.querySelector('.color')
color.innerHTML=result;
var comp = Handlebars.compile(sizeDp.innerHTML);
var result = comp({shoeData:shoes})
console.log(result);
var size =document.querySelector('.size')
size.innerHTML=result;
var comp = Handlebars.compile(brandDp.innerHTML);
var result = comp({shoeData:shoes})
console.log(result);
var brand =document.querySelector('.brand')
brand.innerHTML=result;
//dropdowns are now displaying
var List = [];

mybtn.addEventListener('click',function(){
  //console.log('click');
  var result = comp({shoe:shoes})
  result;
});
