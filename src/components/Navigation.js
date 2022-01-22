import { NavLink } from "react-router-dom"
import { BiLogIn } from "react-icons/bi"
import { BiLogOut } from "react-icons/bi"

const Navigation = (props) => {
    const {userData} = props;
    const isAdmin = () => {
        if(userData){
            if(userData.roles[0] == "ROLE_ADMIN"){
                return true;
            }
        }
        return false;
    }
    return (
        <div className="navigation">
            <NavLink exact="true" to="/">Acceuil</NavLink>
            { userData && 
                <NavLink exact="true" to="/livres">Parcourir les livres</NavLink>
            }
            { isAdmin() &&
            <>
            <NavLink exact="true" to="/gestion/livres">Gestion des livres</NavLink>
            <NavLink exact="true" to="/gestion/users">Gestion des utilisateurs</NavLink>                
            </>
            }
            <NavLink exact="true" to="/about">A propos</NavLink>
            { userData === undefined &&
            <NavLink exact="true" to="/login"><BiLogIn size="28px"/></NavLink>
            }
            { userData &&
            <NavLink exact="true" to="/logout"><BiLogOut size="28px"/></NavLink>
            }
        </div>

    );
};

export default Navigation;