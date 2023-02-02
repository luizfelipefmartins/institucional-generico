function abrirModal() {
  const button = document.querySelector(".btnHeader");
  const modalContainer = document.querySelector(".modal__container");

  button.addEventListener("click", () => {
    modalContainer.showModal();
    closeModal();
  });
}

abrirModal();

function closeModal() {
  const buttonClose = document.querySelector(".modal__btnClose");
  const modalContainer = document.querySelector(".modal__container");

  buttonClose.addEventListener("click", () => {
    modalContainer.close();
  });
}
