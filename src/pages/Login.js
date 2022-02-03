import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BouncingBalls } from 'react-cssfx-loading';
import { AppContext } from "../App";


const Login = () => {
    const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const context = useContext(AppContext);
    const {login} = context;
    const {setError} = context;
    const {error} = context;

    useEffect(()=>{
        return () =>{
            setError('');
        } 
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();

        if(!mailRegex.test(email)){
            setError('Email non valide');
            return;
        }

        if(!password){
            setError('Veuillez indiquez votre mot de passe');
            return;
        }

        let data= { 
            "email": email,
            "password": password
        }
        console.log(data);
        setLoading(true);

        try{
            await login(data);
            setError('');
            setLoading(false);
            navigate("/");
        }catch(e){
            console.log(e.message);
            setLoading(false);
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
                    <button type="submit">{loading ? <div className="loading"><BouncingBalls color='#516079' size="13px"/></div> : 'Valider' }</button>
                </form>            
            </div>
        </div>
    );
};

export default Login;