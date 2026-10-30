// Q4. Custom Form Builder (Forms + Classes)
// Run this file in a browser. FormBuilder creates controls from field definitions.

(() => {
    const style = document.createElement("style");
    style.textContent = [
        "body{font-family:Arial,sans-serif;background:#f4f7fb;color:#202938;margin:24px}",
        ".form-builder-app{max-width:620px;margin:auto;background:white;padding:24px;border-radius:14px;box-shadow:0 6px 24px #17203312}",
        ".form-builder-app label{display:block;margin:16px 0 6px;font-weight:600}",
        ".form-builder-app input{box-sizing:border-box;width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:7px;font-size:16px}",
        ".form-builder-app button{margin-top:18px;padding:10px 16px;border:0;border-radius:7px;background:#2458cc;color:white;cursor:pointer}",
        ".form-output{white-space:pre-wrap;background:#f1f5f9;padding:14px;border-radius:8px;margin-top:16px}"
    ].join("");
    document.head.appendChild(style);

    // Escape field labels and names before placing them into generated HTML.
    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, (character) => ({
            "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
        })[character]);
    }

    class FormBuilder {
        constructor(fields, mountElement) {
            this.fields = fields;
            this.mountElement = mountElement;
            this.render();
        }

        render() {
            const controls = this.fields.map((field) => {
                const type = ["text", "email", "password", "number"].includes(field.type)
                    ? field.type
                    : "text";
                const fieldName = escapeHtml(field.name);
                const label = escapeHtml(field.label);
                return '<label for="' + fieldName + '">' + label + "</label>" +
                    '<input id="' + fieldName + '" name="' + fieldName + '" type="' + type + '"' +
                    (field.required ? " required" : "") + ">";
            }).join("");

            this.mountElement.innerHTML =
                '<form id="generated-form">' + controls +
                '<button type="submit">Submit</button></form>' +
                '<pre class="form-output" id="form-output" aria-live="polite">Submitted values will appear here.</pre>';

            this.form = this.mountElement.querySelector("#generated-form");
            this.output = this.mountElement.querySelector("#form-output");

            this.form.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = this.getFormData();
                this.output.textContent = JSON.stringify(data, null, 2);
            });
        }

        // Collect every generated input into an object using its name as the key.
        getFormData() {
            const formData = {};
            this.fields.forEach((field) => {
                const control = this.form.elements.namedItem(field.name);
                formData[field.name] = control.value;
            });
            return formData;
        }
    }

    const app = document.createElement("main");
    app.className = "form-builder-app";
    app.innerHTML = "<h1>Dynamic Form Builder</h1><p>The form below is generated from an array of field objects.</p><div id='generated-form-mount'></div>";
    document.body.appendChild(app);

    const fieldDefinitions = [
        { type: "text", name: "username", label: "Username", required: true },
        { type: "email", name: "email", label: "Email Address", required: true },
        { type: "number", name: "age", label: "Age", required: true }
    ];

    new FormBuilder(fieldDefinitions, app.querySelector("#generated-form-mount"));
})();
