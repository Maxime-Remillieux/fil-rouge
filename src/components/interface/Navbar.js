import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink exact="true" to="/gestion/">Statistiques</NavLink>
            <NavLink exact="true" to="/gestion/livres">Livres</NavLink>
            <NavLink exact="true" to="/gestion/users">Utilisateurs</NavLink>
            <NavLink exact="true" to="/gestion/emprunts">Emprunts</NavLink>
        </div>
    );
};

export default Navbar;