var imgNum = 1;
showImg(imgNum);
function scrollImgs(n) {
  showImg(imgNum += n);
}
function currentImg(n) {
  showImg(imgNum = n);
}
function showImg(n) {
  var i;
  var imgs = document.getElementsByClassName("myImgs");
  var dots = document.getElementsByClassName("dot");
  var project = document.getElementsByClassName("myProject")
  if (n > imgs.length) {imgNum = 1}    
  if (n < 1) {imgNum = imgs.length}
  for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";  
      project[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[imgNum-1].style.display = "block"; 
  project[imgNum-1].style.display = "block"; 
  dots[imgNum-1].className += " active";
}