const transientState = {
    "metal": "",
    "size": 0,
    "style": ""
}

export const SetMetal = (chosenMetal) => {
    transientState.metal = chosenMetal
}

export const setSize = (chosenSize) => {
    transientState.size = chosenSize
}

export const setStyle = (chosenStyle) => {
    transientState.style = chosenStyle
}

export const SaveOptionsSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}