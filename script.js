// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        if (targetId.length > 1) {
            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


// Contact form
const form = document.getElementById('contact-form');

if (form) {
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const successMsg = document.getElementById('form-success');

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                if (successMsg) {
                    successMsg.textContent = "Thank you! Your message has been sent.";
                }
                form.reset();
            } else {
                alert("Oops! Something went wrong.");
            }

        } catch (error) {
            alert("Error sending message.");
        }
    });
}