import {createStore} from 'redux'


const reducuer = (state = {counter : 0},action) => {
    switch(action.type) {
        case 'INC' : 
        return {counter : state.counter + 1}  
        case 'DEC' : 
        return {counter : state.counter - 1}
        case 'ADD' : 
        return state + action.payload
        default : return state
    }
}

const store = createStore(reducuer)
export default store