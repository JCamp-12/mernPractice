import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>
    <label class="label" for="name"> What yo Name</label>
    <input id="name" type="text"/>
    <button>test</button>
  </div>
};

ReactDOM.render(<App />, document.querySelector('#root'));