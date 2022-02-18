import { FC } from "react";
import { WeatherData } from "../redux/types";

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({ data }) => {
    const celcius = (data.main.temp - 273.15).toFixed(2);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title has-text-centered" style={{ marginBottom: 50 }}>{data.name} - {data.sys.country}</h1>
                <div className="level" style={{ alignItems: 'flex-start' }}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.weather[0].description}</p>
                            <p className="title"><img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" /></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Sıcaklık</p>
                            <div className="title">
                                <p>{celcius}<sup>&#8451;</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Nem</p>
                            <p className="title">{data.main.humidity}</p>
                        </div>
                    </div>   
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Basınç</p>
                            <p className="title">{data.main.pressure}</p>
                        </div>
                    </div>   
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Rüzgar</p>
                            <p className="title">{data.wind.speed} m/s</p>
                        </div>
                    </div>   
                </div>
            </div>
        </section>
    )
}


export default Weather;