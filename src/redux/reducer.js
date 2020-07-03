import posts from '../data/posts';


const postReducer = function post(state=posts,action){
    //Removephoto action
    console.log(action.index);
    switch(action.type){
        case 'REMOVE_POST':
            return state.filter(item=>item.id !== action.index);
        default:
            return state
    }
    return state
}

export default postReducer