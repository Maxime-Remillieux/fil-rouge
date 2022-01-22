import AddBook from "./AddBook";
import FindDiv from "./FindDiv";
import LinksDiv from "./LinksDiv";

const Interface = (props) => {

    return (
        <div className="interface">
            <FindDiv searchFields={props.searchFields} getEntityData={props.getEntityData} setKeyword={props.setKeyword} />
            <LinksDiv links={props.links}/>
        </div>
    );
};

export default Interface;