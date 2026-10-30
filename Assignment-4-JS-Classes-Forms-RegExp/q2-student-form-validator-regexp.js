// Q2. Student Form Validator (Forms + RegExp)
// Run this file in a browser. It creates the form and validates every field.

(() => {
    const style = document.createElement("style");
    style.textContent = [
        "body{font-family:Arial,sans-serif;background:#f4f7fb;color:#202938;margin:24px}",
        ".student-form-app{max-width:600px;margin:auto;background:#fff;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}",
        ".student-form-app label{display:block;margin:16px 0 6px;font-weight:600}",
        ".student-form-app input{box-sizing:border-box;width:100%;padding:11px;border:2px solid #cbd5e1;border-radius:7px;font-size:16px}",
        ".student-form-app input.valid{border-color:#16a34a}",
        ".student-form-app input.invalid{border-color:#dc2626}",
        ".field-error{min-height:18px;margin:4px 0 0;color:#dc2626;font-size:13px}",
        ".student-form-app button{margin-top:18px;padding:10px 16px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}",
        ".student-success{color:#15803d;font-weight:600}"
    ].join("");
    document.head.appendChild(style);

    const app = document.createElement("main");
    app.className = "student-form-app";
    app.innerHTML =
        "<h1>Student Registration</h1>" +
        '<form id="student-form" novalidate>' +
        '<label for="student-name">Name</label><input id="student-name" name="name" autocomplete="name">' +
        '<p class="field-error" id="name-error" aria-live="polite"></p>' +
        '<label for="student-email">Email</label><input id="student-email" name="email" type="email" autocomplete="email">' +
        '<p class="field-error" id="email-error" aria-live="polite"></p>' +
        '<label for="student-phone">Phone</label><input id="student-phone" name="phone" type="tel" inputmode="numeric" maxlength="10">' +
        '<p class="field-error" id="phone-error" aria-live="polite"></p>' +
        '<label for="student-password">Password</label><input id="student-password" name="password" type="password" autocomplete="new-password">' +
        '<p class="field-error" id="password-error" aria-live="polite"></p>' +
        '<button type="submit">Validate Registration</button></form>' +
        '<p id="student-success" class="student-success" role="status"></p>';
    document.body.appendChild(app);

    // Regular expressions based on the assignment requirements.
    const patterns = {
        name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
        email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        phone: /^\d{10}$/,
        password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s]).+$/
    };

    const fields = [
        { key: "name", input: app.querySelector("#student-name"), error: app.querySelector("#name-error"), message: "Use alphabets only (spaces between names are allowed)." },
        { key: "email", input: app.querySelector("#student-email"), error: app.querySelector("#email-error"), message: "Enter a valid email, for example example@domain.com." },
        { key: "phone", input: app.querySelector("#student-phone"), error: app.querySelector("#phone-error"), message: "Phone number must contain exactly 10 digits." },
        { key: "password", input: app.querySelector("#student-password"), error: app.querySelector("#password-error"), message: "Password needs at least one uppercase letter, one number, and one special character." }
    ];

    function validateField(field) {
        const valid = patterns[field.key].test(field.input.value.trim());
        field.input.classList.toggle("valid", valid);
        field.input.classList.toggle("invalid", !valid);
        field.error.textContent = valid ? "" : field.message;
        field.input.setAttribute("aria-invalid", String(!valid));
        return valid;
    }

    fields.forEach((field) => {
        field.input.addEventListener("input", () => {
            validateField(field);
            app.querySelector("#student-success").textContent = "";
        });
    });

    app.querySelector("#student-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const allValid = fields.map(validateField).every(Boolean);
        app.querySelector("#student-success").textContent = allValid
            ? "All student details are valid."
            : "Please correct the highlighted fields.";
    });
})();
