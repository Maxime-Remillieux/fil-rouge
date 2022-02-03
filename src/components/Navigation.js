import { NavLink } from "react-router-dom"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"
import { useContext } from "react";
import { AppContext } from "../App";

const Navigation = () => {

    const context = useContext(AppContext);
    const { userConnected } = context.userState;
    const { isGranted } = context;

    console.log(isGranted('ROLE_ADMIN'));

    return (
        <div className="navigation">
            <NavLink exact="true" to="/">Acceuil</NavLink>
            { userConnected && <NavLink exact="true" to="/livres">Parcourir les livres</NavLink>}
            { isGranted('ROLE_ADMIN') && <NavLink to="/gestion/">Gestion</NavLink>}
            <NavLink exact="true" to="/about">A propos</NavLink>
            { !userConnected && <NavLink exact="true" to="/login"><BiLogIn size="28px"/></NavLink>}
            { userConnected && <NavLink exact="true" to="/logout"><BiLogOut size="28px"/></NavLink>}
        </div>
    );
};

export default Navigation;