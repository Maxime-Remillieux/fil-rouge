import FindDiv from "./FindDiv";
import LinksDiv from "./LinksDiv";

const Interface = ({data, setKeyword, updateRequestData, fetchApi }) => {
    return (
        <div className="interface">
            <FindDiv setKeyword={setKeyword} fetchApi={fetchApi} updateRequestData={updateRequestData} searchFields={data.searchFields}   />
            <LinksDiv links={data.links}/>
        </div>
    );
};

export default Interface;