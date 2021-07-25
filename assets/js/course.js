// 
const coursesCategories__name     = document.querySelectorAll(".courses-categories__name");
const coursesPage__categoriesItem = document.querySelectorAll(".courses-page__categories-item");
coursesCategories__name.forEach(function(button){
  button.addEventListener("click",function(e){
    var parent = e.currentTarget.parentElement;
    coursesPage__categoriesItem.forEach(function(item){
      if(item == parent){
        item.classList.toggle("active");
        return;
      }
      item.classList.remove("active");
    })
  })
})