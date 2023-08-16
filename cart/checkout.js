var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    window.location.assign("./Hand_Care.html")
  });
}

// function myFunction() {
//     document.getElementById("dropdown").style.backgroundColor = "lightblue";
//   }

var x=document.getElementById("dropdown");
x.addEventListener("click",function()
{
   // document.getElementById("dropdown").style.backgroundColor = "lightblue";
   window.location.assign("./Hand_Care.html")
});



var cartItems = JSON.parse(localStorage.getItem("productArr")) || [];
console.log(cartItems.length);


function displayCartItems() {
  var cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if(cartItems.length==0)
  {
     //cartContainer.innerHTML = "oops";
     cartContainer.setAttribute("class","add")
     
    var img=document.createElement('img');
    img.src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png";
    var button2=document.createElement('button');
    button2.setAttribute("class","btn")
    button2.innerHTML="visit Home Page"
    var x=document.createElement('br')
    
    button2.addEventListener("click",function()
    {
      window.location.assign("./Hand_Care.html")

    })
    cartContainer.append(img,x,button2);

  }
  else{
    cartItems.forEach(function (item) {
      var cartItemDiv = createCartItem(item);
      
      cartContainer.append(cartItemDiv);
    });

  }
  
  
  //updateCartTotal();
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
  



  var deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", function () {
    removeItemFromCart(item);
  });
 // cartItemDiv.appendChild(deleteButton);
  card.append(itemName,itemPrice,deleteButton);
  body.append(imgdiv,card);



  mainDiv.append(body);
  //return cartItemDiv;
  return mainDiv;
}



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
displayCartItems();
