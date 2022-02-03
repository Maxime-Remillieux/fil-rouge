import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useRequestData = () => {
    const [requestData, setRequestData] = useState({});
    const [keyword, setKeyword] = useState('');

    const updateRequestData = useCallback(async () => {
        console.log('update data');
        let categories = document.querySelectorAll('.categ');
        let dataObj = {};
        if (keyword) {
            categories.forEach(cat => {
                if (cat.checked)
                    dataObj[cat.value] = keyword;
            });
        }
        setRequestData(dataObj);
        console.log(requestData);
    }, [keyword])

    useEffect(() => {
        updateRequestData();
    }, [updateRequestData])

    return [setKeyword, requestData, updateRequestData]
}

const useFetch = (url, headers) => {
    const [state, setState] = useState({
        loading: true,
        data: [],
        fetchError: ''
    })
    const [setKeyword, requestData, updateRequestData] = useRequestData();

    const fetchApi = useCallback(async () => {
        setState(s => ({ ...s, loading: true }));

        console.log(requestData);
        try {
            const result = await axios.post(url, requestData, { headers: headers });
            if (result.status === 200) {
                console.log(result.data);
                setState(s => ({
                    data: result.data,
                    loading: false,
                    fetchError: ''
                }));
            }
        } catch (error) {
            console.log(error.response.data.message);
            setState(s => ({
                ...s,
                loading: false,
                fetchError: error.response.data.message
            }));
        }
    }, [])

    // fetchApi();

    useEffect(()=>{
        fetchApi();
    }, [])

    return [state.loading, state.data, state.fetchError, fetchApi, setKeyword, updateRequestData];
}

export default useFetch