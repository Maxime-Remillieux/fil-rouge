import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../App";


const New = ({entity, form: Form}) => {
    const context = useContext(AppContext);
    const url = 'http://localhost:8000/api/' + entity +'/new';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + context.userState.userData.token
    }

    const onSubmit = (data) =>{
        // var img = document.getElementById('img');
        // const formData = new FormData();
        // formData.append('data', data);


        // if(img != null){
        //     formData.append('file', img.files[0]);
        // }
        console.log(data);
        axios
        .post(url, data, {headers: headers})
        .then(res=>{
            console.log(res.data)
            if(res.data.status === "OK"){
                alert('Ajouté avec succès');
            }else{
                console.log(res.data.message);
            }
        })
        .catch(e=>{
            console.log(e.message);
        });
    }
    return <Form onSubmit={onSubmit}/>
};

export default New;