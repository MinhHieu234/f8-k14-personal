
    const API_LOGIN = "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login";
    const API_POSTS = "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/post/";
    const API_REFRESH = "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com/login/get_new_token/";

    document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
    const res = await fetch(API_LOGIN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
});

    const data = await res.json();

    if (res.ok) {
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh_token);
    window.location.href = "home.html";
} else {
    alert("Đăng nhập thất bại: " + (data.message || "Email hoặc mật khẩu sai"));
}
} catch (error) {
    alert("Lỗi kết nối đến server.");
}
});

