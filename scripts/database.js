const database = {
    paints: [
        { id: 1, paint: "Silver", price: 1500},
        { id: 2, paint: "Midnight Blue", price: 1000},
        { id: 3, paint: "Firebrick Red", price: 2500},
        { id: 4, paint: "Spring Green", price: 1800}
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 600},
        { id: 2, name: "Charcoal Fabric", price: 500},
        { id: 3, name: "White Leather", price: 2000},
        { id: 4, name: "Black Leather", price: 1500}
    ],
    technologies: [
        { id: 1, tech: "Basic Package", price: 500},
        { id: 2, tech: "Navigation Package", price: 750},
        { id: 3, tech: "Visibility Package", price: 1500},
        { id: 4, tech: "Ultra Package", price: 2000}
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 1000},
        { id: 2, wheel: "17-inch Pair Radial Black", price: 1500},
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 3000},
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 5000}
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: [
        {

        }
    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

// copied format from Kneel's Diamonds
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

// copied format from Kneel Diamonds
export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed. You can broadcast this message whenever you want. Right now, you don't know when that would be, but you'll discover more ways to do this soon.
    document.dispatchEvent(new CustomEvent("stateChanged"))
}