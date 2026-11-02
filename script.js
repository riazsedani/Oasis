function toggleLogin() {
    const modal = document.getElementById('login-modal');
    // Only toggle the modal if the user hasn't already successfully logged in
    if (document.getElementById('protected-view').style.display !== 'flex') {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('user-input').value.trim();
    const passInput = document.getElementById('pass-input').value.trim();
    
    const modal = document.getElementById('login-modal');
    const publicView = document.getElementById('public-view');
    const protectedView = document.getElementById('protected-view');
    const title = document.getElementById('profile-title');
    const subtitle = document.getElementById('profile-subtitle');
    const avatar = document.getElementById('avatar-box');
    const body = document.getElementById('body-theme');

    // --- ADMIN1 PROFILE (Your View) ---
    if (userInput === "Admin1" && passInput === "177013") {
        modal.style.display = 'none';
        publicView.style.display = 'none';
        protectedView.style.display = 'flex';
        
        title.innerText = "Admin // Oasis";
        subtitle.innerText = "System Architect View";
        avatar.innerText = "A";
        body.classList.add('theme-admin');
    }
    // --- DEV1 PROFILE (Your Friend's Hacker View) ---
    else if (userInput === "Dev1n" && passInput === "170170") {
        modal.style.display = 'none';
        publicView.style.display = 'none';
        protectedView.style.display = 'flex';
        
        title.innerText = "Admin or someone special... yeah, defo special";
        subtitle.innerText = "Lead Operator View";
        avatar.innerText = "D";
        body.classList.add('theme-dev');
    } 
    else {
        alert("Access Denied: Unrecognized credentials.");
    }
}