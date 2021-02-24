import React, {createContext, useContext, useReducer} from "react";

// Prepares the dataLayer (Redux)
export const StateContext = createContext();

//  Wrap our app and provide the dataLayer (Redux)
export const StateProvider = ({reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull the information from the dataLayer (Redux)
export const useStateValue = () => useContext(StateContext);