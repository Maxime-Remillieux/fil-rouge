
import LoanRow from "../../components/rows/LoanRow";
import GestionTable from "./GestionTable";


const searchFields = {
    "b.code": "ID livre",
    "b.title": "Titre",
    "user.code": "ID usagé",
    "user.name": "Nom usagé",
    "status": "Statut",
};
const url = "http://localhost:8000/api/loan/";


const links = [
    {text: 'Nouvel emprunt', path:'/gestion/emprunt/new'}
];
const GestionLoans = () => {
    const pageData= {
        interfaceData: {
            links: links,
            searchFields: searchFields
        },
        url: url
    }
    return <GestionTable row={LoanRow} pageData={pageData}/>
}

export default GestionLoans;