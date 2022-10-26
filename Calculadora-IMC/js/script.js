import { Modal } from './modal.js'
import { AlertError } from "./alert-error.js"
import { IMC, notNumber } from './utils.js'


const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()
  
  const height = inputHeight.value
  const weight = inputWeight.value

  const showAlertError = notNumber(weight) || notNumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()


  const result = IMC(height, weight)
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()  
}

// close alert error when put a number
inputWeight.oninput = () => {
  AlertError.close()
}

inputHeight.oninput = () => {
  AlertError.close()
}

