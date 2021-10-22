import axios from "axios";

const baseURL = "https://reqres.in/api/users"

const CREATE = async ({user})=>{
  return await axios.post(`${baseURL}`,user);
}

const FETCH_ALL = async ()=>{
    return await axios.get(`${baseURL}`);
}

export {CREATE,FETCH_ALL};

