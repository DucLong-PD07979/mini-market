import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://api.escuelajs.co/api/v1/',
});

export default instance

const get = async (path,option) => {
    const res = await instance.get(path, { ...option });
    return res;
}

export { get };

