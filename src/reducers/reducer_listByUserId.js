import axios from 'axios'

const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/.json`;

const listByUserId = (state = {}, action) => {
    const request = axios.get(ROOT_URL).then(data=>{
        if(data.status === 200){
            return data.data
        }
        else{
            return state
        }
    })
    return request
}

export default listByUserId