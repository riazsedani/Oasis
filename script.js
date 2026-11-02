function toggleLogin() {
    const modal = document.getElementById('login-modal');
    if (document.getElementById('main-links').style.display !== 'flex') {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}

function handleLogin(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('user-input').value.trim();
    const passInput = document.getElementById('pass-input').value.trim();
    
    const modal = document.getElementById('login-modal');
    const links = document.getElementById('main-links');
    const title = document.getElementById('profile-title');
    const subtitle = document.getElementById('profile-subtitle');
    const avatar = document.getElementById('avatar-box');
    const body = document.getElementById('body-theme');

    // --- ADMIN1 PROFILE (Your View) ---
    if (userInput === "Admin1" && passInput === "177013") {
        modal.style.display = 'none';
        links.style.display = 'flex';
        
        // Custom text & styling for you
        title.innerText = "Admin Core // Oasis";
        subtitle.innerText = "System Owner & Admin Leader";
        avatar.innerText = "A";
        body.classList.add('theme-admin');
    }
    // --- DEV1 PROFILE (Your Friend's Hacker View) ---
    else if (userInput === "Dev1n" && passInput === "170170") {
        modal.style.display = 'none';
        links.style.display = 'flex';
        
        // Custom text & styling for your friend
        title.innerText = "Dev Terminal // Oasis";
        subtitle.innerText = "Something Special.... maybe... defo special";
        avatar.innerText = "D";
        body.classList.add('theme-dev');
    } 
    else {
        alert("Access Denied: Unrecognized credentials.");
    }
}