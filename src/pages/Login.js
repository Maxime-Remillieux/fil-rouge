import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Login = ({ login }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const[error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        let data= { 
            "email": email,
            "password": password
        }
        console.log(data);
        try{
            await login(data)
            navigate("/");
        }catch(e){
            console.log(e.message);
            console.log(e.response.status);
            if(e.response.status === 401){
                setError('Identifiants erronés');
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