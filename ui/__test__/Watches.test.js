import React from 'react';
import ReactDOM from 'react-dom';
import Watches from '../pages/Watches';

it('renders Watches without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Watches />, div);
});
