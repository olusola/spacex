import { RootState } from "../helper/constants"

const init: RootState = {
    rockets: [],
    dragons:[]
}

const rootReducer = ((state: RootState= init, action:any):any => {
    switch (action.type) {
        case 'SET_ROCKETS_DATA':
            return {
                rockets: action.pay
            }
        case 'SET_DRAGONS_DATA':
            return {
                dragons: action.pay
            }
        default:
            return state
    }
})

export default rootReducer