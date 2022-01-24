import FindDiv from "./FindDiv";
import LinksDiv from "./LinksDiv";

const Interface = ({setKeyword, getData, data}) => {
    return (
        <div className="interface">
            <FindDiv setKeyword={setKeyword} getData={getData} searchFields={data.searchFields}   />
            <LinksDiv links={data.links}/>
        </div>
    );
};

export default Interface;