import Interface from "../../components/interface/Interface";
import UserForm from "../../components/forms/UserForm";
import New from "./New";

const NewUser = () => {
    const links=[
        {path:"/gestion/users", text:"Retour"}
    ]
    const searchFields ={
    }

    return (
        <div className="newBook">
            <Interface data={ {searchFields: searchFields, links: links} } />
            <New entity={'user'} form={UserForm}/>
        </div>
    );
};

export default NewUser;