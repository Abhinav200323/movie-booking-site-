function payWithUPI() {
  // Prompt user to complete payment via UPI
  var amount = document.getElementById("totalAmount").innerText;
  var confirmed = confirm("Please complete the payment of " + amount + " using UPI.");
  if (confirmed) {
    redirectToConfirmation();
  }
}

function payWithPaytm() {
  // Prompt user to complete payment via Paytm
  var amount = document.getElementById("totalAmount").innerText;
  var confirmed = confirm("Please complete the payment of " + amount + " using Paytm.");
  if (confirmed) {
    redirectToConfirmation();
  }
}

function payWithGooglePay() {
  // Prompt user to complete payment via Google Pay
  var amount = document.getElementById("totalAmount").innerText;
  var confirmed = confirm("Please complete the payment of " + amount + " using Google Pay.");
  if (confirmed) {
    redirectToConfirmation();
  }
}

function payWithDebitCard() {
  // Prompt user to complete payment via Debit Card
  var amount = document.getElementById("totalAmount").innerText;
  var confirmed = confirm("Please complete the payment of " + amount + " using Debit Card.");
  if (confirmed) {
    redirectToConfirmation();
  }
}

function redirectToConfirmation() {
  // Redirect to confirmation page after payment
  window.location.href = "confirm.html";
}
window.onload = function() {
  setTimeout(function() {
    document.body.classList.add('show-alert');
  }, 1000); // Show alert after 1 second
};

function watchAdvertisement() {
  alert("You have received a discount! Proceed to booking.");
  closeAlert();
}

function closeAlert() {
  document.body.classList.remove('show-alert');
}

function calculateTotal() {
  var seatNumber = parseInt(document.getElementById("seatNumber").value);
  var price = parseFloat(document.getElementById("price").innerText.replace("Price: $", ""));
  var totalPrice = seatNumber * 200;
  document.getElementById("totalPrice").innerText = "Total Price: Rs" + totalPrice.toFixed(2);
}
function showDiscountAlert() {
  closeAlert(); // Close any existing alert before showing the discount alert
  setTimeout(function() {
    document.body.classList.add('show-alert');
  }, 500); // Show alert after 0.5 seconds
}

function bookNow() {
  window.location.href = "pay.html";
}

