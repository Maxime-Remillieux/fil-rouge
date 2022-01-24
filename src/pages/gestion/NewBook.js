import BookForm from "../../components/forms/BookForm";
import Interface from "../../components/interface/Interface";
import New from "./New";

const links=[
    {path:"/gestion/livres", text:"Retour"}
]
const searchFields = {};



const NewBook = ({headers}) => {
    const pageData = {
        headers: headers,
        entity: 'book',
    }
    return (
        <div className="newBook">
            <Interface data={ {searchFields: searchFields, links: links} } />
            <New pageData={pageData} form={BookForm}/>
        </div>
    );
};

export default NewBook;