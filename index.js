var btnContainer = document.getElementById("rating");
var btns = btnContainer.getElementsByClassName("rate");
var submit = document.getElementsByClassName("submit-btn");
var current = document.getElementsByClassName("active");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
  submit.addEventListener("click", function(){

  })