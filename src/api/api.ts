import axios from "axios";
import {FormDataType} from "../../src/components/Login/Login";



const instance = axios.create({  // create instance
    withCredentials: true,                     // параметр который позволяет отправлять нам авторизированные запросы
    baseURL: 'https://social-network.samuraijs.com/api/1.0/', // базовый урл
    headers: {'API-KEY': "2e997163-4a8d-43b8-9d46-9baff1d4766f"} // наш апи кей
})

export const usersAPI = { // создаем юзер апи
    getUsers(currentPage: number, pageSize: number) { // метод принимающий текущую страниц и ее размер
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(res => { //возвращаем дату запрашиваемое страницы
            return res.data
        })
    }
}

export const followAPI = { // возврщаем апи пользователя на которого хотим подписаться/отписаться
     follow(id: number) {
        return instance.post(`follow/${id}`)
    },
     unfollow (id: number){
        return instance.delete(`follow/${id}`)
    }
}

export const profileAPI = { // получаем апи профиля
    getProfile(userId:string){
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId:string){
        return instance.get(`profile/status/${userId}`)
    },

    updateStatus(status:string){
        return instance.put(`profile/status`,{status:status})
    }
}


export const authAPI = {
    getAuthUser(){
       return instance.get('auth/me')
    },
    login(data:FormDataType){
        return instance.post('auth/login',{email:data.login,password:data.password,rememberMe:data.rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }
}
