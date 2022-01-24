import axios from "axios";


const New = ({pageData, form: Form}) => {
    const {entity} = pageData;
    const {headers} = pageData;
    const url = 'http://localhost:8000/api/' + entity +'/new';
    const onSubmit = (data) =>{
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