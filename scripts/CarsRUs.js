import { Interiors } from "./Interiors.js"
import { Paints } from "./Paints.js"
import { Technologies } from "./Technologies.js"
import { Wheels } from "./Wheels.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./database.js"

document.addEventListener("click", (event) => {
    if (event.target.id.startsWith("orderButton")) {
        addCustomOrder()
    }
}
)


export const CarsRUs = () => {
    return `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="choices">
            <div class="option1">
                <section class="choices__paints options">
                    <h2>Paints</h2>
                    ${Paints()}
                </section>
                <section class="choices__interiors options">
                    <h2>Interiors</h2>
                    ${Interiors()}
                </section>
            </div>
            <div class="option2">
                <section class="choices__technologies options">
                    <h2>Technologies</h2>
                    ${Technologies()}
                </section>
                <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
                </section>
            </div>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            <div class="order-list">
            ${Orders()}
            </div>
        </article>
    `
}
