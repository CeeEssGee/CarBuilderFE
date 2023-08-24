const database = {
    paints: [
        { id: 1, paint: "Silver", price: 1500 },
        { id: 2, paint: "Midnight Blue", price: 1000 },
        { id: 3, paint: "Firebrick Red", price: 2500 },
        { id: 4, paint: "Spring Green", price: 1800 }
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 600 },
        { id: 2, name: "Charcoal Fabric", price: 500 },
        { id: 3, name: "White Leather", price: 2000 },
        { id: 4, name: "Black Leather", price: 1500 }
    ],
    technologies: [
        { id: 1, technology: "Basic Package", price: 500 },
        { id: 2, technology: "Navigation Package", price: 750 },
        { id: 3, technology: "Visibility Package", price: 1500 },
        { id: 4, technology: "Ultra Package", price: 2000 }
    ],
    wheels: [
        { id: 1, wheel: "17-inch Pair Radial", price: 1000 },
        { id: 2, wheel: "17-inch Pair Radial Black", price: 1500 },
        { id: 3, wheel: "18-inch Pair Spoke Silver", price: 3000 },
        { id: 4, wheel: "18-inch Pair Spoke Black", price: 5000 }
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


// Refactored to use the fetch API to make a request to the .NET API (you will have to add the port that your API is using) We will need to use await to wait for the data. await is similar to .then in that it allows the code to wait for an asynchronous operation to finish. await can only be used inside functions marked async or at the top-level of a module

// export const getPaints = () => {
//     return database.paints.map(paint => ({ ...paint }))
// }
export const getPaints = async () => {
    const res = await fetch("https://localhost:7177/paints");
    const data = await res.json();
    return data;
};

// export const getInteriors = () => {
//     return database.interiors.map(interior => ({ ...interior }))
// }
export const getInteriors = async () => {
    const res = await fetch("https://localhost:7177/interiors");
    const data = await res.json();
    return data;
};

// export const getTechnologies = () => {
//     return [...database.technologies]
// }

export const getTechnologies = async () => {
    const res = await fetch("https://localhost:7177/technologies");
    const data = await res.json();
    return data;
};

// export const getWheels = () => {
//     return database.wheels.map(wheel => ({ ...wheel }))
// }
export const getWheels = async () => {
    const res = await fetch("https://localhost:7177/wheels");
    const data = await res.json();
    return data;
};

// export const getOrders = () => {
//     return database.customOrders.map(order => ({ ...order }))
// }
export const getOrders = async () => {
    const res = await fetch("https://localhost:7177/orders");
    const data = await res.json();
    return data;
};

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

export const addCustomOrder = async () => {
    const newOrder = { ...database.orderBuilder };

    // fetch call from the API
    await fetch(`https://localhost:7177/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
    });

    // Reset the temporary state for user choices
    database.orderBuilder = {};

    // Broadcast a notification that permanent state has changed. You can broadcast this message whenever you want. Right now, you don't know when that would be, but you'll discover more ways to do this soon.
    document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const completeOrder = async (orderId) => {
    await fetch(`https://localhost:7177/orders/${orderId}/fulfill`, {
        method: "POST",
        // headers: {
        //     "Content-Type": "application/json",
        // },
        // body: JSON.stringify(orderId),
    });
    document.dispatchEvent(new CustomEvent("stateChanged"));
};