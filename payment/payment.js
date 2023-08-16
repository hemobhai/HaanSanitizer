
  //rzp_test_nHEqTxeO0baMLu
//rzp_test_eZAkYZNKND9rYF
// rzp_test_Eyo7lQjPTWUYBb
var options = {
  "key": "rzp_test_eZAkYZNKND9rYF", // Enter the Key ID generated from the Dashboard
  "amount": "",
  "currency": "INR",
  "description": "Acme Corp",
  "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Jallianwala_Bagh_in_Day_light.JPG/330px-Jallianwala_Bagh_in_Day_light.JPG",
  "prefill":
  {
    "email": "gaurav.kumar@example.com",
    "contact": +919900000000,
  },
  config: {
    display: {
      blocks: {
        utib: { //name for Axis block
          name: "Pay using Axis Bank",
          instruments: [
            {
              method: "card",
              issuers: ["UTIB"]
            },
            {
              method: "netbanking",
              banks: ["UTIB"]
            },
          ]
        },
        other: { //  name for other block
          name: "Other Payment modes",
          instruments: [
            {
              method: "card",
              issuers: ["ICIC"]
            },
            {
              method: 'netbanking',
            }
          ]
        }
      },
      hide: [
        {
        method: "upi"
        }
      ],
      sequence: ["block.utib", "block.other"],
      preferences: {
        show_default_blocks: false // Should Checkout show its default blocks?
      }
    }
  },
  "handler": function (response) {
    //alert(response.razorpay_payment_id);
    //alert("hello amrit");
    window.location.href = "./Hand_Care.html";
  //   alert(response.razorpay_payment_id);
  // alert(response.razorpay_order_id);
  // alert(response.razorpay_signature)
  },
  "modal": {
    "ondismiss": function () {
      if (confirm("Are you sure, you want to close the form?")) {
        txt = "You pressed OK!";
        console.log("Checkout form closed by the user");
      } else {
        txt = "You pressed Cancel!";
        console.log("Complete the Payment")
      }
    }
  }
};









  var cartItems = JSON.parse(localStorage.getItem("productArr")) || [];
console.log(cartItems.length);


function displayCartItems() {
  var cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if(cartItems.length==0)
  {
    cartContainer.innerHTML = "oops";
  }
  else{
    cartItems.forEach(function (item) {
      var cartItemDiv = createCartItem(item);
      
      cartContainer.append(cartItemDiv);
    });

  }
  
  
  updateCartTotal();
}

function createCartItem(item) {
  var mainDiv = document.createElement("div");
  mainDiv.classList.add("cart-list");

  var body = document.createElement("div");
  body.classList.add("cart-body");

  var imgdiv= document.createElement("div");
  imgdiv.setAttribute("class","card_img");

  var image = document.createElement("img");
  image.setAttribute("class","photo");
  image.src=item.image;
  imgdiv.append(image);
  

  var card= document.createElement("div");
 card.setAttribute("class","card-item")

  var itemName = document.createElement("h5");
  itemName.classList.add("name");
  itemName.textContent = item.title;
  

  var itemPrice = document.createElement("p");
  itemPrice.classList.add("price");
  itemPrice.textContent = "Price: " + item.price;
  



  // var deleteButton = document.createElement("button");
  // deleteButton.classList.add("delete");
  // deleteButton.textContent = "Remove";
  // deleteButton.addEventListener("click", function () {
  //   removeItemFromCart(item);
  // });
 // cartItemDiv.appendChild(deleteButton);
  card.append(itemName,itemPrice);
  body.append(imgdiv,card);



  mainDiv.append(body);
  //return cartItemDiv;
  return mainDiv;
}
//displayCartItems();

function removeItemFromCart(item) {
  var itemIndex = cartItems.findIndex(function (cartItem) {
    return cartItem.title === item.title;
  });

  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1);
    localStorage.setItem("productArr", JSON.stringify(cartItems));
    displayCartItems();
   updateCartTotal();
  }
}

function updateCartTotal() {
  var cartTotalInput = document.querySelector("#cart-total");
  var cartTotal = 0;

  cartItems.forEach(function (item) {
    var total = parseFloat(item.price);
    if (!isNaN(total)) {
      cartTotal += total;
      // options.amount=cartTotal*100;
     

    }
  });

  cartTotalInput.value = cartTotal.toFixed(2);
}


function applyCoupon() {
  var cartTotalInput = document.querySelector("#cart-total");
  var couponCodeInput = document.querySelector("#pcode");
  var couponCode = couponCodeInput.value.trim();

  if (couponCode === "masai30") {
    // Apply your coupon code logic here
    var discount = 0.3 * parseFloat(cartTotalInput.value);
    var discountedTotal = parseFloat(cartTotalInput.value) - discount;
    cartTotalInput.value = discountedTotal.toFixed(2);
    var z= cartTotalInput.value ;
  }
  
  // Clear the coupon code input
  couponCodeInput.value = "";
  return z;
}


document.querySelector("#promobutton").addEventListener("click", function () {
  var v=applyCoupon();
  options.amount=v*100;

var rzp1 = new Razorpay(options);
document.getElementById('checkout').onclick = function (e) {
 
  rzp1.open();
  e.preventDefault();
}

});
// Add the product to the cart
function addToCart(product) {
  cartItems.push(product);
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Display the updated cart items and cart total
  displayCartItems();
  updateCartTotal();
}

displayCartItems();

//localStorage.setItem("cart", JSON.stringify(cartItems));
var y=document.querySelector("#pcode");
var x = document.querySelector("#cart-total");
// let {amount = cartTotalInput.value}=options;

// if(y.value=="masai30")
// {
//   x.value=x.value-.30*x.value;
//   console.log(x.value);
//    options.amount=x.value*100;

// }
// else if (y.value==""){
//   options.amount=x.value*100;

// }
   


 options.amount=x.value*100;

var rzp1 = new Razorpay(options);
document.getElementById('checkout').onclick = function (e) {
 
  rzp1.open();
  e.preventDefault();
}
  