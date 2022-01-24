import { useState, useEffect } from "react/cjs/react.development";
import axios from "axios";
import { BouncingBalls } from "react-cssfx-loading";
import Interface from "../../components/interface/Interface";
import { useNavigate } from "react-router-dom"
import Navbar from "../../components/interface/Navbar";
import useFetch from "../../hooks/database/useFetch";

function getRequestData(keyword) {
    let categories = document.querySelectorAll('.categ');
    let dataObj = {};
    if (keyword) {
        categories.forEach(cat => {
            if (cat.checked)
                dataObj[cat.value] = keyword;
        });
    }
    return dataObj;
}



const GestionTable = ({ row: Row, pageData }) => {
    const [keyword, setKeyword] = useState('');
    const [loading, data, updateRequestData] = useFetch({url: pageData.url, data: getRequestData(keyword), headers: pageData.headers});
    // const navigate = useNavigate();

    const getData = () =>{
        const requestData = getRequestData(keyword);
        updateRequestData(s=>({...s, data: requestData}));
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="gestion">
            <Interface data={pageData.interfaceData} setKeyword={setKeyword} getData={getData} />
            <div className="gestionContent">
                <Navbar />
                {loading && <div className="loading"><BouncingBalls color='#516079' size="42px" /></div>}
                {!loading &&
                    <ul className="list">
                        {data.map(element => (
                            <Row data={element} key={element.code} />
                        ))}
                    </ul>
                }
            </div>

        </div>
    );
};

export default GestionTable;