document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Listen for form submission
  form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  let isValid = true;
const messages = [];


const username = document.getElementById('username').value.trim();
if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters long.");
}

const email = document.getElementById('email').value.trim();
if (!email.includes("@") || !email.includes(".")) {
  isValid = false;
  messages.push("Please enter a valid email address (must include '@' and '.').");
}

const password = document.getElementById('password').value.trim();
if (password.length < 8){
  isValid = false;
  messages.push("Password must be greater than or equal to 8 characters.");
}
// Show feedbackDiv
feedbackDiv.style.display = "block";

if (isValid) {
  feedbackDiv.textContent = "Registration successful!";
  feedbackDiv.style.color = "#28a745"; 
} else {
  feedbackDiv.innerHTML = messages.join("<br>"); 
  feedbackDiv.style.color = "#dc3545"; 
}

  });

    
});