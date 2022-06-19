import {ADDPOINTMAP } from './types'

const initialState = {
    points: []
}

export const pointReducer = (state = initialState, action) => {
    console.log ('point yx >', action);
    switch (action.type){
        case ADDPOINTMAP:
            return {
                ...state,
                points: action
            }

        default: return state;
    }
}