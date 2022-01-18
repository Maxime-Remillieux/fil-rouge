
const Interface = (props) => {

    const resetSearch = () => {
        document.getElementById('findInput').value = "";
        props.onClick();
    }

    return (
        <div className="interface">
            <div className="fieldset">
                <label htmlFor="addElem">Ajouter</label><select name="addElem" id="addElem">
                    <option value="0" data-table="livre">Ouvrage</option>
                    <option value="1" data-table="auteur">Auteur</option>
                    <option value="2" data-table="editeur">Editeur</option>
                    <option value="3" data-table="collection">Collection</option>
                    <option value="4" data-table="theme">Thème</option>
                </select>
                <div className="addDiv">
                    <h4>Enregistrer un nouvel ouvrage</h4>
                    <div className = "formInputs">
                        <div><label htmlFor="titre">Titre</label><input autoComplete="off" className="values" type="text" id= "titre" name="titre" required/></div>
                        <div>
                            <label  htmlFor="nomAut">Nom auteur</label><input autoComplete="off" data-table="auteur" list="auteurs1" type="text" id="nomAut" name = "nom_auteur" className="alt"/>
                            <datalist id ='auteurs1'></datalist>
                            <input type="hidden" className="values" value="0" id="id_auteur" name="id_auteur"/>
                        </div>

                        <div>
                            <label htmlFor="prenomAut">Prénom</label><input autoComplete="off" data-table="auteur" list="auteurs2" type="text" id="prenomAut" name = "prenom_auteur" className="alt"/>
                            <datalist id = 'auteurs2'></datalist>
                        </div>

                        <div>
                            <label htmlFor="nomEdit">Éditeur</label><input autoComplete="off" data-table="editeur" list="editeurs" type="text" id="nomEdit" name="nom_editeur" className="alt"/>
                            <datalist id='editeurs'></datalist>
                            <input type="hidden" className="values" value="0" id="id_editeur" name="id_editeur"/>
                        </div>

                        <div>
                            <label htmlFor="collec">Collection</label><input autoComplete="off" data-table="collection" list="collections" type="text" id = "collec" className="alt" name="nom_collection"/>
                            <datalist id ='collections'></datalist>
                            <input type="hidden" className="values" value="0" id="id_collection" name="id_collection"/>
                        </div>
                        <div>
                            <label htmlFor="img">Image</label><input type="file" id="img" name="img"/>
                        </div>

                        <div><label htmlFor="date">Date</label><input type="date" id = "date" name = "date" className="values" required/></div>
                        <div className="themesDiv">
                            <div>
                                <label htmlFor="theme0"><button id="plus"><i className="fas fa-plus"></i></button>Thèmes</label>
                                <input className="alt" autoComplete="off" data-table="theme" data-index="0" list="themes0" type="text" id = "theme0" name="nom_theme"/>
                                <datalist id = 'themes0'></datalist>
                                <input type="hidden" className="values" name="id_theme" value="0" id="id_theme0" data-index="0"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="dispo">Disponibilité</label>
                            <select name="dispo" id="dispo" className="values" required>
                                <option value="Disponible">Disponible</option>
                                <option value="Emprunté">Emprunté</option>
                                <option value="Supprimé">Supprimé</option>
                            </select>
                        </div>
                    </div>
                </div>
                <span id = "buttonSpan"><button id = "addButton">Ajouter</button></span>
            </div>
            <div id="findDiv">
        <div className ='fieldset'>
            <fieldset>
                <div className="flexRow"><label htmlFor="findInput">Rechercher</label><input type="text" id="findInput"/></div><br/>
                <div className="flexCol">
                    <b>Catégories</b><br/>
                    <div id="checkbox">
                        <label><input type="checkbox" id = "selectAll" defaultChecked/>Tout</label>
                        <label><input type="checkbox" className = "categ" value="b.code" defaultChecked/>Identifiant</label>
                        <label><input type="checkbox" className = "categ" value="b.title" defaultChecked/>Titre</label>
                        <label><input type="checkbox" className = "categ" value="a.name" defaultChecked/>Auteur</label>
                        <label><input type="checkbox" className = "categ" value="p.name" defaultChecked/>Éditeur</label>
                        <label><input type="checkbox" className = "categ" value="c.name" defaultChecked/>Collection</label>
                        <label><input type="checkbox" className = "categ" value="b.release_at" defaultChecked/>Date</label>
                        <label><input type="checkbox" className = "categ" value="t.name" defaultChecked/>Theme</label>
                    </div>
                </div>
                <div className = "flexRow">
                    <button id="findButton" onClick={ props.onClick }>Chercher</button>
                    <button id="resetButton" onClick={ resetSearch }>Réinitialiser</button><br/>
                </div>
            </fieldset>
            <div>
                <label htmlFor="tri">Trier par</label>
                <select name="tri" id="tri">
                </select>
            </div>
            <div>
                <label htmlFor="affichDispo">Afficher</label>
                <select name="affichDispo" id="affichDispo" defaultValue="0">
                    <option value="0">Tout</option>
                    <option value="1">Disponible</option>
                    <option value="2">Emprunté</option>
                    <option value="3">Supprimé</option>
                </select>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Interface;