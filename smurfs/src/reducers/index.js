import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from "../actions";


/****************set up initial state  ******************************/
const initialState = {
    isFetching: false,
    smurfs:[],
    error:""
}


/*****************set up reducer  ********************************/
export const smurfReducer = ( state = initialState, action ) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                isFetching: true
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                error: " error fetching smurfs :( !"
            }
        default:
            return state
    }
};