import axios from "axios";

export class FriendService{
    newFriend = async(userId, friendId)=>{
        const response = await axios.post('/user/createFriend',{id1:userId, id2:friendId})
        return response;
    }

    getFriends = async(userId) => {
        const response = await axios.get(`http://192.168.0.103:3333/user/friends/${userId}`)
        return response.data;
    }
}