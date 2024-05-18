import axios from "axios";
import conf from "../conf/conf";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
    Authorization: "bearer " + conf.accessToken
}


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        })

        return data;

    } catch (err) {
        console.log("this error occured in utils api.js", err)
    }
}