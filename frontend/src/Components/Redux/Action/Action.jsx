import { addCart, removeCart, increseItem ,decreaseitem} from '../Reducer/Constant'

export const addToCart = (drawerData) => {
    return {
        type: addCart,
        payload: drawerData
    }
}

export const removeToCart = (index) => {
    return {
        type: removeCart, 
        payload: index
    }
}

export const increseToQuantity = (index) => {
    console.log(index);
    return {
        type: increseItem,
        payload: index
    }
}

export const decreaseToQuantity=(index)=>{
    return {
        type:decreaseitem,
        payload:index
    }
}

export const emptyCart=()=>{
    return {
        type:"emptyCart",
        payload:''
    }
}