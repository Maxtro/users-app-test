import Axios from 'axios'

const instance = Axios.create({
    baseURL: 'https://reqres.in/api/users',
})

export const Api = {
    loadUsers(page){
        return instance.get(`?page=${page}`)
    },
    loadCurrentUser(id){
        return instance.get(`${id}`)
    },
    updateUser(id, data){
        instance.put(`${id}`, data).then(res => console.log(res))
    },
    deleteUser(id){
        instance.delete(`${id}`).then(res => console.log(res))
    },
    addUser(data){
        instance.post(null, data).then(res => console.log(res))
    },
}