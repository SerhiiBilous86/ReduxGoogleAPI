import {HISTPOINTMAP } from './types'

const initialState = {
    history: []
}

export const historyReducer = (state = initialState, action) => {
    console.log ('historyReducer >', action);
    switch (action.type){
        case HISTPOINTMAP:
            return {
                ...state,
                history: [...state.history, action.data] 
            }

        default: return state;
    }
}