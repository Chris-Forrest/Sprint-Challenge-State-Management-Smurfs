

/****************set up initial state  ******************************/
const initialState = {
    isFetching: false,
    smurfs:[],
    error:""
}


/*****************set up reducer  ********************************/
export const smurfReducer = ( state = initialState, action ) => {
    switch(action.type){
        default:
            return state
    }
};