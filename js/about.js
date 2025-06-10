const user = localStorage.getItem("currentUser");

const navLogin = document.getElementById("navLogin");
const navUser = document.getElementById("navUser");
const navLogout = document.getElementById("navLogout");

if (user) {
    // Ẩn nút Đăng nhập, hiển thị thông tin người dùng và nút Đăng xuất
    navLogin.classList.add("d-none");
    navUser.classList.remove("d-none");
    navLogout.classList.remove("d-none");
    navUser.textContent = user;
}

// Xử lý nút Đăng xuất
navLogout.addEventListener("click", function (e) {
    e.preventDefault();
    // Xóa dữ liệu người dùng
    localStorage.removeItem("currentUser");

    // Chuyển về trang chủ hoặc reload
    window.location.href = "login.html";
});