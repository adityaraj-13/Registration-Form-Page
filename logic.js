document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (username && email && password) {
            
            document.querySelector(".container").classList.add("hidden");
            // Display the success message
            successMessage.classList.add("show");

            // Reset form fields after 3 seconds and show the form again
            setTimeout(() => {
                document.querySelector(".container").classList.remove("hidden");
                successMessage.classList.remove("show");
                form.reset();
            }, 3000);
        }
    });
});
