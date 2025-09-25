// ==========================
// Part 1: Event Handling
// ==========================
const clickButton = document.getElementById('clickButton');
const clickMessage = document.getElementById('clickMessage');

clickButton.addEventListener('click', function() {
    clickMessage.textContent = "You clicked the button! 🎉";
});

// ==========================
// Part 2: Interactive Elements
// ==========================

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Counter Game
let counter = 0;
const incrementBtn = document.getElementById('incrementBtn');
const counterValue = document.getElementById('counterValue');

incrementBtn.addEventListener('click', function() {
    counter++;
    counterValue.textContent = counter;
});

// ==========================
// Part 3: Form Validation
// ==========================
const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');

registrationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let messages = [];

    // Name validation
    if (name === '' || name.length < 3) {
        messages.push('Name must be at least 3 characters.');
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        messages.push('Please enter a valid email.');
    }

    // Password validation
    if (password.length < 6) {
        messages.push('Password must be at least 6 characters.');
    }

    // Display messages
    if (messages.length > 0) {
        formMessage.textContent = messages.join(' ');
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Registration successful! ✅';
        formMessage.style.color = 'green';
        registrationForm.reset();
    }
});
