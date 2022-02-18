import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../redux/actions/alertAction';
import { getWeather, setLoading } from '../redux/actions/weatherAction';


interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
   

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('Lütfen Şehir Giriniz'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }

    

    return(
        <div className="hero has-text-centered search">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form className='py-5' onSubmit={submitHandler}>
                        <input
                         type="text"
                         className='input has-text-centered mb-2'
                         placeholder='Şehir Giriniz'
                         style={{maxWidth: 400}}
                         value={city}
                         onChange={changeHandler} 
                        />
                        <button className="button is-warning is-fullwidth" style={{maxWidth: 400,margin:'0 auto'}}>Ara</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;