import React from 'react';
import { FaUndoAlt } from 'react-icons/fa';

import { BiSearchAlt } from 'react-icons/bi';


const FindDiv = (props) => {
    const { searchFields } = props;
    const resetSearch = () => {
        document.getElementById('findInput').value = "";
        props.setKeyword('');
        props.getEntityData();
    }
    const handleKeyPress =(e) => {
        if(e.code === "Enter"){
            e.preventDefault();
            props.getEntityData();
        }
    }
    return (
        <div id="findDiv">
            <div className='fieldset'>
                <fieldset>
                    <div className="flexRow"><label htmlFor="findInput"><BiSearchAlt size="28px"/></label><input onKeyDown={handleKeyPress} onChange={e => props.setKeyword(e.target.value)} type="text" id="findInput" /><div className='resetButton' onClick={resetSearch}><FaUndoAlt size="20px"/></div></div><br />
                    <div className="flexCol">
                        <b>Catégories</b><br />
                        <div id="checkbox">
                            <label><input type="checkbox" id="selectAll" defaultChecked />Tout</label>
                            {
                                Object.keys(searchFields).map((field)=>(
                                    <label key={field}><input type="checkbox" className="categ" value={field} defaultChecked />{ searchFields[field] }</label>
                                ))
                            }
                        </div>
                    </div>
                </fieldset>
                <div className="filters">
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

export default FindDiv;