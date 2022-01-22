import axios from "axios";
import { useEffect, useState } from "react";
import UserRow from "../../components/UserRow";
import Interface from "../../components/interface/Interface";
import { Navigate } from "react-router-dom";
import { BarWave } from "react-cssfx-loading/lib";
import { BouncingBalls } from "react-cssfx-loading";


const searchFields = {
    "u.code": "Identifiant",
    "u.name": "Nom",
    "u.email": "Email",
};
const url = "http://localhost:8000/api/user/";


async function fetchApi(data, headers){
    return axios
    .post(url, data, {headers: headers})
    .then(res => res.data);
}
const links = [
    {text: 'Nouvel utilisateur', path: '/gestion/users/'}
];
const GestionUsers = (props) => {
    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [loading, setLoading] = useState(true);

    const {token} = props;
    const {userData} = props;

    const headers = {
        "Content-Type": 'application/json',
        "Authorization": 'Bearer ' + token
    };
    const getUsers = () =>{
        let categories = document.querySelectorAll('.categ');
        let dataObj = {};
        if(keyword){
            categories.forEach(cat => {
                if(cat.checked)
                    dataObj[cat.value] = keyword;
            });
        }
        console.log(dataObj);
        return fetchApi(dataObj, headers);
    }

    useEffect(() => {
        let isSubscribed = true;
        
        getUsers().then(res =>{
            console.log(res);
            if(isSubscribed){
                setUsers(res);
                setLoading(false);
            }
        });

        return () => isSubscribed = false;
    }, []);

    if(userData){
        if(!userData.roles.includes('ROLE_ADMIN')){
            return <Navigate to='/'/>
        }
    }else{
        return <Navigate to='/login'/>
    }

    return (
        <div className="gestion">
            <Interface links={links} searchFields={searchFields} setKeyword={setKeyword} getEntityData={getUsers} page="users"/>
            { loading &&
            <div className="loading">
                {/* <img src="/img/Spinner-2.gif" alt="loading"  width="50" /> */}
                <BouncingBalls color='#516079' size="42px"/>
            </div>
            }
            { !loading &&
            <ul className="list">
                {users.map((user)=> (
                    <UserRow user={user} key={user.code}/>
                ))}
            </ul>
            }

        </div>
    );
};

export default GestionUsers;