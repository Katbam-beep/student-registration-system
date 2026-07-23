const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent = `Registration Successful!  Welcome, ${name}.`;

    form.reset();
});