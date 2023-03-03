const database = {
    paints: [
        { id: 1, name: "Silver", price: 1500},
        { id: 2, name: "Midnight Blue", price: 1000},
        { id: 3, name: "Firebrick Red", price: 2500},
        { id: 4, name: "Spring Green", price: 1800}
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 600},
        { id: 2, name: "Charcoal Fabric", price: 500},
        { id: 3, name: "White Leather", price: 2000},
        { id: 4, name: "Black Leather", price: 1500}
    ],
    technologies: [
        { id: 1, name: "Basic Package", price: 500},
        { id: 2, name: "Navigation Package", price: 750},
        { id: 3, name: "Visibility Package", price: 1500},
        { id: 4, name: "Ultra Package", price: 2000}
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 1000},
        { id: 2, name: "17-inch Pair Radial Black", price: 1500},
        { id: 3, name: "18-inch Pair Spoke Silver", price: 3000},
        { id: 4, name: "18-inch Pair Spoke Black", price: 5000}
    ],
    orderBuilder: [

    ]
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechologies = () => {
    return database.techologies.map(techology => ({...techology}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}