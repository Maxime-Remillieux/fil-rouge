import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import GestionLivres from "./pages/gestion/GestionLivres";
import GestionUsers from "./pages/gestion/GestionUsers";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Header from "./components/Header";
// import { Navigate } from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(()=>{
    const savedToken = localStorage.getItem('token');
    return savedToken || undefined;
  });
  const [userData, setUserData] = useState(()=>{
    const savedUser = localStorage.getItem('user');
    const connectedUser = JSON.parse(savedUser);
    return connectedUser || undefined;
  });


  return (
    <BrowserRouter>
      <Header userData={userData}/>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gestion/livres" exact element={<GestionLivres token={token} userData={userData}/>} />
          <Route path="/gestion/users" exact element={<GestionUsers token={token} userData={userData}/>} />   
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setToken={setToken} setUserData={setUserData} />} />
          <Route path="/logout" element={<Logout setToken={setToken} setUserData={setUserData} />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;