import { NavLink } from "react-router-dom"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react/cjs/react.development";

const LinksDiv = ({links}) => {
    const [focus, setFocus] = useState(false);

    const toggleFocus = ()=>{
        setFocus(!focus);
    }

    return (
        <div className="linksDiv">
            <div className="dropdownLinks" onClick={toggleFocus}><h4>Gestion</h4>{focus? <IoIosArrowDown size="20px"/>:<IoIosArrowUp size="20px"/>}</div>
            { focus &&
                <ul>
                { links.map(link=>(
                    <li key={link.path}>
                        <NavLink  exact="true" to={link.path}>{link.text}</NavLink>
                    </li>
                ))}
                </ul>
            }

        </div>
    );
};

export default LinksDiv;