import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, sunnyTheme, rainTheme } from "./components/Themes";
import "./App.css";
import GlobalStyle from "./globalStyles";
import AppRoutes from "./AppRoutes";
function App() {
  const [theme, setTheme] = useState("sunny");

  const toggleTheme = (nextState) => {
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
        <AppRoutes toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </div>
  );
}

export default App;
