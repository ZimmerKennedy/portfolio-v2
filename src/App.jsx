import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, nightTheme, darkTheme, sunnyTheme } from "./components/Themes";
import "./App.css";
import GlobalStyle from "./globalStyles";
import AppRoutes from "./AppRoutes";
function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme === 'light' ? sunnyTheme : nightTheme}>
       <AppRoutes toggleTheme={toggleTheme} theme={theme}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
