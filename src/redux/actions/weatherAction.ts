import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, WeatherError, GET_WEATHER, SET_LOADING, SET_ERROR } from '../types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56ed7c5bce3709413816ba00e4a5cee3`);
            
        if(!res.ok) {
            const resData: WeatherError = await res.json();
            console.log(resData)
            throw new Error(resData.message);
        }
        console.log(res)
        const resData: WeatherData = await res.json();
        dispatch({
            type: GET_WEATHER,
            payload: resData
        });
    }catch(err: any) {
        
         dispatch({
            type: SET_ERROR,
            payload: err.message
         });
    }
    }
} 

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}