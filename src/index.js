import React from 'react';
import ReactDOM from 'react-dom';

function buttonText() {
    return "Click Me !";
}

const App = () => {

    {/* binding variables */ }

    const buttonTextUnused = "Click Me";

    {/* defining objects */}
    const myObj = { text: "Click Me" };
    {/* can use object as myObj.text */}

    return (
        <div>
            <label htmlFor="email">Email </label>
            {/* class defination className */}
            <input type="text" className="form-control" id="email"></input>
            {/* inline styles in JSX & binding variables */}
            <button style={{ backgroundColor: 'red',color: 'white' }}>{ buttonText() }</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
