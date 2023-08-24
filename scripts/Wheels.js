import { getWheels, setWheel } from "./database.js"
const wheels = await getWheels()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheel") {
            const chosenOption = changeEvent.target.value
            setWheel(parseInt(changeEvent.target.value))
        }
    }
)

export const Wheels = () => {
    let html = ""
    html += `<select id="wheel">
        <option value="0">Select wheel option</option>`
    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.style}</option>`
    }
    html += `</select>`

    return html
}
