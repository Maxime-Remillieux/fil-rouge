import BookForm from "../../components/forms/BookForm";
import Interface from "../../components/interface/Interface";
import New from "./New";

const links=[
    {path:"/gestion/livres", text:"Retour"}
]
const searchFields = {};

const NewBook = () => {
    return (
        <div className="newBook">
            <Interface data={ {searchFields: searchFields, links: links} } />
            <New entity={'book'} form={BookForm}/>
        </div>
    );
};

export default NewBook;