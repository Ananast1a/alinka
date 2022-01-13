//burger menu
function toggleMenuVisibility() {
    const menu = document.getElementById('menu');
    const burgerButton = document.getElementById('burgerButton');

    console.log(menu);

    if (menu.style.display === "block") {
        menu.style.display = "none";
        burgerButton.classList.remove("backgrounded");
    } else {
        menu.style.display = "block";
        burgerButton.classList.add("backgrounded");
    }
  }