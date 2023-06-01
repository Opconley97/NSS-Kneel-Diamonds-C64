const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
}

export const SetMetal = (chosenMetal) => {
    transientState.metalId = chosenMetal
}

export const setSize = (chosenSize) => {
    transientState.sizeId = chosenSize
}

export const setStyle = (chosenStyle) => {
    transientState.styleId = chosenStyle
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