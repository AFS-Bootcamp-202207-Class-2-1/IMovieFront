import api from "./api"

export const userLogin = (user) => {
    return api.post("/users/login", user)
};


export const getSeats = () => {
    return api.get("/seats")
}