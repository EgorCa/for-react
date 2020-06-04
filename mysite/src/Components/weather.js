import React from "react";

class Weather extends React.Component {
    render()
    {
        return (
            <div>
            { this.props.city &&
            <div className="Weatherdiv">
                  <p>Ваше местоположение: {this.props.country} , {this.props.city}</p>
                  <p>Ожидается температура: {this.props.temp} град. Цельсия</p>
                  <p>Рассчетное давление: {this.props.pressure} мм.рт.столба</p>
            </div>
            }
            <p>{this.props.error}</p>
            </div>
        );
    }
}

export default Weather;