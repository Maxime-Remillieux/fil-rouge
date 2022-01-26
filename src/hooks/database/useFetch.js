import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useRequestData = (url, headers) => {
    const [requestData, setRequestData] = useState({ url: url, headers: headers, data: {} });
    const [keyword, setKeyword] = useState('');

    const updateRequestData = useCallback(() => {
        let categories = document.querySelectorAll('.categ');
        let dataObj = {};
        if (keyword) {
            categories.forEach(cat => {
                if (cat.checked)
                    dataObj[cat.value] = keyword;
            });
        }
        setRequestData(rd => ({ ...rd, data: dataObj }));
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
        error: ''
    })
    const [setKeyword, requestData, updateRequestData] = useRequestData(url, headers);

    const fetchApi = useCallback(async () => {
        setState(s => ({ ...s, loading: true }));

        try {
            const result = await axios.post(requestData.url, requestData.data, { headers: requestData.headers });
            if (result.status === 200) {
                setState(s => ({
                    data: result.data,
                    loading: false,
                    error: ''
                }));
            }
        } catch (error) {
            console.log(error.response.data.message);
            setState(s => ({
                ...s,
                loading: false,
                error: error.response.data.message
            }));
        }
    }, [requestData])

    useEffect(()=>{
        fetchApi();
    }, [fetchApi])

    return [state.loading, state.data, state.error, fetchApi, setKeyword, updateRequestData];
}

export default useFetch