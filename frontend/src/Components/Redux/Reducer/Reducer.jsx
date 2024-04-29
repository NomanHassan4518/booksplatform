import { addCart, removeCart, increseItem, decreaseitem } from "./Constant";

const initialState = {
    cardData: [],
    totalPrice: 0,
    totalItems: 0
}; 

const cardItem = (state = initialState, action) => {
    switch (action.type) {
        case addCart:
            {
                const itemAdd = addItemsWithQuantity(state, action);
                return generateFinalState(state, itemAdd);
            }
        case removeCart:
            {
                const itemAdd = removeCartItem(state, action);
                return generateFinalState(state, itemAdd);
            }

        case increseItem:
            {
                let itemAdd = increaseToQuantity(state, action);
                return generateFinalState(state, itemAdd);
            }

        case decreaseitem:
            {
                let itemAdd = decreaseToQuantity(state, action);
                return generateFinalState(state, itemAdd);
            }
        default:
            return state;
    }


};

export default cardItem;

const addItemsWithQuantity = (state, action) => {
    const cartIndex = state.cardData?.findIndex(
        (item) => item.Product.id === action.payload.Product.id);
    let newItem = [];
    if (cartIndex > -1) {
        const updateQuantity = state.cardData[cartIndex].quantity += action.payload.quantity;
        const updateData = state.cardData.map((item, index) => {
            return cartIndex === index ? { ...item, ...updateQuantity } : item;
        });

        newItem = updateData;
    } else {
        const tempProduct = [...state.cardData];
        newItem = [...tempProduct, action.payload];
    }
    return newItem;
};

const removeCartItem = (state, action) => {
    const filterItem = state.cardData.filter((item, index) => index !== action.payload);
    return filterItem
}

const increaseToQuantity = (state, action) => {
    const cartIndex = state.cardData.findIndex((item, index) => index === action.payload)
    console.log(cartIndex); 
    let increase = []
    if (cartIndex > -1) {
        let quantity = state.cardData[cartIndex].quantity
        const updateQuantity = state.cardData[cartIndex].quantity = quantity + 1
        const updateData = state.cardData.map((item, index) => {
            return cardItem === index ? { ...item, quantity: updateQuantity } : item
        })

        increase = updateData
    }

    return increase
}

const decreaseToQuantity = (state, action) => {
    let cartItmIndex = state.cardData.findIndex((item, index) => index === action.payload)
    let items = [];
    if (cartItmIndex === action.payload) {
        let qty = state.cardData[cartItmIndex].quantity;
        if (qty > 1) {
            let updatedValue = state.cardData[cartItmIndex].quantity = qty - 1
            let updatedData = state.cardData.map((item, index) => {
                return cartItmIndex === index ? { ...item, quantity: updatedValue } : item
            })

            items = updatedData
        } else {
            let filterArray = state.cardData.filter((curItem, index) => index !== action.payload)
            items = filterArray
        }
    }
    return items
}

const calculatePrice = (itemAdd) => {
    let finalPrice = 0;
    itemAdd.map((item, index) => (
        finalPrice += (item.Product.price * item.quantity)
    ))
    return finalPrice
}

const calculateItems = (itemAdd) => {
    let finalItems = 0;
    itemAdd.map((item) => {
        return finalItems += item.quantity
    })
    return finalItems
}

const generateFinalState = (state, itemAdd) => {
    return {
        ...state,
        cardData: itemAdd,
        totalPrice: calculatePrice(itemAdd),
        totalItems: calculateItems(itemAdd)
    }
}