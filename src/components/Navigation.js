import { NavLink, useNavigate } from "react-router-dom"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"

const Navigation = ({userState, isGranted}) => {
    const {userConnected} = userState;
    const navigate = useNavigate();

    return (
        <div className="navigation">
            <NavLink exact="true" to="/">Acceuil</NavLink>
            { userConnected && <NavLink exact="true" to="/livres">Parcourir les livres</NavLink>}
            { isGranted('ROLE_ADMIN') && <NavLink  to="/gestion/">Gestion</NavLink>}
            <NavLink exact="true" to="/about">A propos</NavLink>
            { !userConnected && <NavLink exact="true" to="/login"><BiLogIn size="28px"/></NavLink>}
            { userConnected && <NavLink exact="true" to="/logout"><BiLogOut size="28px"/></NavLink>}
        </div>

    );
};

export default Navigation;