import api from "./api"

export const userLogin = (user) => {
    return api.post("/users/login", user)
};