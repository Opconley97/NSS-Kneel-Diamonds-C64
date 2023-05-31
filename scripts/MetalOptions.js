import { SetMetal } from "./TransientState.js"


const handleMetalChange = (changeEvent) => {
    if(changeEvent.target.name === "metal") {
        const metal = changeEvent.target.value
        SetMetal(metal)
    }
}


export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    document.addEventListener("change", handleMetalChange)

    let metalsHTML = "<h2>Metals</h2>"


    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='metal'
            value='${metal.metal}'/>${metal.metal}
            </div>`
        }
    )

    metalsHTML += divStringArray.join("")
    return metalsHTML
}