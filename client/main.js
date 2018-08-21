import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html';
import './main.css';

import App from '../imports/client/App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('root'));
});

