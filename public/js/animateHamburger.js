const toggler = document.querySelector(".hamburger");
const modelToggle = document.querySelector(".modelDropdownWrapper");

const handleAnimation = () => {
  toggler.classList.toggle("is-active");
  modelToggle.classList.toggle("hidden");
  // disable hamburger
  toggler.setAttribute("disabled", "true");
  toggler.setAttribute("data-bs-toggle", "");
  // after 1.5 sec enable the button again to prevent unwanted animation/data mismatch
  setTimeout(() => {
    // re enable button
    toggler.removeAttribute("disabled");
    toggler.setAttribute("data-bs-toggle", "collapse");
  }, 500);
};

window.addEventListener(
  "resize",
  () => {
    if (screen.width > 991 && modelToggle.classList.contains("hidden")) {
      toggler.click();
    }
  },
  false
);
toggler.addEventListener("click", handleAnimation);
