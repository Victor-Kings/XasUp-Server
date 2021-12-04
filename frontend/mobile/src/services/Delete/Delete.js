import axios from "axios";

export class DeleteFromGroup{
    deleteFromGroup = async(id, groupName)=>{
        console.log("$$$$$$$", id, groupName)
        const response = await axios.delete(`http://192.168.5.108:3333/group/findUserInGroup/${id}/${groupName}`)
        console.log("AQUI DENTRO responde", response,response.data);
        return response.data;
    }

    deleteFriend = async(id, id2) => {
        const response = await axios.delete(`http://192.168.5.108:3333/user/friends/${id}/${id2}`)
        return response.data;
    }
}