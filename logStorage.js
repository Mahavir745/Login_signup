document.addEventListener('DOMContentLoaded', function() {
  // Load data from localStorage
  const data = JSON.parse(localStorage.getItem('userData')) || [];

  // Login id enquiry Check
  let login_btn = document.querySelector("#loginButton");

  login_btn.addEventListener("click", function(e) {
    e.preventDefault();

    let loginUser = document.querySelector("#userName").value;
    let loginPass = document.querySelector("#Password").value;
    let newmessage = document.querySelector("#newmessage");

    let found = false;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === loginUser && data[i].password === loginPass) {
        found = true;
        break;
      }
    }

    if (found) {
      newmessage.innerHTML = `Login sucessfull: <a href="view.html" id='view'>View</a>`;
      let views=document.querySelector("#view")
      views.click()
      newmessage.style.color = "green";

      localStorage.setItem('result', JSON.stringify(data));
      
    } else {
      newmessage.textContent = "Login Failed! Incorrect email or password.";
      newmessage.style.color = "red";
    }
  });
});
