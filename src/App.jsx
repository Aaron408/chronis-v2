import { BrowserRouter, HashRouter } from "react-router-dom";
import Navigation from "./Navigation";
import { AuthProvider } from "./Components/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Navigation />
        <ToastContainer />
      </AuthProvider>
    </HashRouter>
  );
}

export default App;
