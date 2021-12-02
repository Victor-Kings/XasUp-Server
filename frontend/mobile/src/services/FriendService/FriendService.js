import axios from "axios";

export class FriendService{
    newFriend = async(userId, friendId)=>{
        const response = await axios.post('http://192.168.0.103:3333/user/createFriend',{id1:userId, id2:friendId})
        console.log("AQUI DENTRO responde", response,response.data);
        return response.data;
    }

    getFriends = async(userId) => {
        const response = await axios.get(`http://192.168.0.103:3333/user/friends/${userId}`)
        return response.data;
    }
}