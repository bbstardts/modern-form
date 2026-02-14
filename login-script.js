// Simple login form handler
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Login page loaded');
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
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleLogin();
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', handleLogin);
    }

    // Add input focus effects
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        emailInput.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    }

    if (passwordInput) {
        passwordInput.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        passwordInput.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    }
}

function handleLogin() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    // Simulate login
    console.log('Logging in:', email);
    loginButton.textContent = 'Success! ✓';
    loginButton.disabled = true;
    loginButton.classList.add('success');
    
    setTimeout(() => {
        alert('Login successful! (Demo mode)');
        
        // Reset form
        loginForm.reset();
        loginButton.textContent = 'Login';
        loginButton.disabled = false;
        loginButton.classList.remove('success');
    }, 500);
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && emailInput.value && passwordInput.value) {
        handleLogin();
    }
});
    const group = new THREE.Group();
    group.position.set(posX, 0, 0);

    // Head
    const headGeometry = new THREE.SphereGeometry(0.25, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xf4a460 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.7;
    head.castShadow = true;
    head.receiveShadow = true;
    group.add(head);

    // Hair
    const hairGeometry = new THREE.SphereGeometry(0.27, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2);
    const hairMaterial = new THREE.MeshPhongMaterial({ color: type === 'female' ? 0x8b4513 : 0x2c3e50 });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.set(0, 1.9, 0);
    hair.castShadow = true;
    hair.scale.z = 0.8;
    group.add(hair);

    // Eyes
    const eyeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.1, 1.75, 0.22);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.1, 1.75, 0.22);
    leftEye.castShadow = true;
    rightEye.castShadow = true;
    group.add(leftEye, rightEye);

    // Body/Torso
    const torsoGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.3);
    const torsoMaterial = new THREE.MeshPhongMaterial({ color: shirtColor });
    const torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
    torso.position.y = 1;
    torso.castShadow = true;
    torso.receiveShadow = true;
    group.add(torso);

    // Waist/Hips
    const waistGeometry = new THREE.BoxGeometry(0.45, 0.3, 0.3);
    const waistMaterial = new THREE.MeshPhongMaterial({ color: 0x2c3e50 });
    const waist = new THREE.Mesh(waistGeometry, waistMaterial);
    waist.position.y = 0.65;
    waist.castShadow = true;
    waist.receiveShadow = true;
    group.add(waist);

    // Left arm
    const armGeometry = new THREE.BoxGeometry(0.15, 0.7, 0.15);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0xf4a460 });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.35, 1.05, 0);
    leftArm.castShadow = true;
    leftArm.receiveShadow = true;
    group.add(leftArm);

    // Right arm
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.35, 1.05, 0);
    rightArm.castShadow = true;
    rightArm.receiveShadow = true;
    group.add(rightArm);

    // Left leg
    const legGeometry = new THREE.BoxGeometry(0.15, 0.8, 0.15);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0x2c3e50 });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.15, 0.35, 0);
    leftLeg.castShadow = true;
    leftLeg.receiveShadow = true;
    group.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.15, 0.35, 0);
    rightLeg.castShadow = true;
    rightLeg.receiveShadow = true;
    group.add(rightLeg);

    // Feet
    const footGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.25);
    const footMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const leftFoot = new THREE.Mesh(footGeometry, footMaterial);
    leftFoot.position.set(-0.15, 0, 0.1);
    leftFoot.castShadow = true;
    const rightFoot = new THREE.Mesh(footGeometry, footMaterial);
    rightFoot.position.set(0.15, 0, 0.1);
    rightFoot.castShadow = true;
    group.add(leftFoot, rightFoot);

    // Store references for animation
    group.userData = {
        leftArm,
        rightArm,
        leftLeg,
        rightLeg,
        head,
        type,
        originalPosX: posX
    };

    scene.add(group);
    return group;

function createKey() {
    const keyGroup = new THREE.Group();

    // Key shaft
    const shaftGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1.5, 16);
    const keyMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        shininess: 100
    });
    const shaft = new THREE.Mesh(shaftGeometry, keyMaterial);
    shaft.rotation.z = Math.PI / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    keyGroup.add(shaft);

    // Key head (circular)
    const headGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32);
    const keyHead = new THREE.Mesh(headGeometry, keyMaterial);
    keyHead.position.x = -0.8;
    keyHead.rotation.z = Math.PI / 2;
    keyHead.castShadow = true;
    keyHead.receiveShadow = true;
    keyGroup.add(keyHead);

    // Key teeth
    const toothGeometry = new THREE.BoxGeometry(0.1, 0.15, 0.1);
    for (let i = 0; i < 3; i++) {
        const tooth = new THREE.Mesh(toothGeometry, keyMaterial);
        tooth.position.set(0.6 - i * 0.3, -0.1, 0);
        tooth.castShadow = true;
        tooth.receiveShadow = true;
        keyGroup.add(tooth);
    }

    return keyGroup;
}

function setupEventListeners() {
    emailInput.addEventListener('focus', handleFieldFocus);
    emailInput.addEventListener('blur', handleFieldBlur);
    passwordInput.addEventListener('focus', handlePasswordFocus);
    passwordInput.addEventListener('blur', handleFieldBlur);
    loginButton.addEventListener('click', handleLogin);
    loginForm.addEventListener('submit', (e) => e.preventDefault());
    
    // Hover effects
    emailInput.addEventListener('mouseenter', () => createParticles(leftParticles, 3));
    passwordInput.addEventListener('mouseenter', () => createParticles(leftParticles, 3));
    loginButton.addEventListener('mouseenter', () => createParticles(rightParticles, 5));

    // Mouse parallax
    document.addEventListener('mousemove', (e) => {
        const parallax = (e.clientX / window.innerWidth - 0.5) * 0.5;
        cameraParallax = parallax;
    });
}

function handleFieldFocus(e) {
    if (!charactersRunOff && characters.length > 0) {
        animationState = 'glance';
        setTimeout(() => {
            if (animationState !== 'running' && animationState !== 'celebrate') {
                animationState = 'idle';
            }
        }, 600);
    }
}

function handlePasswordFocus(e) {
    if (!charactersRunOff && characters.length > 0) {
        charactersRunOff = true;
        animationState = 'running';
        createParticles(leftParticles, 8);
        
        setTimeout(() => {
            animationState = 'off';
        }, 800);
    }
}

function handleFieldBlur(e) {
    if (charactersRunOff && e.target !== passwordInput && characters.length > 0) {
        charactersRunOff = false;
        animationState = 'returning';
        
        setTimeout(() => {
            animationState = 'idle';
        }, 800);
    }
}

function handleLogin(e) {
    e.preventDefault();
    
    if (!emailInput.value || !passwordInput.value) {
        shake(loginButton);
        return;
    }
    
    loginButton.classList.add('success');
    loginButton.textContent = 'Success! ✓';
    loginButton.disabled = true;
    
    animationState = 'celebrate';
    
    createParticles(leftParticles, 15);
    createParticles(rightParticles, 10);
    
    setTimeout(() => {
        loginButton.classList.remove('success');
        loginButton.innerHTML = '<span class="button-text">Login</span><div class="button-shimmer"></div>';
        loginButton.disabled = false;
        
        animationState = 'idle';
        
        emailInput.value = '';
        passwordInput.value = '';
    }, 2000);
}

function shake(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'shake 0.5s ease-in-out';
    }, 10);
}

function animateCharacters(deltaTime) {
    characters.forEach((character, index) => {
        const userData = character.userData;
        const walkSpeed = 2;
        const stride = 0.15;
        
        switch(animationState) {
            case 'idle':
                // Walking in place with natural arm/leg swing
                const walkPhase = time * walkSpeed;
                userData.leftLeg.rotation.z = Math.sin(walkPhase) * 0.3;
                userData.rightLeg.rotation.z = Math.sin(walkPhase + Math.PI) * 0.3;
                userData.leftArm.rotation.z = Math.sin(walkPhase + Math.PI) * 0.25;
                userData.rightArm.rotation.z = Math.sin(walkPhase) * 0.25;
                userData.head.rotation.y = Math.sin(time * 0.5) * 0.1;
                break;
                
            case 'glance':
                // Look toward password field
                userData.head.rotation.y = 0.3;
                userData.leftLeg.rotation.z = 0;
                userData.rightLeg.rotation.z = 0;
                userData.leftArm.rotation.z = 0;
                userData.rightArm.rotation.z = 0;
                break;
                
            case 'running':
                // Fast run animation with larger strides
                const runPhase = time * 4;
                const runStride = 0.25;
                userData.leftLeg.rotation.z = Math.sin(runPhase) * runStride;
                userData.rightLeg.rotation.z = Math.sin(runPhase + Math.PI) * runStride;
                userData.leftArm.rotation.z = Math.sin(runPhase + Math.PI) * 0.5;
                userData.rightArm.rotation.z = Math.sin(runPhase) * 0.5;
                
                // Run off screen
                character.position.x = userData.originalPosX + Math.sin(time * 6) * 2 + time * 8;
                character.position.y = Math.abs(Math.sin(time * 8) * 0.2); // Slight bounce
                character.rotation.y += 0.02;
                break;
                
            case 'returning':
                // Eased return to original position
                const returnProgress = Math.min(time, 1);
                const easeProgress = 1 - Math.pow(1 - returnProgress, 3); // Ease out
                character.position.x = userData.originalPosX + (character.position.x - userData.originalPosX) * (1 - easeProgress);
                character.rotation.y *= 0.95;
                
                // Walk cycle during return
                const returnPhase = time * walkSpeed;
                userData.leftLeg.rotation.z = Math.sin(returnPhase) * 0.3;
                userData.rightLeg.rotation.z = Math.sin(returnPhase + Math.PI) * 0.3;
                userData.leftArm.rotation.z = Math.sin(returnPhase + Math.PI) * 0.25;
                userData.rightArm.rotation.z = Math.sin(returnPhase) * 0.25;
                break;
                
            case 'celebrate':
                // Jump and spin
                const jumpPhase = time * 4;
                character.position.y = Math.max(0, Math.sin(jumpPhase) * 0.4);
                character.rotation.y += 0.08;
                
                // Raised arms during jump
                userData.leftArm.rotation.z = -0.7 + Math.sin(jumpPhase) * 0.3;
                userData.rightArm.rotation.z = 0.7 - Math.sin(jumpPhase) * 0.3;
                userData.leftLeg.rotation.z = 0.2;
                userData.rightLeg.rotation.z = -0.2;
                break;
                
            case 'off':
                // Completely off-screen
                character.position.x = userData.originalPosX + 15;
                break;
        }
        
        // Camera parallax effect
        camera.position.x = cameraParallax;
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    // Log scene info once
    if (typeof window.animateLoggedOnce === 'undefined') {
        window.animateLoggedOnce = true;
        console.log('Animate function running');
        console.log('Scene children count:', scene.children.length);
        console.log('Characters array length:', characters.length);
        scene.children.forEach((child, i) => {
            console.log(`Scene child ${i}:`, child.name || child.type, 'Position:', child.position);
        });
    }
    
    const now = performance.now();
    if (!lastTime) lastTime = now;
    const deltaTime = (now - lastTime) / 1000;
    lastTime = now;
    
    time += deltaTime;
    
    animateCharacters(deltaTime);
    
    // Update particles
    updateParticles(leftParticles);
    updateParticles(rightParticles);
    
    // Render scene
    renderer.render(scene, camera);
}

function updateParticles(container) {
    // Particles are handled by createParticles and animateParticle functions
    // This is a placeholder for any real-time particle updates
}

function createParticles(container, count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const dot = document.createElement('div');
        dot.className = 'particle-dot';
        particle.appendChild(dot);
        
        // Random position
        if (container === leftParticles) {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
        } else {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
        }
        
        container.appendChild(particle);
        
        // Animate particle
        animateParticle(particle);
    }
}

function animateParticle(particle) {
    const duration = 1000 + Math.random() * 1000;
    const distance = 50 + Math.random() * 100;
    const angle = Math.random() * Math.PI * 2;
    
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY + Math.sin(angle) * distance;
    
    const startTime = Date.now();
    
    function frame() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;
        
        if (progress < 1) {
            const easeProgress = easeOutQuad(progress);
            particle.style.left = (startX + (endX - startX) * easeProgress) + '%';
            particle.style.top = (startY + (endY - startY) * easeProgress) + '%';
            particle.style.opacity = 1 - progress;
            requestAnimationFrame(frame);
        } else {
            particle.remove();
        }
    }
    
    requestAnimationFrame(frame);
}

function easeOutQuad(t) {
    return 1 - (1 - t) * (1 - t);
}

function createBackgroundParticles() {
    // Create subtle background particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const dot = document.createElement('div');
        dot.className = 'particle-dot';
        dot.style.opacity = Math.random() * 0.3 + 0.1;
        particle.appendChild(dot);
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        if (i < 10) {
            leftParticles.appendChild(particle);
        } else {
            rightParticles.appendChild(particle);
        }
        
        // Slow floating animation
        const duration = 8000 + Math.random() * 4000;
        animateBackgroundParticle(particle, duration);
    }
}

function animateBackgroundParticle(particle, duration) {
    const startX = parseFloat(particle.style.left);
    const startY = parseFloat(particle.style.top);
    const offsetX = (Math.random() - 0.5) * 40;
    const offsetY = (Math.random() - 0.5) * 40;
    
    const startTime = Date.now();
    
    function frame() {
        const elapsed = Date.now() - startTime;
        const progress = (elapsed % duration) / duration;
        
        const sine = Math.sin(progress * Math.PI * 2);
        particle.style.left = (startX + offsetX * sine) + '%';
        particle.style.top = (startY + Math.sin(progress * Math.PI * 2 + 1) * offsetY) + '%';
        
        requestAnimationFrame(frame);
    }
    
    requestAnimationFrame(frame);
}

// Add keyframe animations for shake
const style = document.createElement('style');
style.innerHTML = `
    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
        }
        10% {
            transform: translateX(-5px);
        }
        20% {
            transform: translateX(5px);
        }
        30% {
            transform: translateX(-5px);
        }
        40% {
            transform: translateX(5px);
        }
        50% {
            transform: translateX(-5px);
        }
        60% {
            transform: translateX(5px);
        }
        70% {
            transform: translateX(-5px);
        }
        80% {
            transform: translateX(5px);
        }
        90% {
            transform: translateX(-5px);
        }
    }
`;
document.head.appendChild(style);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && (emailInput.value && passwordInput.value)) {
        loginButton.click();
    }
});
