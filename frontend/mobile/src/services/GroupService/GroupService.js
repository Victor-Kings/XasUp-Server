import axios from "axios";

export class GroupService{
    newGroup = async(groupname, listId) => {
        const response = await axios.post('http://192.168.5.108:3333/group/newGroup',{groupname: groupname, id_users: listId})
        return response.data;
    }

    getGroups = async(userId) => {
        const response = await axios.get(`http://192.168.5.108:3333/group/findGroup/${userId}`)
        return response.data;
    }
}