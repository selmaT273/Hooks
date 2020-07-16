import { useState, useEffect } from 'react';
// import useAuth from '../contexts/auth';

// const [isLoading, data] = useFetch(url)

function useFetch(url){
    // const { user } = useAuth();
    const [isLoading, setLoading] = useState(false);

    const [data, setData] = useState(null);

    async function doFetch(url) {
        let response = await fetch(url);
        let json = await response.json();
        setData(json);
    }

    useEffect(() => {
        async function doInitialFetch() {
            setLoading(true);
            await doFetch(url);
            setLoading(false);
        }
        doInitialFetch(url);
    }, [url]);

    const refresh = () => {
      doFetch(url)
    }

    return [
        isLoading,
        data,
        refresh,
    ];
}

export default useFetch;