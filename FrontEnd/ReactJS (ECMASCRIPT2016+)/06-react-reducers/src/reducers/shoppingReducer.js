import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
    products:[
        {id:1, name:"Producto 1", price:100},
        {id:2, name:"Producto 2", price:200},
        {id:3, name:"Producto 3", price:300},
        {id:4, name:"Producto 4", price:400},
        {id:5, name:"Producto 5", price:500},
        {id:6, name:"Producto 6", price:600},
    ],
    cart:[],
    total: null
};

export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find((product) => product.id === action.payload),
                sameProducto = state.cart.find((producto)=> producto.id === action.payload);

                if(sameProducto === undefined) {
                    // newItem.cant = 1; return {...state, cart: [...state.cart, newItem]}
                    return {...state, cart: [...state.cart, {...newItem,quantity: 1}]}
                }else{

                    let copia = JSON.stringify(state.cart), json_copia = JSON.parse(copia);

                    json_copia.forEach((el,index) => el.id === action.payload ? json_copia[index].quantity++ : "");

                    return {...state, cart: json_copia}
                }
        }

        case TYPES.REMOVE_ONE_FROM_CART: {
            let delProduct = state.cart.find((el)=> el.id === action.payload);
            return delProduct 
            ? {
                ...state,
                cart: (state.cart.map((item)=> 
                item.id === delProduct.id
                ? {...item, quantity: delProduct.quantity -1}
                : item
            )).filter(item => item.quantity >= 1)
                
            }
            : {...state, cart: state.cart}
        }

        case TYPES.REMOVE_ALL_FROM_CART: {
            let delProduct = state.cart.find((el)=> el.id === action.payload),
            isDelete = window.confirm(`Estas seguro de borrar todos los productos con el id: "${delProduct.id}"`);

            return isDelete 
            ? 
            ({...state, cart: state.cart.filter((item)=> item.id !== delProduct.id)}) 
            : 
            ({...state, cart: state.cart})
        }

        case TYPES.TOTAL_AMOUNT: {
            return { 
                ...state,
                total: state.cart.length > 0 ? (state.cart.map(item=> item.price * item.quantity)).reduce((a,b)=> a + b) : 0
            }
        }

        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
         }

        default:
        return state;
}
}