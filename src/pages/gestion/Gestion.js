import { Routes, Route } from "react-router-dom";
import GestionHome from "./GestionHome";
import GestionLivres from "./GestionLivres";
import GestionUsers from "./GestionUsers";
import { Navigate } from "react-router-dom";
import NewBook from "./NewBook";
import NewUser from "./NewUser";

const Gestion = ({userState, isGranted}) => {
    // const [keyword, setKeyword] = useState('');
    const {userData} = userState;
    const {userConnected} = userState;

    const headers = {
        "Content-Type": 'application/json',
        "Authorization": 'Bearer ' + userData.token
    };

    if(!userConnected) return <Navigate to='/login'/>

    if(!isGranted('ROLE_ADMIN')) return <Navigate to='/'/>

    return (
        <Routes>
            <Route path="/" element={<GestionHome />} />
            <Route path="/livres" element={<GestionLivres headers={headers}/>}/>
            <Route path="/users" element={<GestionUsers headers={headers}/>}/>
            <Route path="/livre/new" element={<NewBook headers={headers}/>}/>
            <Route path="/user/new" element={<NewUser headers={headers}/>}/>
        </Routes>
    );
};

export default Gestion;