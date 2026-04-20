const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let valid = true;
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("msgError").textContent = "";
  document.getElementById("success").textContent = "";
  if (name === "") {
    document.getElementById("nameError").textContent = "Enter your name";
    valid = false;
  }
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(pattern)) {
    document.getElementById("emailError").textContent = "Enter valid email";
    valid = false;
  }
  if (message === "") {
    document.getElementById("msgError").textContent = "Enter message";
    valid = false;
  }
  if (valid) {
    document.getElementById("success").textContent = "Message sent successfully 🚀";
    form.reset();
  }
});
