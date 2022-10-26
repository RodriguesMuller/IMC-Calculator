//Object Literals
export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  btnClose:  document.querySelector('.modal button.close'),

  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}


Modal.btnClose.onclick = () => {
  Modal.close()
}

//1 - nome do evento 2- a função
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    Modal.close()
  }
})