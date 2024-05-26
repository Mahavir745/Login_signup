document.addEventListener("DOMContentLoaded", function() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let reset= document.querySelector("#reset")
  reset.addEventListener("click",function(){
    let username="mahavir23@gmail.com";
    let password="Mahavir23@"
    const confirm=window.confirm("Only authorized Person allowed!")

    if(confirm){
    let useroutput=prompt("Authorized member email:")
    let userpass=prompt("Password: ")

    if(username === useroutput && password === userpass){
    localStorage.clear()
    alert("All data has been cleared!")
    }else{
      alert('You has not authorized');
    }
  }
  })

  if (!currentUser) {
    console.error("No user data found in localStorage.");
    return;
  }

  let username = document.querySelector("#username");
  let email = document.querySelector("#email");
  let address = document.querySelector("#address");
  let qualification = document.querySelector("#qualification");

  // Extract username from email
  let indexfind = currentUser.email.indexOf("@");
  let final = currentUser.email.slice(0, indexfind);

  // Populate the form fields with the user data
  username.value = final;
  email.value = currentUser.email;
  address.value = currentUser.address;
  qualification.value = currentUser.qualification;
});
