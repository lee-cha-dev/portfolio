import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import theme from "./theme";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <ChakraProvider theme={theme}>
          <BrowserRouter>
              <div className="App">
                  <div className="App-content">
                      <Routes>
                          <Route path="/" element={<Portfolio />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route path="*" element={<NotFound />} />
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      </ChakraProvider>
  );
}

export default App;
