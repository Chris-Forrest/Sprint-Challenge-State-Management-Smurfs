import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, CREATE_SMURF } from "../actions";


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
        case CREATE_SMURF:
            console.log(action.payload)
            return {
                ...state,
                smurfs:[...state.smurfs,action.payload]
            }
        default:
            return state
    }
};