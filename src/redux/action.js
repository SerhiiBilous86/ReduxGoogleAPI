import { ADDPOINTMAP, HISTPOINTMAP } from './types'

export function incrementPoint(lat, lng) {
    return {
        type: ADDPOINTMAP,
        locate: {lat, lng}
    }
}

export function historyCreate(id, locate, x, y , date) {
    return {
        type: HISTPOINTMAP,
        data: {id, locate, x, y, date}
    }
}