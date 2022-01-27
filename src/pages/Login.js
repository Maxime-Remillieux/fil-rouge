import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = ({ login, error, setError }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // useEffect(()=>{
    //     return () =>{
    //         console.log('page change');
    //         setError('');
    //     } 
    // }, [setError])

    const handleSubmit = async e => {
        e.preventDefault();
        let data= { 
            "email": email,
            "password": password
        }
        console.log(data);
        try{
            await login(data);
            setError('');
            navigate("/");
        }catch(e){
            console.log(e.message);
            if(e.response.status === 401){
                setError('Email ou mot de passe erronés');
            }else{
                setError('Une erreur s\'est produite, veuillez réessayer')
            }
        }

    }

    return (
        <div className="login">
            <div className="logFieldset">
                <h1>CONNEXION</h1>
                { error &&
                    <span className="error">{error}</span>
                }
                <form className="loginForm" onSubmit={handleSubmit}>
                    <span><label htmlFor="email">Email</label><input id="email" type="text" onChange={e => setEmail(e.target.value)}/></span>
                    <span><label htmlFor="password">Password</label><input id="password" type="password" onChange={e => setPassword(e.target.value)} /></span>
                    <button type="submit">Valider</button>
                </form>            
            </div>
        </div>
    );
};

export default Login;