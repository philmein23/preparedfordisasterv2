import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

function registerServiceWorker() {
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register('sw.js')
      .then(registration => {
        console.log(registration, 'works');
      })
      .catch(reason => {
        console.error(reason);
      });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

registerServiceWorker();
