//import "./App.css";
import Home from "./components/Home.js";
import Electronicshoplist from "./components/Electronicshoplist";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Electronicshoplist />
    </ThemeProvider>
  );
}

export default App;
