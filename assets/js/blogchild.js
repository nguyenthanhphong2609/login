// 
const listThumbnail=[
  {imglink:"assets/image/blogchild/blogchild-list1.jpg"},
  {imglink:"assets/image/blogchild/blogchild-list2.jpg"},
  {imglink:"assets/image/blogchild/blogchild-list3.jpg"},
  {imglink:"assets/image/blogchild/blogchild-list4.jpg"},
]
const btn__NextImgThumbnail = document.querySelector(".btn-nextimg");
const btn__PrevImgThumbnail = document.querySelector(".btn-previmg");
const imgThumbnailElement   = document.querySelector(".blogchild__thumbnail img");
  var thumbnailIndex = 0;
  showThumbnail(listThumbnail[thumbnailIndex].imglink)
btn__NextImgThumbnail.addEventListener("click",function(){
  thumbnailIndex++;
  if(thumbnailIndex > listThumbnail.length - 1){
    thumbnailIndex = 0;
  }
  showThumbnail(listThumbnail[thumbnailIndex].imglink);
})
btn__PrevImgThumbnail.addEventListener("click",function(){
  thumbnailIndex--;
  if(thumbnailIndex < 0){
    thumbnailIndex = listThumbnail.length - 1;
  }
  showThumbnail(listThumbnail[thumbnailIndex].imglink);
})
function showThumbnail(src){
  imgThumbnailElement.src =src;
}