import { Routes, Route, Navigate } from "react-router-dom";
import { RedirectLogin, RedirectPanel } from "./components/ProtectedRoute";
import { Dashboard } from "./layouts";
import { Login } from "./pages/auth";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Routes>
        {/* REDIRIGE AL PANEL DE CONTROL SI HAY UN USUARIO LOGUEADO */}
      <Route element={<RedirectPanel token={token} />}>
          <Route path="login" element={<Login />} />
      </Route>
              
      {/* PARA ACCEDER DEBE DE EXISTIR UN UNSUARIO LOGUEADO */}
      <Route element={<RedirectLogin />}> 
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Route>
      
      {/* RUTAS DE ERRORES */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default App;
