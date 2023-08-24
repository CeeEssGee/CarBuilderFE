import { getPaints, setPaint } from "./database.js"
const paints = await getPaints()


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "paint") {
            const chosenOption = changeEvent.target.value
            setPaint(parseInt(changeEvent.target.value))
        }
    }
)

export const Paints = () => {
    let html = ""
    html += `<select id="paint">
        <option value="0">Select paint color</option>`
    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }
    html += `</select>`

    return html
}
