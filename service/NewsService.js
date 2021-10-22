import http from "./http-common";

const GET_HEADLINES = (pageNo) => {
    return  http.get(`/top-headlines?apiKey=${process.env.API_KEY}&language=en&pageSize=40&page=${pageNo}`);
};
const GET_ENTERTAINMENT_NEWZ = () => {
    return  http.get(`/everything?q=entertainment&apiKey=${process.env.API_KEY}`);
};

const search = (searchValue) => {
    return  http.get(`/everything?q=${searchValue}&apiKey=${process.env.API_KEY}`);
};  



export default {
    GET_HEADLINES,
    search,
    GET_ENTERTAINMENT_NEWZ
};


