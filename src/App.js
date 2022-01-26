import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Gestion from "./pages/gestion/Gestion";
import useAuth from "./hooks/security/useAuth";
import { useState } from "react";
// import { Navigate } from "react-router-dom";

const App = () => {
  const [userState, login, logout, isGranted] = useAuth();
  const [error, setError] = useState('')

  return (
    <BrowserRouter>
      <Header userState={userState} isGranted={isGranted}/>
      { error &&
        <span className="errorMessage">{error}</span>
      }
      <Routes>
          <Route path="/" exact element={<Home error={error} />} />
          <Route path="/gestion/*" element={<Gestion userState={userState} isGranted={isGranted} setError={setError}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login login={login} error={error} setError={setError}/>} />
          <Route path="/logout" element={<Logout logout={logout} />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;