function revealLogin() {
    const modal = document.getElementById('login-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    alert("Login sequence initialized. Connect this to your secure backend.");
}