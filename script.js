function submitForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Message sent! We'll get back to you at " + email);
    }
}
