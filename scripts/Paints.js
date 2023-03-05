import { getPaints, setPaint } from "./database.js"
const paints = getPaints()


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
            html += `<option value="${paint.id}">${paint.paint}</option>`
    }
    html += `</select>`

    return html
}





/*
//radio button with event listener patterened after Kneel's Diamonds
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = "<ul>"
    for (const paint of paints) {
        html += `<li>
        <input type="radio" name="paint" value="${paint.id}" />${paint.paint}</li>`
    }
    html += "</ul>"
    return html
}
*/