var expand = document.getElementsByClassName("expand");
var i;

for (i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var section = this.nextElementSibling;
    if (section.style.maxHeight){
      section.style.maxHeight = null;
      section.style.width = "calc(50% - 36px)";
    } else {
      section.style.maxHeight = section.scrollHeight + "px";
      section.style.width = "calc(100% - 36px)";
    } 
  });
}

function loadmain () {
    document.getElementById("wrapper").classList.add('movedown');
    DOMContentLoaded = false;
  };
  function loadpage () {
    document.getElementById("content").classList.remove('fadein');
    DOMContentLoaded = false;
  };
// Delay page load
function delaymain (URL) {
    document.getElementById("wrapper").classList.remove('movedown');
    setTimeout(function() {
        window.location = URL
    }, 1000);
  };
  function delaypage (URL) {
    document.getElementById("content").classList.add('fadeout');
    setTimeout(function() {
        window.location = URL
    }, 1000);
  };




