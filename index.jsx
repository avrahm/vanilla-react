import React from 'react';
import ReactDom from 'react-dom';

const HelloComponent = () => {
    return <h1>Hello World vanilla React</h1>
}

ReactDOM.render(<HelloComponent />, document.getElementById('root')); 