import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart, total} = state;

    const totalAmount = () => {
        dispatch({type:TYPES.TOTAL_AMOUNT});
    }

    const addToCart = (id) => {
        // console.log(id)
        dispatch({type: TYPES.ADD_TO_CART, payload: id});
        totalAmount();
    }

    const delFromCart = (id) => {
        // console.log(id)
        dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload: id});
        totalAmount();
    }

    const delOneFromCart = (id) => {
        // console.log(id)
        dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload: id});
        totalAmount();
    }

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
        totalAmount();
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <h3>Productos</h3>
            <article className="box grid-responsive">
                {products.map((product)=><ProductItem key={product.id} data={product} addToCart={addToCart} />)}
            </article>
            <h3>Carrito <small>$ {total || "0.00"}</small></h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item, index)=><CartItem key={index} data={item} delFromCart={delFromCart} delOneFromCart={delOneFromCart} />)
                }
            </article>
        </div>
    )
}

export default ShoppingCart;
