import { getInteriors, setInterior } from "./database.js"
const interiors = getInteriors()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interior") {
            const chosenOption = changeEvent.target.value
            setInterior(parseInt(changeEvent.target.value))
        }
    }
)

export const Interiors = () => {
    let html = ""
        html += `<select id="interior">
        <option value="0">Select interior package</option>`
        for (const interior of interiors) {
            html += `<option value="${interior.id}">${interior.name}</option>`
    }
    html += `</select>`

    return html
}



// radio button
/*
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") { // or interiors
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = "<ul>"
    for (const interior of interiors) {
        html += `<li>
        <input type="radio" name="interior" value="${interior.id}" />${interior.name}</li>`
    }
    html += "</ul>"
    return html
}
*/