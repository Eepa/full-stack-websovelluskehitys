import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const {counter} = props;
  return (
      <div>{counter.value}</div>
  )
};

const counter = {
    value: 1
};

const renderView = () => {
    ReactDOM.render(
        <App counter={counter}/>, document.getElementById('root')
    );
};

setInterval(() => {
    renderView();
    counter.value += 1;
}, 1000);
