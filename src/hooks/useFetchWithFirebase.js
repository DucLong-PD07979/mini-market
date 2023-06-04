import { useEffect, useState } from 'react';
import firebaseServices from '../services/firebase/firebase.services';

function useFetchWithFirebase(dependencyList = [], promise) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState('idle');
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                setStatus('pending');
                await promise.bind(firebaseServices.read_Data_To_Firebase)(setData);
                setStatus('success');
            } catch (err) {
                setError(err);
                setStatus('error');
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencyList);

    return { data, loading, status, error };
}
export default useFetchWithFirebase;
