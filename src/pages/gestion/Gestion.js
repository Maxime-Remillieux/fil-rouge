import { Routes, Route, useNavigate } from "react-router-dom";
import GestionHome from "./GestionHome";
import GestionLivres from "./GestionLivres";
import GestionUsers from "./GestionUsers";
import GestionLoans from "./GestionLoans";
import NewBook from "./NewBook";
import NewUser from "./NewUser";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";

const Gestion = () => {
    // const [keyword, setKeyword] = useState('');
    const context = useContext(AppContext);
    const { userData } = context.userState;
    const { userConnected } = context.userState;
    const {setError} = context;
    const {isGranted} = context;
    const navigate = useNavigate();

    useEffect(() => {
        if(!userConnected){
            setError('Connectez-vous pour accéder à cette page');
            navigate('/login')
        }else if (!isGranted('ROLE_ADMIN')){
            setError('Vous n\'avez pas les droits pour accéder à cette page');
            navigate('/');
        }
    }, [userConnected, isGranted, navigate, setError]);



    if (!userConnected) return null;

    if (!isGranted('ROLE_ADMIN')) return null;



    return (
        <Routes>
            <Route path="/" element={<GestionHome />} />
            <Route path="/livres" element={<GestionLivres />} />
            <Route path="/users" element={<GestionUsers />} />
            <Route path="/emprunts" element={<GestionLoans />} />
            <Route path="/livre/new" element={<NewBook />} />
            <Route path="/user/new" element={<NewUser />} />
        </Routes>
    )
};

export default Gestion;