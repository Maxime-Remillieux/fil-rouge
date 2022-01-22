import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


// import Header from "../components/Header";
async function loginUser(credentials){
    return axios
    .post('http://localhost:8000/api/login_check', credentials)
    .then(res => res.data);
}

const Login = ({ setToken, setUserData }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        let data= {
            "email": email,
            "password": password
        }
        console.log(data);
        const resp = await loginUser(data);
        console.log(resp);
        localStorage.setItem("token", resp.token);
        localStorage.setItem('user', JSON.stringify(resp.data));
        setToken(resp.token);
        setUserData(resp.data);
        navigate("/");
    }

    return (
        <div className="login">
            <div className="logFieldset">
                <h1>CONNEXION</h1>
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