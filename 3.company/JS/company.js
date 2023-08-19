function scrollFunction() {
    if(document.documentElement.scrollTop > 200){
        document.getElementById("navbar").classList.add("noTransparrent");
    } else {
        document.getElementById("navbar").classList.remove("noTransparrent");
    }
}

window.onscroll = function() {
    scrollFunction();
}
window.onload = function(){
    let website = new CountUp('website-count', 0, 472, 0, 5);
    website.start();
    let app = new CountUp('app-count', 0, 170, 0, 5);
    app.start();
    let user = new CountUp('user-count', 0, 92410, 0, 5);
    user.start();
    let video = new CountUp('video-count', 0, 225, 0, 5);
    video.start();
};
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })();
  
  document.getElementById("fullYear").innerHTML = new Date().getFullYear();