// function view larger img in blog
const largerElement = document.querySelector(".blog-largerimg");
const btn_closeLargerImgBlog = document.querySelector(".close__largerblogimg");
const btn_openLargerImgBlog  = document.querySelectorAll(".btn-expand-img");
const imgLargerElement       = document.querySelector(".blog-largerimg-inner img");
btn_openLargerImgBlog.forEach(function(button){
  button.addEventListener("click",function(e){
    largerElement.classList.add("active");
    var src = e.currentTarget.parentElement.querySelector("img").src;
    imgLargerElement.src = src;
  })
})
btn_closeLargerImgBlog.addEventListener("click",function(){
  largerElement.classList.remove("active");
})