import { useEffect, useState } from 'react';

const useFetch = (dependencyList = [], promise,) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('idle');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setStatus('pending');
            const res = await promise();
            setData(res.data);
            setStatus('success');
        } catch (err) {
            setError(err);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencyList);

    return {
        data,
        loading,
        status,
        error,
    };
};

export default useFetch;
