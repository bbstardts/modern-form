// Simple signup form handler
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const signupButton = document.getElementById('signupButton');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Signup page loaded');
    setupEventListeners();
    setupPageTransitions();
});

function setupPageTransitions() {
    const transitionLinks = document.querySelectorAll('.transition-link');
    transitionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const transition = document.querySelector('.page-transition');
            
            transition.classList.add('active');
            
            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
}

function setupEventListeners() {
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSignup();
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', handleSignup);
    }

    // Add input focus effects
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        if (input) {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            input.addEventListener('blur', function() {
                if (this.value === '') {
                    this.parentElement.classList.remove('focused');
                }
            });
        }
    });
}

function handleSignup() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Simulate signup
    console.log('Signing up:', name, email);
    signupButton.textContent = 'Success! ✓';
    signupButton.disabled = true;
    signupButton.classList.add('success');
    
    setTimeout(() => {
        alert('Account created successfully! (Demo mode)');
        
        // Reset form
        signupForm.reset();
        signupButton.textContent = 'Sign Up';
        signupButton.disabled = false;
        signupButton.classList.remove('success');
    }, 500);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && nameInput.value && emailInput.value && passwordInput.value && confirmPasswordInput.value) {
        handleSignup();
    }
});
