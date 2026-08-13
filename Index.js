const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form");
const message = document.getElementById("message");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.form;

        tabs.forEach((btn) => btn.classList.remove("active"));
        tab.classList.add("active");

        forms.forEach((form) => {
            form.classList.toggle("active", form.id === `${target}Form`);
        });
    });
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Login successful!";
    message.style.color = "green";
});

document.getElementById("signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    message.textContent = "Account created successfully!";
    message.style.color = "green";
});