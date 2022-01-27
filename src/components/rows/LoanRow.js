import { useState } from "react";

const LoanRow = (props) => {
    const { data } = props;
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
        <li className={"row"} data-focus={ focus } onClick={ toggleFocus }>
            <div className="data-main">
                <ul>
                    <li><b>ID</b> {data.id}</li>
                    <li><b>Code user</b> {data.user.code}</li>
                    <li><b>Nom</b> {data.user.firstname + ' ' + data.user.name}</li>
                    <li><b>Code livre</b> {data.book.code}</li>
                    <li><b>Titre</b> {data.book.title}</li>
                    <li><b>Statut</b> {data.status}</li>
                </ul>
            </div>

            <div className={"data-sup"  + (focus? " active" : "")}>
                <div>
                    {/* <ul>
                        <li><b>Téléphone</b> {data.phone}</li>
                        <li><b>Compte créé le</b> {data.registered_at}</li>
                        <li><b>Adresse</b> {data.adress} <br />{data.post_code} {data.city}</li>
                    </ul> */}
                    <ul className="links">
                        <li><a href="#">Modifer</a></li>
                        <li><a href="#">Réservation</a></li>
                    </ul>
                </div>
            </div>

        </li>
    );
}

export default LoanRow;