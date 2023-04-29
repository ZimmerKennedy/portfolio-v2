import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, sunnyTheme, rainTheme } from "./components/Themes";
import "./App.css";
import GlobalStyle from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function App() {
  const [theme, setTheme] = useState("sunny");
  const location = useLocation();

  const toggleTheme = (nextState) => {
    // setTheme((prevTheme) => (prevTheme === 'sunny' ? 'dark' : 'sunny'));
    setTheme(nextState);
  };
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider
        theme={
          theme === "sunny"
            ? sunnyTheme
            : theme === "night"
            ? darkTheme
            : rainTheme
        }
      >
        <AnimatePresence mode='wait'>
          <AppRoutes toggleTheme={toggleTheme} theme={theme} />
        </AnimatePresence>
      </ThemeProvider>
    </div>
  );
}

export default App;
