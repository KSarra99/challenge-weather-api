import {WEATHER_FAIL,WEATHER_LOAD,GET_WEATHER_SUCCESS}from '../constants/actionTypes'

const initialState={
    data:[],
    isLoading:false,
    errors:null
    
}
export const reduccer=(state=initialState,{type,payload})=>{

switch (type) {
    case WEATHER_LOAD :
        return {...state,isLoading:true};
        
        case GET_WEATHER_SUCCESS :
            return {...state,data:payload,isLoading:false};
         
            case WEATHER_FAIL :
                return {...state,errors:payload,isLoading:false};

    default:
         return state
}


}