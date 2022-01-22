import { useState } from "react";

const UserRow = (props) => {
    const { user } = props;
    const [focus, setFocus] = useState(false);

    const toggleFocus = () => {
        let rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            if(row.dataset.focus === "true"){
                row.click();
            }
        });
        setFocus(!focus);
    }

    return (
        <li className="row" data-focus={ focus } onClick={ toggleFocus }>
            <div className="data-main">
                <ul>
                    <li><b>Code</b> {user.code}</li>
                    <li><b>Nom</b> {user.firstname + ' ' + user.name}</li>
                    <li><b>Email</b> {user.mail}</li>
                    <li><b>Role</b> {user.role[0]}</li>
                </ul>
            </div>

            {focus &&
                <div className="data-sup">
                    <div>
                        <ul>
                            <li><b>Téléphone</b> {user.phone}</li>
                            <li><b>Compte créé le</b> {user.registered_at}</li>
                            <li><b>Adresse</b> {user.adress} <br />{user.post_code} {user.city}</li>
                        </ul>
                        <ul className="links">
                            <li><a href="#">Modifer</a></li>
                            <li><a href="#">Retirer</a></li>
                            <li><a href="#">Reserver</a></li>
                        </ul>
                    </div>
                </div>
            }

        </li>
    );
}

export default UserRow;