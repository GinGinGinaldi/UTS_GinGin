// scripts.js

// Validasi Login
function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Menggunakan struktur percabangan If untuk validasi login
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'menu.html'; // Arahkan ke halaman menu jika login berhasil
    } else {
        alert('Username atau password salah!');
    }
}

// Validasi Registrasi
function validateRegistration() {
    var email = document.getElementById('email').value;
    var username = document.getElementById('reg_username').value;
    var password = document.getElementById('reg_password').value;
    var confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert('Password tidak cocok!');
        return false;
    }

    alert('Akun berhasil dibuat!');
    return true;
}
