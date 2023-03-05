import { getTechnologies, setTechnology } from "./database.js"
const technologies = getTechnologies()

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
            html += `<option value="${technology.id}">${technology.tech}</option>`
    }
    html += `</select>`

    return html
}

// radio option
/*
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = "<ul>"
    for (const technology of technologies) {
        html += `<li>
        <input type="radio" name="technology" value="${technology.id}" />${technology.tech}</li>`
    }
    html += "</ul>"
    return html
}
*/