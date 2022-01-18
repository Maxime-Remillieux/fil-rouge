import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import UserRow from "../../components/UserRow";
import InterfaceUsers from "../../components/interface/InterfaceUsers";

const GestionUsers = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () =>{
        axios
        .post("http://localhost:8000/api/get/users", {})
        .then((res) => setData(res.data));
    }
    return (
        <div className="gestion">
            <Header />
            <InterfaceUsers />
            <ul className="list">
                {data.map((user)=> (
                    <UserRow user={user} key={user.code}/>
                ))}
            </ul>
        </div>
    );
};

export default GestionUsers;