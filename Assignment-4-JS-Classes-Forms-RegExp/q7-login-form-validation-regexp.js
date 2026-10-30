// Q7. Login Form Validation using RegExp
// Run this file in a browser. It displays a specific message for each failed rule.

(() => {
    const style = document.createElement("style");
    style.textContent = [
        "body{font-family:Arial,sans-serif;background:#f4f7fb;color:#202938;margin:24px}",
        ".login-app{max-width:560px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}",
        ".login-app label{display:block;margin:16px 0 6px;font-weight:600}",
        ".login-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}",
        ".login-app button{margin-top:18px;padding:10px 16px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}",
        ".login-errors{color:#b42318;line-height:1.6}.login-success{color:#15803d;font-weight:600}"
    ].join("");
    document.head.appendChild(style);

    const app = document.createElement("main");
    app.className = "login-app";
    app.innerHTML =
        '<h1>Login Validation</h1><form id="login-form" novalidate>' +
        '<label for="login-username">Username</label><input id="login-username" autocomplete="username">' +
        '<label for="login-password">Password</label><input id="login-password" type="password" autocomplete="current-password">' +
        '<button type="submit">Login</button></form>' +
        '<div id="login-message" aria-live="polite"></div>';
    document.body.appendChild(app);

    const usernameInput = app.querySelector("#login-username");
    const passwordInput = app.querySelector("#login-password");
    const message = app.querySelector("#login-message");

    const usernamePattern = /^.{5,}$/;
    const passwordPatterns = {
        length: /^.{8,}$/,
        number: /\d/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        special: /[^A-Za-z0-9\s]/
    };

    app.querySelector("#login-form").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        const errors = [];

        if (!usernamePattern.test(username)) {
            errors.push("Username must contain at least 5 characters.");
        }
        if (!passwordPatterns.length.test(password)) {
            errors.push("Password must contain at least 8 characters.");
        }
        if (!passwordPatterns.number.test(password)) {
            errors.push("Password must include at least one number.");
        }
        if (!passwordPatterns.uppercase.test(password)) {
            errors.push("Password must include at least one uppercase letter.");
        }
        if (!passwordPatterns.lowercase.test(password)) {
            errors.push("Password must include at least one lowercase letter.");
        }
        if (!passwordPatterns.special.test(password)) {
            errors.push("Password must include at least one special character.");
        }

        if (errors.length > 0) {
            message.className = "login-errors";
            message.innerHTML = "<p>Please fix the following:</p><ul>" +
                errors.map((error) => "<li>" + error + "</li>").join("") + "</ul>";
        } else {
            message.className = "login-success";
            message.textContent = "Login validation successful.";
        }
    });
})();
