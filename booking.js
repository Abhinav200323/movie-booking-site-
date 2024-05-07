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
  var totalPrice = seatNumber * price;
  document.getElementById("totalPrice").innerText = "Total Price: $" + totalPrice.toFixed(2);
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

