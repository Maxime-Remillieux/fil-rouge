import Interface from "../../components/interface/Interface";
import UserForm from "../../components/forms/UserForm";
import New from "./New";

const NewUser = ({headers}) => {
    const links=[
        {path:"/gestion/users", text:"Retour"}
    ]
    const searchFields ={
    }
    const pageData = {
        headers: headers,
        entity: 'user'
    }
    return (
        <div className="newBook">
            <Interface data={ {searchFields: searchFields, links: links} } />
            <New pageData={pageData} form={UserForm}/>
        </div>
    );
};

export default NewUser;