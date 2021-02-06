const getToken = () => sessionStorage.getItem("token");
const setToken = (token) => sessionStorage.setItem("token", token);
const removeToken = () => sessionStorage.removeItem("token");

const BASE_URL = "http://localhost:3000";
const STORE = {
  contacts: [],
};

export { getToken, setToken, removeToken, BASE_URL, STORE };
