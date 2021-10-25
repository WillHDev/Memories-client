
const reducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            //return state
            return [ ...state, action.payload ]
        default: 
             return state
            
  
    }
    
}

export default reducer;

//      default:
//break;