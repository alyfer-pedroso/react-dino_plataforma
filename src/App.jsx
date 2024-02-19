import { MainProvider } from "./context/MainContext";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/router";

import "./App.css";

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MainProvider>
  );
}

export default App;
