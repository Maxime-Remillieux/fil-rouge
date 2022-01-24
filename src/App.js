import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Gestion from "./pages/gestion/Gestion";
import useAuth from "./hooks/security/useAuth";
// import { Navigate } from "react-router-dom";

const App = () => {
  const [userState, login, logout, isGranted] = useAuth();

  return (
    <BrowserRouter>
      <Header userState={userState} isGranted={isGranted}/>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gestion/*" element={<Gestion userState={userState} isGranted={isGranted}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login login={login}/>} />
          <Route path="/logout" element={<Logout logout={logout} />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;