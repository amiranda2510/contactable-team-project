const getToken = () => sessionStorage.getItem("token");
const setToken = (token) => sessionStorage.getItem("token", token);
const removeToken = () => sessionStorage.removeItem("token");

const BASE_URL = "http://localhost:3000";

export { getToken, setToken, removeToken, BASE_URL };
