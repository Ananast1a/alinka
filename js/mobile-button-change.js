//changing scrollbar when it slides sown on mobile
window.onscroll = function() {
    const button = document.getElementById('bannerbutton');
    if (window.pageYOffset > 100) {
        button.classList.add("small-btn");
    } else {
        button.classList.remove("small-btn");
    }
}