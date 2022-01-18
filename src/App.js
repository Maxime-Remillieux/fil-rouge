import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import GestionLivres from "./pages/gestion/GestionLivres";
import GestionUsers from "./pages/gestion/GestionUsers";
import Home from './pages/Home';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gestion/livres" exact element={<GestionLivres />} />
          <Route path="/gestion/users" exact element={<GestionUsers />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;