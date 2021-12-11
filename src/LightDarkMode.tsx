import React, { ReactElement, useState } from 'react';

export const App = ():ReactElement => {

    return (
        <Main/>
    );

}


export const Main = ():ReactElement => {

    return (
        <div>
            <Settings/>
        </div>
    );

}

export const Settings = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleMode = React.useCallback(() => {
        setDarkMode(!darkMode)
    }, [darkMode]);

    return (
        <button onClick={toggleMode}>toggle light/dark mode</button>
    );

}
