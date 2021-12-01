import axios from "axios";

export class GroupService{
    newGroup= async(userId, friendId)=>{
        const response = await axios.post('/user/createFriend',{id1:userId, id2:friendId})
        return response;
    }

    getGroups = async(userId) => {
        const response = await axios.get(`http://192.168.0.103:3333/group/findGroup/${userId}`)
        return response.data;
    }
}