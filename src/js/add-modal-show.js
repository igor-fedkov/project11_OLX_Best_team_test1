const refs = {
    openModalBtn: document.querySelector('#add-modal-open'),
    closeModalBtn: document.querySelector('[add-modal-close]'),
    modal: document.querySelector('.add-backdrop'),
    // modalBackdrop: document.querySelector('.donkey'),
};

refs.openModalBtn.addEventListener('click', addModalOpen);
 
// закрытие модалки через кнопку
refs.closeModalBtn.addEventListener('click', modalClose);
 
// закрытие модалки по Esc
document.addEventListener('keydown', modalEscClose);

// зактрытие по оверлэю
refs.modal.addEventListener('click', onModalBackdropClick);

// Функция открытия модалки
function addModalOpen(evt) {
  evt.preventDefault();
  refs.modal.classList.remove('is-hidden');
}

// Функции закрытия модалки
function modalClose() {
  refs.modal.classList.add('is-hidden');
}
function modalEscClose(evt) {
  if (evt.key === "Escape") {
    modalClose();
  }
}
function onModalBackdropClick(evt) {
  console.log(evt.target);
  // console.log(evt.target.dataset.action);
  if (evt.target.attributes.class.nodeValue === "add-backdrop") {
    modalClose();
  }
}


