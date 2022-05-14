const form = document.querySelector("form")

form.addEventListener("submit", e => {
  e.preventDefault()

  if (form[4].value !== form[5].value) {
    const error = document.createElement("span")
    error.classList.add("error")
    error.textContent = "Passwords do not match!"

    form[4].classList.add("error-border")
    form[5].classList.add("error-border")
    form[4].parentElement.appendChild(error)
  }
})