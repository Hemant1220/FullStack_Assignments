// Q8. Dynamic Object Updater
// Edit the form fields and submit; the user object and DOM display update together.

(() => {
    const style = document.createElement("style");
    style.textContent = [
        "body{font-family:Arial,sans-serif;background:#f4f7fb;color:#202938;margin:24px}",
        ".object-app{max-width:580px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}",
        ".object-app label{display:block;margin:16px 0 6px;font-weight:600}",
        ".object-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}",
        ".object-app button{margin-top:18px;padding:10px 16px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}",
        ".object-output{white-space:pre-wrap;background:#f1f5f9;padding:14px;border-radius:8px;margin-top:18px}"
    ].join("");
    document.head.appendChild(style);

    // Initial object specified in the assignment.
    const user = {
        name: "John",
        email: "john@mail.com",
        age: 21
    };

    const app = document.createElement("main");
    app.className = "object-app";
    app.innerHTML =
        '<h1>Dynamic Object Updater</h1><form id="user-form">' +
        '<label for="user-name">Name</label><input id="user-name" name="name" required>' +
        '<label for="user-email">Email</label><input id="user-email" name="email" type="email" required>' +
        '<label for="user-age">Age</label><input id="user-age" name="age" type="number" min="1" required>' +
        '<button type="submit">Update User</button></form>' +
        '<h2>Updated Object</h2><pre class="object-output" id="object-output" aria-live="polite"></pre>';
    document.body.appendChild(app);

    const form = app.querySelector("#user-form");
    const output = app.querySelector("#object-output");
    const nameInput = app.querySelector("#user-name");
    const emailInput = app.querySelector("#user-email");
    const ageInput = app.querySelector("#user-age");

    function renderUser() {
        output.textContent = JSON.stringify(user, null, 2);
    }

    // Put the current object values into the editable fields.
    nameInput.value = user.name;
    emailInput.value = user.email;
    ageInput.value = user.age;
    renderUser();

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) return;

        // Update the existing object rather than replacing it.
        user.name = nameInput.value.trim();
        user.email = emailInput.value.trim();
        user.age = Number(ageInput.value);

        renderUser();
    });
})();
