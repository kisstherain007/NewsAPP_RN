/**
 * Created by zhoubo on 16/7/11.
 */

const initialState = {
    word: 'first'
};

export default function request(state = initialState, action){

    switch(action.type){
        case 'one':
            return Object.assign({}, state, {word: action.word});
        default:
            return state;
    }
}