import React from 'react';
import {render} from 'react-dom';
import Spinner from './Spinner.jsx';

class App extends React.Component {
  render () {
    return( <div>
    	<h1> Spinner</h1>
    	<Spinner/>
    </div>
  )}
}

class Empty extends React.Component {
  render () { return false; }
}

window.renderEmpty = function(element) {
  render(<Empty/>, document.getElementById('app'));
}
window.renderApp = function(element) {
  render(<App/>, document.getElementById('app'));
}
renderApp();

