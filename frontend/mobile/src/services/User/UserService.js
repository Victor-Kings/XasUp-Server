import axios from "axios";
import { apiBackend } from "../../config/api"

export class UserService{
    newUser = async(nameUser) => {
        const response = await axios.post('http://192.168.5.108:3333/user', { name: nameUser })
        console.log("CHEGOU NO NEW USER", response);
        return response.data;
    }
    verifyUser = async(userId) => {
        const response = await axios.get(`http://192.168.5.108:3333/user/${userId}`)
        return response.data;   
    }
}