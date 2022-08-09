import api from "./api"

export const getSessions = (id) => {
    return api.get("/session/1")
};

export const getMovieDetail = (id) => {
    return api.get("/detail/1")
};