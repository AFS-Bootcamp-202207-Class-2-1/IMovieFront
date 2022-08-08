import api from "./api"

export const userRegister = (user) => {
    return api.post("/users/register", user)
};
