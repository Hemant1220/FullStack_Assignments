// Q5. Movie Ticket Booking (Objects + RegExp)
// Run this file in a browser. A successful validation creates a booking object.

(() => {
    const style = document.createElement("style");
    style.textContent = [
        "body{font-family:Arial,sans-serif;background:#f4f7fb;color:#202938;margin:24px}",
        ".movie-app{max-width:600px;margin:auto;background:#fff;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}",
        ".movie-app label{display:block;margin:16px 0 6px;font-weight:600}",
        ".movie-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}",
        ".movie-app input.invalid{border:2px solid #dc2626}.movie-error{min-height:18px;color:#dc2626;font-size:13px;margin:4px 0}",
        ".movie-app button{margin-top:16px;padding:10px 16px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}",
        ".ticket-output{background:#f0fdf4;padding:14px;border-radius:8px;margin-top:18px;line-height:1.7}"
    ].join("");
    document.head.appendChild(style);

    const app = document.createElement("main");
    app.className = "movie-app";
    app.innerHTML =
        "<h1>Movie Ticket Booking</h1>" +
        '<form id="booking-form" novalidate>' +
        '<label for="booking-name">Name</label><input id="booking-name" autocomplete="name">' +
        '<p class="movie-error" id="booking-name-error"></p>' +
        '<label for="booking-email">Email</label><input id="booking-email" type="email" autocomplete="email">' +
        '<p class="movie-error" id="booking-email-error"></p>' +
        '<label for="booking-seats">Number of Seats (1–10)</label><input id="booking-seats" type="number" min="1" max="10" step="1" value="1">' +
        '<p class="movie-error" id="booking-seats-error"></p>' +
        '<button type="submit">Book Tickets</button></form>' +
        '<section id="ticket-output" class="ticket-output" aria-live="polite" hidden></section>';
    document.body.appendChild(app);

    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const nameInput = app.querySelector("#booking-name");
    const emailInput = app.querySelector("#booking-email");
    const seatsInput = app.querySelector("#booking-seats");
    const output = app.querySelector("#ticket-output");

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[character]);
    }

    app.querySelector("#booking-form").addEventListener("submit", (event) => {
        event.preventDefault();

        const nameValid = namePattern.test(nameInput.value.trim());
        const emailValid = emailPattern.test(emailInput.value.trim());
        const seats = Number(seatsInput.value);
        const seatsValid = Number.isInteger(seats) && seats >= 1 && seats <= 10;

        app.querySelector("#booking-name-error").textContent = nameValid ? "" : "Name must contain alphabets only.";
        app.querySelector("#booking-email-error").textContent = emailValid ? "" : "Enter a valid email address.";
        app.querySelector("#booking-seats-error").textContent = seatsValid ? "" : "Select a whole number of seats from 1 to 10.";

        nameInput.classList.toggle("invalid", !nameValid);
        emailInput.classList.toggle("invalid", !emailValid);
        seatsInput.classList.toggle("invalid", !seatsValid);

        if (!(nameValid && emailValid && seatsValid)) {
            output.hidden = true;
            return;
        }

        // Store validated input in a booking object.
        const booking = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            seats: seats
        };

        output.innerHTML =
            "<h2>Booking Confirmed</h2>" +
            "<p><strong>Name:</strong> " + escapeHtml(booking.name) + "</p>" +
            "<p><strong>Email:</strong> " + escapeHtml(booking.email) + "</p>" +
            "<p><strong>Seats:</strong> " + booking.seats + "</p>";
        output.hidden = false;
    });
})();
