import api from "../api/axios";

export const getRoutes = () => {
    return api.get("/route-masters");
};

export const createRoute = (data) => {
    return api.post("/route-masters", data);
};