import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import "./App.css";
import GlobalStyle from "./globalStyles";
import AppRoutes from "./AppRoutes";
function App() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
       <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
