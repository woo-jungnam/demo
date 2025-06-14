﻿const user = localStorage.getItem("currentUser");

const navLogin = document.getElementById("navLogin");
const navUser = document.getElementById("navUser");
const navLogout = document.getElementById("navLogout");

if (user) {
    navLogin.classList.add("d-none");
    navUser.classList.remove("d-none");
    navLogout.classList.remove("d-none");
    navUser.textContent = user;
}

// Xử lý nút Đăng xuất
navLogout.addEventListener("click", function (e) {
    e.preventDefault();
    localStorage.removeItem("currentUser");

    window.location.href = "login.html";
});