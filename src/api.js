import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: { "Content-Type": "application/json" },
});

export const fetchForms = () => API.get("forms/");
export const submitForm = (data) => API.post("submissions/", data);
