import { Modal } from "./modal.js"
import { alertError} from "./alert-error.js"
import { notANumber, calculateIMC} from "./utils.js"

// variáveis
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//const modalWrapper = document.querySelector(".modal-wrapper")
//const modalMessage = document.querySelector(".modal .title span")
//const modalBtnClose =  document.querySelector(".modal button.close")


//3 maneiras de criar e atribuir função a um objeto
//form.onsubmit = () => {}
//form.onsubmit = handleSubmit
//function handleSubmit () {}

form.onsubmit = function(event) {
  event.preventDefault() //evita recarregar a página
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    alertError.open()
    return;
  } 

  alertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  //modalWrapper.classList.add("open")
  Modal.open()
}
//on input executa o evento cada vez que altera
inputWeight.oninput = () => {alertError.close()}
inputHeight.oninput = () => {alertError.close()}

