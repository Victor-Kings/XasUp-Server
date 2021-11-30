import axios from "axios";
import { apiBackend } from "../../config/api"

export class UserService{
    newUser = async(nameUser) => {
        const response = await axios.post('http://192.168.0.103:3333/user', { name: nameUser })
        return response;
    }
    verifyUser = async(userId) => {
        console.log("CHEGOU",userId);
        console.log("XXXX", apiBackend)
    
        const response = await axios.get(`http://192.168.0.103:3333/user/${userId}`)
        console.log("reponse",response);
        return response.data;   
    }
}