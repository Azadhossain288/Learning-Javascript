// Select the form and message paragraph
const form = document.getElementById("myForm");
const message = document.getElementById("message");

// Handle form submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple validation
    if(name === "" || email === "" || password === "") {
        message.style.color = "red";
        message.innerText = "Please fill in all fields!";
        return;
    }

    if(password.length < 6){
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters!";
        return;
    }

    // If all good
    message.style.color = "green";
    message.innerText = `Thank you, ${name}! Your form has been submitted successfully.`;

    // Clear the form
    form.reset();
});
