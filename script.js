const itens = document.getElementById("itens")
const newItem = document.getElementById("newItem")
const addItem = document.getElementById("addItem")
const textItem = document.getElementById("textItem")
const deleteMsg = document.getElementById("deleteMsg")
const removeMsg = document.getElementById("removeMsg")

addItem.addEventListener("click", (e) => {
  e.preventDefault()

  const textValue = textItem.value

  if(textValue === "") return

  const clonedItem = newItem.cloneNode(true)
  clonedItem.classList.remove("hidden")

  const text = clonedItem.querySelector("p")
  text.textContent = textValue

  clonedItem.removeAttribute("id")

  itens.appendChild(clonedItem)

  textItem.value = ""


})

itens.addEventListener("click", (event) => {
  const btn = event.target.closest("button")

  if(!btn) return

  
  const li = btn.closest("li")
  li.remove()

  deleteMsg.classList.remove("hidden")

  removeMsg.addEventListener("click", () => {
    deleteMsg.classList.add("hidden")
  })

  setTimeout(() => {
    deleteMsg.classList.add("hidden")
  }, 3000)

  itens.appendChild(deleteMsg)
})



itens.addEventListener("click", (e) => {

  const img = e.target.closest("img")

  img.classList.toggle("checked")

  if(!img.classList.contains("checked")) {
    img.classList.add("hover")
  }
})

itens.addEventListener("mouseover", (e) => {

  const img = e.target.closest("img")

  img.classList.add("hover")
})

itens.addEventListener("mouseout", (e) => {

  const img = e.target.closest("img")

  img.classList.remove("hover")
})

