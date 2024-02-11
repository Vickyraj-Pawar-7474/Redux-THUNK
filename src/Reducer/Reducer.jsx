import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../Action/Action";

const initialState = {
    news: [],
    loading: false,
    error: null
}
const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
export default newsReducer;