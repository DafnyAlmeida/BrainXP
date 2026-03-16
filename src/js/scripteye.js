const eye_password = document.getElementById("eye-password");
const eye = document.getElementById("eye");
const password_input = document.getElementById("password-input");
eye_password.addEventListener("click", () => {
    if (eye.className === "fa-solid fa-eye-slash"){
        eye.className = "fa-solid fa-eye";
        password_input.type = "text";
    }
    else{
        eye.className = "fa-solid fa-eye-slash";
        password_input.type = "password";
    }
})