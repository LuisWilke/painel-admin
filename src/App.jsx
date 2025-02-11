import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RecuperarSenha from "./pages/PasswordRecover";
import Dashboard from "./pages/Dashboard";
import DocumentosReceber from "./pages/DocumentosReceber";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documentos-receber" element={<DocumentosReceber />} />
        
      </Routes>
    </Router>
  );
}

export default App;
