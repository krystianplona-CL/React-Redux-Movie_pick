import axios from 'axios'
const ROOT_URL = `https://movie-picker-ff027.firebaseio.com/`;

const getListByUserId = (user) => {
    const request = axios.get(ROOT_URL+user+'/.json')
    return {
        type: 'GET_LIST_BY_USER_ID',
        payload: request
    }
}

export default getListByUserId;