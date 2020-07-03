import posts from '../data/posts';


const postReducer = function post(state=posts,action){

    //Removephoto action
    console.log(action.index);
    console.log(action);
    return state
}

export default postReducer