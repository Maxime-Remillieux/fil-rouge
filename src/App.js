import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Gestion from "./pages/gestion/Gestion";
import useAuth from "./hooks/security/useAuth";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

const App = () => {
  const [userState, login, logout, isGranted] = useAuth();
  const [error, setError] = useState('');

  const [context, setContext] = useState({
    login: login,
    logout: logout,
    setError: setError,
    isGranted: isGranted,
    userState: userState,
    error: error
  });

  useEffect(()=>{
    console.log('set context');
    setContext(c=>({
      ...c,
      isGranted: isGranted,
      userState: userState,
      error: error
    }));

  },[userState, error]);

  

  return (
    <BrowserRouter>
    <AppContext.Provider value={context}>
      <Header />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gestion/*" element={<Gestion />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
      {/* <Header userState={userState} isGranted={isGranted} />
      <Routes>
          <Route onChange={handleRouteChange} path="/" exact element={<Home error={error} setError={setError} />} />
          <Route path="/gestion/*" element={<Gestion userState={userState} isGranted={isGranted} setError={setError} error={error}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login login={login} error={error} setError={setError} userState={userState}/>} />
          <Route path="/logout" element={<Logout logout={logout} />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;