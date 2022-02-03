import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Logout =  () => {
    const navigate = useNavigate();
    const context = useContext(AppContext);

    useEffect(()=>{
        context.logout();
        navigate('/');     
    }, [])

    return null;
};

export default Logout;