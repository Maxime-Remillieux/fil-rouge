import { useContext, useEffect } from 'react';
import useFetch from "../../hooks/database/useFetch";
import { useNavigate } from "react-router-dom";
import Interface from "../../components/interface/Interface";
import Navbar from "../../components/interface/Navbar";
import { BouncingBalls } from 'react-cssfx-loading';
import { AppContext } from '../../App';


const GestionTable = ({ row: Row, pageData }) => {
    const context = useContext(AppContext);
    
    const headers = {
        "Content-Type": 'application/json',
        "Authorization": 'Bearer ' + context.userState.userData.token
    };
    const [loading, data, fetchError, fetchApi, setKeyword, updateRequestData] = useFetch(pageData.url, headers);
    const navigate = useNavigate();

    useEffect(() => {
        console.log((fetchError));
        if(fetchError === 'Expired JWT Token'){
            navigate('/logout');
        }
    }, [fetchError, navigate]);

    return (
        <div className="gestion">
            <Interface data={pageData.interfaceData} setKeyword={setKeyword} updateRequestData={updateRequestData} fetchApi={fetchApi}/>
            <div className="gestionContent">
                <Navbar />
                {loading && <div className="loading"><BouncingBalls color='#516079' size="24px" /></div>}
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