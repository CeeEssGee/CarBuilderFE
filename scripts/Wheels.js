import { getWheels, setWheel } from "./database.js"
const wheels = getWheels()

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
            html += `<option value="${wheel.id}">${wheel.wheel}</option>`
    }
    html += `</select>`

    return html
}

/*
// radio option
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = "<ul>"
    for (const wheel of wheels) {
        html += `<li>
        <input type="radio" name="wheel" value="${wheel.id}" />${wheel.wheel}</li>`
    }
    html += "</ul>"
    return html
}
*/