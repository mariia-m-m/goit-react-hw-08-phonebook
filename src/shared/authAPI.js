import axios from "axios";

const authInstatance = axios.create({
    baseURL:"https://connections-api.herokuapp.com"
})

export const signup = (data) => {
    return authInstatance.post("/users/signup",data)
}