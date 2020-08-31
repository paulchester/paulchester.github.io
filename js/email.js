var fields = {};
document.addEventListener("DOMContentLoaded", function() {
    fields.first_name = document.getElementById('first_name');
    fields.last_name = document.getElementById('last_name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
})

class User {
    constructor(first_name, last_name, email, message) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.message = message;
    }
}
function sendMessage() {
    let usr = new User(first_name.value, last_name.value, email.value, message.value);
    alert(`Thank you ${usr.first_name}, your message has been sucessfuly sent`);
}