import { SaveOptionsSubmission } from "./TransientState.js";

const handleSubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        SaveOptionsSubmission()
    }
}

export const SaveSubmission = () => {
    document.addEventListener("click", handleSubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}