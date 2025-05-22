document.addEventListener("DOMContentLoaded", function() {
    var hamburger = document.getElementById("hamburger");
    var navCollapse = document.getElementById("navCollapse");

    if (hamburger && navCollapse) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("is-active");
        });
    }
});