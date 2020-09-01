function validateForm(){
    var fName = document.forms["contactMe"]["first_name"].value;
    var lName = document.forms["contactMe"]["last_name"].value;
    var email = document.forms["contactMe"]["email"].value;
    var message = document.forms["contactMe"]["message"].value;
    if (fName == "") {
        alert("First name must be filled out");
        return false;
    }
    if (lName == "") {
        alert("Last name must be filled out");
        return false;
    }
    if (email == "") {
        alert("email name must be filled out");
        return false;
    }
    if (email.indexOf("@") < 1 || email.indexOf(".") < email.indexOf("@") ) {
        alert("Please enter a valid email address");
        return false;
    }
    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
}