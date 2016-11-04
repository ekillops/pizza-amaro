var Pizza = function(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function (size, toppings) {
  var price = 0;

  switch (size) {
    case "small":
      price += 12;
      break;
    case "medium":
      price += 16;
      break;
    case "small":
      price += 12;
      break;
    default:
      break;
  }

  toppings.forEach(function(topping){
    price += 2;
  })

  return price;
}





$(document).ready(function(){


$("form#pizza-order").submit(function(event){
  event.preventDefault();



});




});



// $("input:checkbox[name=pepperoni]").is(":checked")
