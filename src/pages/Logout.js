import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout =  ({ logout }) => {
    const navigate = useNavigate();

    useEffect(()=>{
        logout();
        navigate('/');     
    }, [logout, navigate])

    return null;
};

export default Logout;