import React, { useContext, useState } from 'react';

const theme = {
    light: {
        backgroundColor: "lightgray"
    },
    dark: {
        backgroundColor: "blue"
    }
}

const themeContext = React.createContext(null);

function Theme() {
    const [themeColor, setThemeColor] = useState(theme.light);
    return (
        <div>
            <button onClick={() => setThemeColor(theme.light)}>Light</button>
            <button onClick={() => setThemeColor(theme.dark)}>Dark</button>
            <themeContext.Provider value={themeColor}>
                <Bitton />
                <Bitton />
            </themeContext.Provider>
        </div>

    )
}

function Bitton() {
    const contextValue = useContext(themeContext);
    return (
        <div style={{ backgroundColor: contextValue.backgroundColor, width: "25vw", height: "25vh" }}>Hello</div>
    )
}

export default Theme;