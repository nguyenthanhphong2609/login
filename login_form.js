const btn_OpenLogin = document.querySelector("#show-login");
const login__inner  = document.querySelector(".hero");
const btn_CloseLogin = document.querySelector(".close-btn");
btn_OpenLogin.addEventListener("click",function(){
    login__inner.classList.add("active");
})
btn_CloseLogin.addEventListener("click",function(){
    login__inner.classList.remove("active");
})
const btn_OpenEnroll = document.querySelector("#show-enroll");
const enroll__inner  = document.querySelector(".enroll");
const btn_CloseEnroll = document.querySelector(".close-enroll");
btn_OpenEnroll.addEventListener("click",function(){
    enroll__inner.classList.add("active");
})
btn_CloseEnroll.addEventListener("click",function(){
    enroll__inner.classList.remove("active");
})