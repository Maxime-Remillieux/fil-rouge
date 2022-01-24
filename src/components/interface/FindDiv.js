import React, { useState } from 'react';
import { FaUndoAlt } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const FindDiv = (props) => {
    const { searchFields } = props
    const[focus, setFocus] = useState(false)
    const resetSearch = (e) => {
        e.preventDefault();
        document.getElementById('findInput').value = "";
        props.setKeyword('');
        props.getData();
    }
    const handleKeyPress = (e) => {
        if (e.code === "Enter") {
            e.preventDefault();
            props.getData();
        }
    }

    const toggleFocus = ()=>{
        setFocus(!focus);
    }

    return (
        <div id="findDiv">
            <div className='fieldset'>
                <fieldset>
                    <div className="flexRow"><label htmlFor="findInput"><BiSearchAlt size="28px" /></label><input onKeyDown={handleKeyPress} onChange={e => props.setKeyword(e.target.value)} type="text" id="findInput" /><div className='resetButton' onClick={resetSearch}><FaUndoAlt size="20px" /></div></div><br />
                </fieldset>
                <div className={"dropdownLinks" + (focus ? " active" : "")} onClick={toggleFocus}><h4>Filtres</h4>{focus? <IoIosArrowDown size="20px"/>:<IoIosArrowUp size="20px"/>}</div>
                <div className={"filters" + (focus ? " active" : "")}>
                    <div className="flexCol">
                        <b>Catégories</b><br />
                        <div id="checkbox">
                            <label><input type="checkbox" id="selectAll" defaultChecked />Tout</label>
                            {
                                Object.keys(searchFields).map((field) => (
                                    <label key={field}><input type="checkbox" className="categ" value={field} defaultChecked />{searchFields[field]}</label>
                                ))
                            }
                        </div>
                    </div>
                    <div>
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
        </div>
    );
};

export default FindDiv;