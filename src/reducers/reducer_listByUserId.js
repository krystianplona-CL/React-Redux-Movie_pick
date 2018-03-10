import axios from 'axios'

const listByUserId = (state = [], action) => {
    switch(action.type){
        case 'GET_LIST_BY_USER_ID': 
            return {
                ...state,
                ...action.payload.data
            }
        default: 
            return state
    }
}

export default listByUserId