const addButton = document.querySelector("#addButton")
const container = document.querySelector(".container")
const input = document.querySelector("#input")

addButton.addEventListener("click", ()=>{
    createTodo()
})

document.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        createTodo()
    }
})

function createTodo(){
    let div = document.createElement("div")
    div.classList.add("todo")

    let image = document.createElement("img")
    image.src = "./images/delete.svg"
    image.addEventListener("click", ()=>{
        div.remove()
    })

    let text = document.createElement("p")
    text.innerText = input.value

    div.append(image, text)

    container.append(div)
    input.value = ""
}