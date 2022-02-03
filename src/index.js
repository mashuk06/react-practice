import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { latitude: 0}

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude,  errorMessage: '' })
            },
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    render() {

        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div> Latitude is: {this.state.latitude} </div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
