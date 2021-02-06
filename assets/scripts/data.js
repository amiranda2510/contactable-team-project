const getToken = () => sessionStorage.getItem("token");
const setToken = (token) => sessionStorage.setItem("token", token);
const removeToken = () => sessionStorage.removeItem("token");

const BASE_URL = "https://morning-plateau-85732.herokuapp.com";
const STORE = {
  contacts: [],
};

export { getToken, setToken, removeToken, BASE_URL, STORE };
