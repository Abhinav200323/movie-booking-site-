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
    window.location.href = "confirmation.html";
  }
  