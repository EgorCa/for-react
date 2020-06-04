import React from "react";

class Form extends React.Component {
    render()
    {
        return (
            <form onSubmit={this.props.WM}>
                <input type="text" name="city" placeholder="Enter your city"/>
                <button>Получить погоду</button>
            </form>
        );
    }
}

export default Form;