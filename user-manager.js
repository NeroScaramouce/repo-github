class UserManager {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    register(username, email, password) {
        // Cek username sudah ada
        const existingUser = this.users.find(u => u.username === username);
        if (existingUser) {
            return false;
        }

        // Tambah user baru
        const newUser = { username, email, password };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        return true;
    }

    login(username, password) {
        const user = this.users.find(
            u => u.username === username && u.password === password
        );
        return user !== undefined;
    }

    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    }
}

const userManager = new UserManager();