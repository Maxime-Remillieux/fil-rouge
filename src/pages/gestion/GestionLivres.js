
import BookRow from "../../components/rows/BookRow";
import GestionTable from "./GestionTable";


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

const links = [
    {text: 'Nouveau livre', path:'/gestion/livre/new'},
    {text: 'Nouvel auteur', path:'/gestion/auteur/new'},
    {text: 'Nouvel éditeur', path:'/gestion/editeur/new'},
    {text: 'Nouvelle collection', path:'/gestion/collection/new'},
    {text: 'Nouveau thème', path: '/gestion/theme/new'},
];



const GestionLivres = () => {
    const pageData= {
        interfaceData: {
            links: links,
            searchFields: searchFields
        },
        url: url,
    }


    return <GestionTable row={BookRow} pageData={pageData}/>
}

export default GestionLivres;