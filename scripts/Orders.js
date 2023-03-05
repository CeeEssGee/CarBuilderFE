import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    const foundPaint = paints.find(
        (paint => {
            return paint.id === order.paintId
        })
    )
    const foundInterior = interiors.find(
        (interior => {
            return interior.id === order.interiorId
        })
    )
    const foundTechnology = technologies.find(
        (technology => {
            return technology.id === order.technologyId
        })
    )
    const foundWheel = wheels.find(
        (wheel => {
            return wheel.id === order.wheelId
        })
    )
    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheel.price
    
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${foundPaint.paint} car with ${foundWheel.wheel} wheels, ${foundInterior.name}, and the ${foundTechnology.tech} for a total cost of ${costString} 
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}