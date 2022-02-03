import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../App";

const BookForm = ({onSubmit}) => {
    const { register, handleSubmit } = useForm();
    const [authors, setAuthors] = useState([]);
    const context = useContext(AppContext);

    const handleKeyPress = (e) =>{
        let value = e.target.value;
        let reqData = {};
        reqData['name'] = value;

        if(value.length > 1){
            axios.post('http://localhost:8000/api/author/', reqData, {headers: {Authorization: "Bearer " + context.userState.userData.token}})
            .then(res=>{
                setAuthors(res.data);
            })
            .catch(e=>{
                console.log(e);
            })
        }
    }

    return (
        <div className="bookForm">
            <h3>Ajouter un nouveau livre</h3>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <span>
                        <label htmlFor="title">Titre</label>
                        <input {...register('title')} type="text" id='title'/>
                    </span>
                    <span>
                        <label htmlFor='release_at'>Parution</label>
                        <input {...register('release_at')} id="release_at" type="date"/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="author-name">Nom auteur</label>
                        <input onKeyPress={handleKeyPress} {...register('author.name')} list="authorList" autoComplete='off' type="text" id="author-name"/>
                        <datalist id="authorList">
                            { authors.map(author=>(
                                <option key={author.id} value={author.firstname + ' ' + author.name}/>
                            ))
                            }
                        </datalist>
                    </span>
                    <span>
                        <label htmlFor='author-firstname'>Prénom auteur</label>
                        <input {...register('author.firstname')} type="text" id="author-firstname"/>
                        <input type="hidden" {...register('author.id')} value="0"/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="publisher-name">Éditeur</label>
                        <input {...register('publisher.name')} type="text" id="publisher-name"/>
                        <input {...register('publisher.id')} type="hidden" value="0"/>
                    </span>
                    <span>
                        <label htmlFor="collection-name">Collection</label>
                        <input {...register('collection.name')} type="text" id="collection-name"/>
                        <input {...register('collection.id')} type="hidden" value="0" id="collection-id"/>
                    </span>
                </div>
                <div>
                    <span>
                        <label htmlFor="theme">Thèmes</label>
                        <input {...register('themes.theme0.name')} type="text"id='theme'/>
                        <input {...register('themes.theme0.id')}type="hidden" value="0" id="theme-id" className="input-field"/>
                    </span>
                    <span>
                        <label>Image</label>
                        <input {...register('img')} name="img" type="file"/>
                    </span>
                </div>
                <span>
                    <label htmlFor="resume">Résumé</label>
                    <textarea {...register('resume')} id="resume" rows="5" cols="30"/>
                </span>
                <button type="submit" >Ajouter</button>
            </form>
        </div>

    );
};

export default BookForm;