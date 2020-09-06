import React, { createContext, useContext, useReducer } from "react";

// preaparing data layer
export const StateContext = createContext();

// Wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// pull data from data layer
export const useStateValue = () => useContext(StateContext);