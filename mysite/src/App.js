import React from "react";
import Info from './Components/info';
import Form from './Components/form';
import Weather from './Components/weather';

const API_KEY = "c51769046e2fb04bedda09d65a8a3a32";

class MyApp extends React.Component {

    //Объект, куда мы будем сохранять полученные данные
    state = {
        temp: undefined,//
        city: undefined,//
        country: undefined,//
        pressure: undefined,//
        error: undefined
    }

    //Получение данных о погоде
    gettingWeather = async (event) => {
        event.preventDefault();//уничтожаем перезагрузку страницы
        const city = event.target.elements.city.value;//Получаем название города

        if(city){
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);//метод прочтения ссылки
        const data = await api_url.json();

        //Данные
        this.setState(
        {
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            error: undefined
        });
        }
        else
        {
        this.setState(
        {
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        error: "Ошибка: Введите название города"
        });
        }
        }

    render(){
    return(
    <div className="Maindiv">
        <Info />
        <Form WM={this.gettingWeather} />
        <Weather
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            error={this.state.error}
        />
    </div>
    );
    }
}

export default MyApp;