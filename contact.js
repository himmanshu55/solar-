// JavaScript to handle the contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the form from submitting traditionally

  // Show a confirmation message
  document.getElementById("confirmationMessage").textContent = "Thank you for contacting us! We will get back to you shortly.";
  
  // Clear the form fields
  document.getElementById("contactForm").reset();
});
