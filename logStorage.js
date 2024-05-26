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

  
  let reset= document.querySelector("#reset")
  reset.addEventListener("click",function(){
    let username="mahavir23@gmail.com";
    let password="Mahavir23@"
    const confirm=window.confirm("Only authorized Person allowed!")

    if(confirm){
    let useroutput=prompt("Authorized member email:")
    let userpass=prompt("Password: ")

    if(username === useroutput && password === userpass){
    logdata.clear()
    alert("All data has been cleared!")
    }else{
      alert('You has not authorized');
    }
  }
  })
});
