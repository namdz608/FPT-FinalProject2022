import axios from "axios";

const handleLoginApi=(email,password) => {
    return axios.post('http://localhost:8000/api/login',{email,password})
}

export{handleLoginApi}