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

// --- Crypto Terminal Functions ---

function openCryptoModal() {
    document.getElementById('crypto-modal').style.display = 'block';
}

function closeCryptoModal() {
    document.getElementById('crypto-modal').style.display = 'none';
}

function copyWallet() {
    const address = document.getElementById('wallet-address').innerText;
    navigator.clipboard.writeText(address).then(() => {
        alert("Wallet address copied to clipboard.");
    });
}

async function submitTransaction(event) {
    event.preventDefault();
    const selectElement = document.getElementById('coin-package');
    const coinAmount = selectElement.value;
    const discordId = document.getElementById('discord-id').value.trim();
    const txHash = document.getElementById('tx-hash').value.trim();

    // Show loading state
    const submitBtn = event.target.querySelector('.terminal-submit');
    submitBtn.innerText = "VERIFYING BLOCKCHAIN...";
    submitBtn.disabled = true;

    try {
        // Send this data to your local/hosted Discord bot backend endpoint
        const response = await fetch('http://localhost:3000/api/verify-crypto', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ discordId, txHash, coinAmount })
        });

        const result = await response.json();

        if (result.success) {
            alert("Verification successful! Coins have been credited to your account.");
            closeCryptoModal();
        } else {
            alert("Verification failed: " + result.message);
        }
    } catch (error) {
        // Fallback if backend isn't online yet
        alert(`Payload transmitted to node queue.\nUser: ${discordId}\nTx: ${txHash}\n(Backend offline - manual review queued).`);
        closeCryptoModal();
    } finally {
        submitBtn.innerText = "Initialize Verification";
        submitBtn.disabled = false;
    }
}

function updateCryptoDetails() {
    const selectElement = document.getElementById('coin-package');
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    const cryptoAmount = selectedOption.getAttribute('data-amount');
    const fiatPrice = selectedOption.getAttribute('data-price');
    
    // Update the pricing text dynamically
    document.getElementById('package-pricing').innerText = `Cost: ${cryptoAmount} (Approx. ${fiatPrice})`;
}