"use strict";
const modals = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function (modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    const modalId = i + 1;
    openModal(modalId);
  });
}

const closeModal = function () {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden");
  }
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener("click", closeModal);
}

overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
  }
});

const linkButtons = document.querySelectorAll(".modal-link-button");
linkButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const href = button.getAttribute("data-href");
    if (href) {
      window.open(href, "_blank");
    }
  });
});
