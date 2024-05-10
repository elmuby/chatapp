import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Chatscreen from "./pages/Chatscreen";

function App() {
  return (
    <>
      <AuthProvider>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/chat"
            element={
              <PrivateRoute>
                <Chatscreen />
              </PrivateRoute>
            }
          />
        </Routes>
       
      </AuthProvider>
    </>
  );
}

export default App;
