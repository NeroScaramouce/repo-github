document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');

    // Handler Login
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (userManager.login(username, password)) {
                localStorage.setItem('currentUser', username);
                window.location.href = 'dashboard.html';
            } else {
                alert('Login gagal. Periksa username dan password.');
            }
        });
    }

    // Handler Registrasi
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Password tidak cocok!');
                return;
            }

            if (userManager.register(username, email, password)) {
                alert('Registrasi berhasil!');
                window.location.href = 'index.html';
            } else {
                alert('Username sudah ada. Silakan gunakan username lain.');
            }
        });
    }

    // Handler Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            userManager.logout();
        });
    }
});