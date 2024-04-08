function checkEmpty(element) {
  if (element.value.trim() === "") {
    element.classList.add('empty');
  } else {
    element.classList.remove('empty');
  }
}

function displayValues(){
    var name = document.getElementById("name").value
    var username = document.getElementById("username").value
    var password  = document.getElementById("password").value
    var email = document.getElementById("email").value
    var address = document.getElementById("address").value
    var gender = document.getElementById("gender").value
    var interests = document.getElementById("interests").value

    document.write("Name: " + name + "<br>");
    document.write("UserName: " + username + "<br>");
    document.write("Password: " + password + "<br>");
    document.write("Email: " + email + "<br>");
    document.write("Address: " + address + "<br>");
    document.write("Gender: " + gender + "<br>");
    document.write("Interests: " + interests + "<br>");
}

