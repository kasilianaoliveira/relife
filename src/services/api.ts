import axios from "axios";
import { getUserLocalStorage } from "../context/util";

export const api = axios.create({
	baseURL: " https://relife-web-service.onrender.com/"

});

// 	baseURL: " https://relife-web-service.onrender.com/"
