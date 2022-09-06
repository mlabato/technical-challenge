import Login from "./pages/Login"
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {

  
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
    </Routes>


  );
};

export default App;
