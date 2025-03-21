import axios from 'axios'
const API_URL='http://localhost:5000/api/users'
//Register user
const register=async(user:any) => {

    const response=await axios.post(API_URL,user)
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data))
    }
    return response.data
}

const authService={
    register
}
export default authService;
