import { Routes, Route, useNavigate } from "react-router-dom";
import GestionHome from "./GestionHome";
import GestionLivres from "./GestionLivres";
import GestionUsers from "./GestionUsers";
import GestionLoans from "./GestionLoans";
import { Navigate } from "react-router-dom";
import NewBook from "./NewBook";
import NewUser from "./NewUser";
import { useEffect } from "react";

const Gestion = ({ userState, isGranted, setError }) => {
    // const [keyword, setKeyword] = useState('');
    const { userData } = userState;
    const { userConnected } = userState;
    const navigate = useNavigate();

    useEffect(() => {
        if(!userConnected){
            setError('Connectez-vous pour accéder à cette page');
            navigate('/login')
        }else if (!isGranted('ROLE_ADMIN')){
            setError('Vous n\'avez pas les droits pour accéder à cette page');
            navigate('/');
        }
    }, [userConnected, isGranted]);

    if (!userConnected) return null;

    if (!isGranted('ROLE_ADMIN')) return null;

    const headers = {
        "Content-Type": 'application/json',
        "Authorization": 'Bearer ' + userData.token
    };

    return (
        <Routes>
            <Route path="/" element={<GestionHome />} />
            <Route path="/livres" element={<GestionLivres headers={headers} setError={setError} />} />
            <Route path="/users" element={<GestionUsers headers={headers} setError={setError} />} />
            <Route path="/emprunts" element={<GestionLoans headers={headers} setError={setError} />} />
            <Route path="/livre/new" element={<NewBook headers={headers} setError={setError} />} />
            <Route path="/user/new" element={<NewUser headers={headers} setError={setError} />} />
        </Routes>
    )


};

export default Gestion;