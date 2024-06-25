import { createContext, useContext  } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{},
    lightTheme: ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){ // yahan se useTheme ka use kr k ThemeContext ka use kiya jaye ga
    return useContext(ThemeContext)
}