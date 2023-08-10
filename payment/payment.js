var options = {
    "key": "rzp_test_PK4eclIoK0c3c0", // Enter the Key ID generated from the Dashboard
    "amount": "1000",
    "currency": "INR",
    "description": "Acme Corp",
    "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    "prefill":
    {
      "email": "gaurav.kumar@example.com",
      "contact": +919900000000,
    },
    
  };
  var rzp1 = new Razorpay(options);
  document.getElementById('checkout').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
  }