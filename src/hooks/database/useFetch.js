import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const useFetch = (initialData)=>{
    const navigate = useNavigate();
    const [requestData, updateRequestData] = useState(initialData);
    const [state, setState] = useState({
        loading: true,
        data: [],
    })

    useEffect(()=>{
        (async function () {
            console.log(requestData.url);
            try{
                const result = await axios.post(requestData.url, requestData.data, {headers: requestData.headers})
                if(result.status === 200){
                    setState({
                        data: result.data,
                        loading: false
                    });
                }
            }catch(error){
                setState(s=>({...s, loading: false}));
                console.log(error.response.data.message);
                if(error.response.data.message === 'Expired JWT Token'){
                    navigate('/logout');
                }
            }
        })()
    }, [requestData])

    return [state.loading, state.data, updateRequestData]
}

export default useFetch