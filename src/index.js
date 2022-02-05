import React from "react";
import ReactDOM from "react-dom";
import HamisphereDisplay from "./components/HamisphereDisplay"

class App extends React.Component {

    state = { latitude: 0 ,errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude, errorMessage: '' })
            },
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    render() {

        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div> <HamisphereDisplay latitude={this.state.latitude} /> </div>
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
