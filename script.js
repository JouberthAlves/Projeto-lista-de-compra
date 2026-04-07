const itens = document.getElementById("itens")
const newItem = document.getElementById("newItem")
const addItem = document.getElementById("addItem")
const textItem = document.getElementById("textItem")

addItem.addEventListener("click", (event) => {
  event.preventDefault()

  const textValue = textItem.value

  if (textValue === "") return

  const clonedItem = newItem.cloneNode(true)

  clonedItem.classList.remove("hidden")

  const text = clonedItem.querySelector("p")
  text.textContent = textValue

  clonedItem.removeAttribute("id")

  itens.appendChild(clonedItem)

  textItem.value = ""
})

const removeBtn = document.getElementById("remove")

itens.addEventListener("click", (event) => {
  const botao = event.target.closest("button")

  if (!botao) return

  const li = botao.closest("li")
  li.remove()
})