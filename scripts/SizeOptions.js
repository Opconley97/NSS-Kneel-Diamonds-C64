import { setSize } from "./TransientState.js"


const handleSizeChange = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSize(parseInt(changeEvent.target.value))
    }
}


export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChange)

    let optionsHTML = "<h2>Sizes</h2>"

    const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type='radio' name='size' value='${size.id}'/>
            ${size.carets}
            </div>`
        }
    )

    optionsHTML += divStringArray.join("")

    return optionsHTML
}