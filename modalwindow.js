"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".closeModal");
const btnOpenModal = document.querySelectorAll(".showModal");
const removeHidden = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", removeHidden);
}
const addHidden = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnCloseModal.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);
document.addEventListener("keydown", function (obj) {
  if (obj.key === "Escape" && !modal.classList.contains("hidden")) {
    addHidden();
  }
});
