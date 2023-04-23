import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': "2e997163-4a8d-43b8-9d46-9baff1d4766f"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(res => {
            return res.data
        })
    }
}

export const followAPI = {
     follow(id: number) {

        return instance.post(`follow/${id}`)
    },
     unfollow (id: number){
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI = {
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    }
}
