document.addEventListener('DOMContentLoaded', function() {
  // Load logdata from localStorage
  const logdata = JSON.parse(localStorage.getItem('userData')) || [];

  // Login id enquiry Check
  let login_btn = document.querySelector("#loginButton");

  login_btn.addEventListener("click", function(e) {
    e.preventDefault();

    let loginUser = document.querySelector("#userName").value;
    let loginPass = document.querySelector("#Password").value;
    let newmessage = document.querySelector("#newmessage");

    let foundUser = logdata.find(user => user.email === loginUser && user.password === loginPass);

    if (foundUser) {
      // newmessage.innerHTML = `Login successful: <a href="view.html">View</a>`;
      // newmessage.style.color = "green";
      
      // Save the current user data to localStorage
      localStorage.setItem('currentUser', JSON.stringify(foundUser));

      // Redirect to view.html
      window.location.href = 'view.html';
    } else {
      newmessage.textContent = "Login Failed! Incorrect email or password.";
      newmessage.style.color = "red";
    }
  });
});
