import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [darkmode, setDarkmode] = useState(() => {
        // Check localStorage first
        const saved = localStorage.getItem('darkmode');
        if (saved !== null) {
            return JSON.parse(saved);
        }
        // Fall back to system preference
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(()=> {
        // Save to localStorage whenever theme changes
        localStorage.setItem('darkmode', JSON.stringify(darkmode));
        
        // Update document class
        if(darkmode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkmode]);

    return (
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            {children}
        </ThemeContext.Provider>
    );
}

//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(){
    return useContext(ThemeContext);
}
