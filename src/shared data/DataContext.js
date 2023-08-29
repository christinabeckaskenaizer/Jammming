import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export function DataProvider({ searchResults }) {
    const [sharedData, setSharedData] = useState('');

    return (
        <DataContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    return useContext(DataContext);
}
