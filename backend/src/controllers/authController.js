// REGISTER
function register() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(password !== confirm) {
        alert("Password tidak sama!");
        return;
    }

    let user = { nama, email, username, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registrasi berhasil!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if(user && user.username === username && user.password === password) {
        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau password salah!");
    }
}

// LOGOUT
function logout() {
    alert("Logout berhasil!");
    window.location.href = "login.html";
}