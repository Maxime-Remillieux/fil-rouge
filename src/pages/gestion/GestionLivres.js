import Interface from "../../components/interface/Interface";
import axios from "axios";
import { useEffect, useState } from "react";
import BookRow from "../../components/BookRow";
import { Navigate } from "react-router-dom";
import { BarWave } from "react-cssfx-loading";
import { BouncingBalls } from "react-cssfx-loading";


const searchFields = {
    "b.code": "Identifiant",
    "b.title": "Titre",
    "a.name": "Auteur",
    "p.name": "Éditeur",
    "c.name": "Collection",
    "b.release_at": "Date",
    "t.name": "Thème"
};
const url = "http://localhost:8000/api/book/";

async function fetchApi(data, headers){
    return axios
    .post(url, data, {headers: headers})
    .then(res => res.data);
}
const links = [
    {text: 'Nouveau livre', path:'/gestion/livre/new'},
    {text: 'Nouvel auteur', path:'/gestion/auteur/new'},
    {text: 'Nouvel éditeur', path:'/gestion/editeur/new'},
    {text: 'Nouvelle collection', path:'/gestion/collection/new'},
    {text: 'Nouveau thème', path: '/gestion/theme/new'},
];
const GestionLivres = (props) => {
    const [books, setBooks] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);
    const {token} = props;
    const {userData} = props;
    const headers = {
        "Content-Type": 'application/json',
        "Authorization": 'Bearer ' + token
    };
    const getBooks = () =>{
        let categories = document.querySelectorAll('.categ');
        let dataObj = {};
        if(keyword){
            categories.forEach(cat => {
                if(cat.checked)
                    dataObj[cat.value] = keyword;
            });
        }
        console.log(dataObj);
        return fetchApi(dataObj, headers);
    }

    useEffect(() => {
        let isSubscribed = true;
        
        getBooks().then(res =>{
            console.log(res);
            if(isSubscribed){
                setBooks(res);
                setLoading(false);
            }
        });

        return () => isSubscribed = false;
    }, []);

    if(userData){
        if(!userData.roles.includes('ROLE_ADMIN')){
            return <Navigate to='/'/>
        }
    }else{
        return <Navigate to='/login'/>
    }

    return (
        <div className="gestion">
            <Interface links={links} getEntityData={getBooks} searchFields={searchFields} page="books" setKeyword={setKeyword}/>
            { loading &&
            <div className="loading">
                {/* <img src="/img/Spinner-2.gif" alt="loading"  width="50" /> */}
                <BouncingBalls color='#516079' size="42px"/>
            </div>
            }
            { !loading &&
                <ul className="list">
                    {books.map((book)=> (
                        <BookRow book={book} key= {book.title}/>
                    ))}
                </ul>            
            }

        </div>
    );
}

export default GestionLivres;