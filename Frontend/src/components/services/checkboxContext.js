import React, { useState } from "react";

const ContextCheckbox = React.createContext({});

export function CheckboxContextProvider({ children }) {
    const [checkboxArray, setCheckboxArray] = useState([]);
    
    return <ContextCheckbox.Provider value={{ checkboxArray, setCheckboxArray }}>
        {children}
    </ContextCheckbox.Provider>
}

export default ContextCheckbox;