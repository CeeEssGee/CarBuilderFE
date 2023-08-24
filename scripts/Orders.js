import { getOrders, getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

const paints = await getPaints()
const interiors = await getInteriors()
const technologies = await getTechnologies()
const wheels = await getWheels()

export const Orders = async () => {
    const orders = await getOrders();
    return `${orders
        .map((order) => {

            return `<section class="order">
                  ${order.paint.color} car with
                  ${order.interior?.name} interior,
                  ${order.technology.package},
                  and the ${order.wheels.style} wheels for a total cost of
                  ${(
                    order.totalCost
                ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                })}
              </section>`;
        })
        .join("")}`;
};