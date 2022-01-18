import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact="true" to="/">Acceuil</NavLink>
            <NavLink exact="true" to="/livres">Parcourir les livres</NavLink>
            <NavLink exact="true" to="/gestion/livres">Gestion des livres</NavLink>
            <NavLink exact="true" to="/gestion/users">Gestion des utilisateurs</NavLink>
            {/* <NavLink exact="true" to="/gestion/emprunts">Emprunts</NavLink> */}
            <NavLink exact="true" to="/about">A propos</NavLink>
            
        </div>

    );
};

export default Navigation;