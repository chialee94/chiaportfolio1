// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission (basic simulation)
const form = document.getElementById('contact-form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if(name && email && message){
            document.getElementById('form-success').textContent = "Thank you! Your message has been sent successfully.";
            form.reset();
        }
    });
}