
// ---------------------------------
// function chose and switch and open larger img in footer
    const btn__OpenLargerImg  = document.querySelectorAll(".footer__gallery img");
    const btn__CloseLargerImg = document.querySelector(".close__imglarger");
    const image__Larger       = document.querySelector(".img-footer-larger");
    const footerImg__larger   = document.querySelector(".footer-img__larger");
    const btn__Openoption     = document.querySelector(".btn-larger-gallery");
    const btn__Closeoption    = document.querySelector(".close__larger-img");
    const gallery__Option     = document.querySelector(".larger-list__img");
    const list__Option        = document.querySelectorAll(".gallery-larger-img img");
    const btn__NextLarger     = document.querySelector(".btn-next-larger");
    const btn__PrevLarger     = document.querySelector(".btn-prev-larger");
    var imgindex =0;
    function nextImg(){
      imgindex++;
      if(imgindex > list__Option.length - 1){
        imgindex = 0;
      }
      image__Larger.src = list__Option[imgindex].src;
    }
    function prevImg(){
      imgindex--;
      if(imgindex < 0){
        imgindex = list__Option.length - 1;
      }
      image__Larger.src = list__Option[imgindex].src;
    }
    btn__OpenLargerImg.forEach(function(button,index){
      button.addEventListener("click",function(e){
        footerImg__larger.classList.add("active");
        var src = e.currentTarget.src;
        image__Larger.src = src;
        imgindex = index;
      })
    })
    btn__CloseLargerImg.addEventListener("click",function(){
      footerImg__larger.classList.remove("active");
    })
    btn__Openoption.addEventListener("click",function(){
      gallery__Option.classList.add("active");
    })
    btn__Closeoption.addEventListener("click",function(){
      gallery__Option.classList.remove("active");
    })
    list__Option.forEach(function(button,index){
      button.addEventListener("click",function(e){
        var src = e.currentTarget.src;
        image__Larger.src = src;
        imgindex = index;
      })
    })
    btn__NextLarger.addEventListener("click",nextImg);
    btn__PrevLarger.addEventListener("click",prevImg);
// ------------------------------------
// function chose tab testimonials
    var testimoIndex = 0;
    function choseActive(index,element){
      for(var i = 0; i < element.length ;i++){
        element[i].classList.remove("active");
      }
      element[index].classList.add("active");
    }
    const testimonials__item = document.querySelectorAll(".testimonials__item");
    const btn_testimonials__choseImg = document.querySelectorAll(".testimonials__chose-img");
    btn_testimonials__choseImg.forEach(function(button,index){
      button.addEventListener("click",function(e){
        testimonials__item.forEach(function(item,index1){
          if(index == index1){
            item.classList.add("active");
            return;
          }
          item.classList.remove("active");
        })
        testimoIndex = index;
        choseActive(index,btn_testimonials__choseImg)
      })
    })
    // function autoPlay(){
    // var auto = setInterval(run,5000);
    // function run(){
    //   testimoIndex++;
    //   if(testimoIndex > testimonials__item.length - 1){
    //     testimoIndex = 0;
    //   }
    //   choseActive(testimoIndex,testimonials__item);
    //   choseActive(testimoIndex,btn_testimonials__choseImg)
    // }
    // }
    // autoPlay();
// ---------------------------
// menu toggle
    const btn__OpenMenu = document.querySelector(".menu__toggle");
    const mobileNav     = document.querySelector(".header-mobile__nav");
    const overlay       = document.querySelector(".overlay");
    const mobileLink    = document.querySelectorAll(".mobile__nav-link");
    const mobileItem    = document.querySelectorAll(".mobile__nav-item")
    btn__OpenMenu.addEventListener("click",function(){
      mobileNav.classList.add("active");
      overlay.classList.add("active");
    })
    window.addEventListener("click",function(e){
      if(e.target == overlay){
      overlay.classList.remove("active");
      mobileNav.classList.remove("active");
      }
    })
    mobileLink.forEach(function(button){
      button.addEventListener("click",function(e){
        var parent = e.currentTarget.parentElement;
        mobileItem.forEach(function(item){
          if(item == parent){
            item.classList.toggle("active");
            return;
          }
          item.classList.remove("active");
        })
      })
    })
// ------------------------
// smooth scroll
    $(document).ready(function () {
      $("a").click(function (event) {
        $("html, body").animate(
          {
            scrollTop: $($.attr(this, "href")).offset().top,
          },
          1100,
        );
        event.preventDefault();
      });
    });
// show/hide scroll
    const positionScroll = document.querySelector(".movetotop");
     window.addEventListener("scroll",function(e){
        if(window.scrollY > 500 ){
          positionScroll.classList.add("active");
        }else{
          positionScroll.classList.remove("active");
        }
    })