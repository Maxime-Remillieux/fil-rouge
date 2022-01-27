import { useEffect } from 'react';
import useFetch from "../../hooks/database/useFetch";
import { useNavigate } from "react-router-dom";
import Interface from "../../components/interface/Interface";
import Navbar from "../../components/interface/Navbar";
import { BouncingBalls } from 'react-cssfx-loading';


const GestionTable = ({ row: Row, pageData, setError }) => {
    const [loading, data, error, fetchApi, setKeyword, updateRequestData] = useFetch(pageData.url, pageData.headers);

    const navigate = useNavigate();

    useEffect(() => {
        if(error === 'Expired JWT Token'){
            navigate('/logout');
        }
    }, [error, navigate]);
    

    return (
        <div className="gestion">
            <Interface data={pageData.interfaceData} setKeyword={setKeyword} updateRequestData={updateRequestData} fetchApi={fetchApi}/>
            <div className="gestionContent">
                <Navbar />
                {loading && <div className="loading"><BouncingBalls color='#516079' size="42px" /></div>}
                {!loading &&
                    <ul className="list">
                        {data.map(element => (
                            <Row data={element} key={element.id} />
                        ))}
                    </ul>
                }
            </div>

        </div>
    );
};

export default GestionTable;