import "./index.html";
import "./style/style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll(".menu__dropdown-btn");
  const burgerIcon = document.querySelector(".header__burger");
  const burgerMenu = document.querySelector(".burger");
  const burgerBg = document.querySelector(".burger__bg");

  function closeOtherDropdowns(currentButton) {
    dropdownButtons.forEach((button) => {
      if (button !== currentButton) {
        const dropdown = button.querySelector(".menu-dropdown");
        dropdown.classList.remove("show");
      }
    });
  }

  function toggleDropdown(event) {
    const dropdown = event.currentTarget.querySelector(".menu-dropdown");
    const isOpen = dropdown.classList.contains("show");

    if (!isOpen) {
      closeOtherDropdowns(event.currentTarget);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    dropdown.style.width = `${rect.width}px`;
    dropdown.style.top = `${rect.bottom}px`;
    dropdown.style.left = `${rect.left}px`;

    dropdown.classList.toggle("show");
  }

  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      toggleDropdown(event);
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu__dropdown-btn")) {
      dropdownButtons.forEach((button) => {
        const dropdown = button.querySelector(".menu-dropdown");
        dropdown.classList.remove("show");
      });
    }
  });

  // Open burger menu
  burgerIcon.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerBg.classList.toggle("active");
  });

  // Close burger menu
  const burgerClose = document.querySelector(".burger__close");
  if (burgerClose) {
    burgerClose.addEventListener("click", function () {
      burgerMenu.classList.remove("active");
      burgerBg.classList.remove("active");
    });
  }
});
