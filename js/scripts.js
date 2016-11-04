/* BACK END */

//Pizza object constructor
var Pizza = function(size, sauce, toppings) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = toppings;
}


//Method to calculate pizza price based on size, sauce, and toppings, returns a number
Pizza.prototype.price = function() {
  var price = 0;

  switch (this.size) {
    case "small":
      price += 8;
      break;
    case "medium":
      price += 10;
      break;
    case "large":
      price += 12;
      break;
    default:
      break;
  }

  switch (this.sauce) {
    case ("pesto"):
        price += 1;
      break;
    case ("garlic"):
        price += 1;
      break;
    default:
      break;
  }

  this.toppings.forEach(function(topping){
    price += 2;
  })

  return price;
}

//Method to return string description of pizza eg. "medium pizza with tomato sauce, pepperoni, and mushrooms"
Pizza.prototype.print = function() {
  var pizza = this;
  var plainText = this.size + " pizza with " + pizza.sauce;
  pizza.toppings.forEach(function(topping){
    if (pizza.toppings.length === 1) {
      plainText += (" and " + topping)
    } else if (pizza.toppings.indexOf(topping) === pizza.toppings.length - 1){
      plainText += (", and " + topping);
    } else {
      plainText += (", " + topping);
    }


    //
    // if (pizza.toppings.indexOf(topping) != pizza.toppings.length - 1) {
    //   plainText += (", " + topping);
    // } else if (pizza.toppings.length === 1){
    //   plainText += (" and " + topping)
    // }
  });

  return plainText;
}



/* FRONT END */

//Function to collect input from pizza topping check boxes, returns an array
function getPizzaToppings() {
  var toppingList =[]

  $("input:checkbox[name=toppingOption]:checked").each(function(){
    var topping = $(this).val()
    toppingList.push(topping);
  })

  return toppingList;
}

function printOrder(pizza, outputDivId) {
  $(outputDivId).html("<p>You ordered a " + pizza.print() + ".</p><p>Your order will cost $" + pizza.price() + ".");

}

$(document).ready(function(){


$("form#pizza-order").submit(function(event){

  event.preventDefault();
  var orderPrintTarget = "#orderReceipt";

  var pizzaSize = $('input[name=pizzaSize]:checked').val()
  var pizzaSauce = $('input[name=pizzaSauce]:checked').val()
  var toppings = getPizzaToppings();

  var pizzaOrder = new Pizza(pizzaSize, pizzaSauce, toppings);

  printOrder(pizzaOrder, orderPrintTarget);

});

$("#clearOrder").click(function(){
  $("form#pizza-order").trigger('reset');
  $("#orderReceipt").empty();
});




});



// $("input:checkbox[name=pepperoni]").is(":checked")
