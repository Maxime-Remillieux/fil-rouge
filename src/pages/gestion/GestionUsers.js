
import UserRow from "../../components/rows/UserRow";
import GestionTable from "./GestionTable";


const searchFields = {
    "code": "Identifiant",
    "name": "Nom",
    "email": "Email",
};
const url = "http://localhost:8000/api/user/";

const links = [
    {text: 'Nouvel utilisateur', path: '/gestion/user/new'}
];
const GestionUsers = ({headers, logout}) => {
    const pageData= {
        interfaceData: {
            links: links,
            searchFields: searchFields
        },
        url: url,
        headers: headers
    }
    return <GestionTable row={UserRow} pageData={pageData}  logout={logout}/>
}

export default GestionUsers;