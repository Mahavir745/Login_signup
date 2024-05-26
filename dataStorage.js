document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector("#submit");
  
  // Retrieve existing data from localStorage
  let data = JSON.parse(localStorage.getItem('userData')) || [];

  btn.addEventListener("click", function(e) {
    e.preventDefault();

    let email = document.querySelector("#username").value;
    let passkey = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm_pass").value;
    let address = document.querySelector("#address").value;
    let qual = document.querySelector("#qualification").value;
    let message = document.querySelector("#message");

    let newdata = {
      email: email,
      password: passkey,
      address: address,
      qualification: qual
    };

    // Validation
    if (!email.includes('@')) {
      message.textContent = "Check your email";
      message.style.color = "red";
      console.log("Email is Invalid!");
      return;
    }
    
      // Check if email already exists
      let emailExists = data.some(user => user.email === email);
      if (emailExists) {
        message.textContent = "Email already registered. Please use another email.";
        message.style.color = "red";
        console.log("Email already exists");
        return;
      }

    if (passkey === "") {
      message.textContent = "Password cannot be empty";
      message.style.color = "red";
      console.log("Password is empty");
      return;
    }

    if (passkey.length < 6) {
      message.textContent = "Password must be at least 6 characters";
      message.style.color = "red";
      console.log("Password too short");
      return;
    }

    if (passkey !== confirm) {
      message.textContent = "Password does not match!";
      message.style.color = "red";
      console.log("Password does not match");
      return;
    }

    if (address === "") {
      message.textContent = "Address cannot be empty";
      message.style.color = "red";
      console.log("Address is empty");
      return;
    }

    if (qual === "none") {
      message.textContent = "Please select a qualification";
      message.style.color = "red";
      console.log("Qualification not selected");
      return;
    }

    // Data Store in Array
    data.push(newdata);
    // message.textContent = "Successfully Registered!";
    // message.style.color = "green";
    window.alert("You are successfully Registered!")
    console.log(data);

    // Save data to localStorage for persistence
    localStorage.setItem('userData', JSON.stringify(data));

    // Clear the form fields after successful submission
    document.querySelector("#form-data").reset();
  });
});
