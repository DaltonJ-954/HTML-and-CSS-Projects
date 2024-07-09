const form = document.querySelector("form")
const input = document.querySelector("input")
const errorMsg = document.querySelector(".error")
const successMsg = document.querySelector(".success")

form.addEventListener("submit", e => {
    e.preventDefault()
    const numberOfChildren = parseInt(input.value)
    const bool = true

    errorMsg.textContent = ""
    successMsg.textContent = ""

    if (!numberOfChildren) {
      errorMsg.textContent = "Please enter number of children"  
    } else {
        successMsg.textContent = "success"
    }
})