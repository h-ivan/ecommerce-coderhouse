import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        if (cart.some((i) => i.id === item.id)) {
            setCart(cart.map((i) => {
                if (i.id === item.id) {
                    i.qty += item.qty;
                }
                return i;
            }));
        } else {
            setCart([...cart, item]);
        }
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((i) => i.id !== item.id));
    }

    const emptyCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.qty, 0);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, emptyCart, removeFromCart, getTotalItems}}>
            {props.children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);