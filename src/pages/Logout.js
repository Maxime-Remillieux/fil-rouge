import { Navigate } from "react-router-dom";

const Logout = ({setToken, setUserData}) => {
    const logoutUser = ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(undefined);
        setUserData(undefined);
    }
    logoutUser();
    // navigate('/home');
    return(
        <Navigate to='/'/>
    )
};

export default Logout;