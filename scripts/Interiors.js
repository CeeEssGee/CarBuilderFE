import { getInteriors, setInterior } from "./database.js"
const interiors = await getInteriors()

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

