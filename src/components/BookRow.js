import { useState } from "react";

const BookRow = (props) => {
    const { book } = props;
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
        <li className="row" data-focus={ focus } onClick = { toggleFocus }>
            <div className="data-main">
                <ul>
                    <li><b>Code</b> {book.code}</li>
                    <li><b>Titre</b> {book.title}</li>
                    <li><b>Auteur</b> {book.author.firstname + ' ' + book.author.name}</li>
                    <li><b>Éditeur</b> {book.publisher.name}</li>
                    <li><b>Collection</b> {book.collection.name}</li>
                </ul>
            </div>

            {focus &&
                <div className="data-sup">
                    <img src={"/upload/books/" + book.img} alt="img" />
                    <div>
                        <ul>
                            <li><b>Paru le</b> {book.release_at}</li>
                            <li><b>Ajouté le</b> {book.added_at}</li>
                            <li><b>Thèmes</b>{
                                
                                book.themes.map((theme, i)=>{
                                    if(i !== book.themes.length - 1) {
                                        return (theme.name + ', ');
                                    }else{
                                        return theme.name;
                                    }
                                })
                            }</li>
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

export default BookRow;