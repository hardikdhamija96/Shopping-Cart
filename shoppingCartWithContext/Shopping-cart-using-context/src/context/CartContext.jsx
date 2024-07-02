// Import createContext and useContext from React
import { createContext, useContext } from "react";

// Define the initial state for the context
const initialState = {
    productList : [],  // An empty array to store the list of products
    total : 10,        // Initial total value (e.g., total price or total quantity)
}

// Create a context with the initial state
const CartContext = createContext(initialState);

// Define a provider component that will wrap the parts of your app that need access to the context
export const CartProvider = ({children}) => {

    // Define the value to be provided by the context
    const val = {
        total: 10  // Example value, this can be dynamic based on your application needs
    }

    // Return the provider component with the value
    return (
        <CartContext.Provider value={val}>
            {children}  
        </CartContext.Provider>
    )
}

// Create a custom hook to use the CartContext
export const useCart = () => {
    // Access the context value using useContext hook
    const context  = useContext(CartContext);
    return context;  // Return the context value
}
