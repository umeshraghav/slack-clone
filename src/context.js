import React,{useContext, useReducer} from"react";


export const AppContext = React.createContext();

export const AppProvider =({reducer, intialState, children})=>{
    return <AppContext.Provider value={useReducer(reducer, intialState)}>
        {children}
        </AppContext.Provider>
};

export const useGlobalContext = ()=> useContext(AppContext)