import { getTechnologies, setTechnology } from "./database.js"
const technologies = await getTechnologies()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technology") {
            const chosenOption = changeEvent.target.value
            setTechnology(parseInt(changeEvent.target.value))
        }
    }
)

export const Technologies = () => {
    let html = ""
    html += `<select id="technology">
        <option value="0">Select technology package</option>`
    for (const technology of technologies) {
        html += `<option value="${technology.id}">${technology.package}</option>`
    }
    html += `</select>`

    return html
}
