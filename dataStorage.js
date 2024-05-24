document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector("#submit");
  let data = [];

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
      confirm_code: confirm,
      address: address,
      qualification: qual
    };
    
    let count = 0;

    // Validation Start
    if (!email.includes('@gmail.com')) {
      message.textContent = "Check your email";
      message.style.color = "red";
      console.log("Email is Invalid!");
    } else {
      count++;
    }

    if (passkey !== "") {
      count++;
    }
    
    if (address !== "") {
      count++;
    }

    if (passkey !== confirm) {
      message.textContent = "Password does not match!";
      message.style.color = "red";
      console.log("Password does not match");
    } else {
      count++;
    }

    // Validation Track Stop

    // Data Store in Array
    if (count === 4) {
      data.push(newdata);
      message.textContent = "Successfully Registered!";
      message.style.color = "green";
      console.log(data);

      // Save data to localStorage for persistence
      localStorage.setItem('userData', JSON.stringify(data));
    }
  });
});
