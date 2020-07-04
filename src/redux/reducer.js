import post from '../data/posts';
import {combineReducers} from 'redux';


function comments(state={},action){
    //console.log('landed on comments reducer')
    switch(action.type){
        case 'ADD_COMMENT':
            //console.log(action.postId);
            if(!state[action.postId]){
                return {...state,[action.postId]: [action.comment]}
            }else{
                return {...state,[action.postId]:[...state[action.postId],action.comment]}
            }

        default:
            return state
    }
    return state;
}

function posts(state=post,action){
    //Removephoto action
    //console.log('landed on post reducer');
   // console.log(action.index);
    switch(action.type){
        case 'REMOVE_POST':
            return state.filter(item=>item.id !== action.index);
        case 'ADD_POST':
            return [...state,action.post];
        default:
            return state
    }
    return state
}

const rootReducer = combineReducers({posts,comments});

export default rootReducer