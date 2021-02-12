import React from 'react';
import ReactDOM from 'react-dom';
import Phones from '../pages/Phones';

it('renders Phones without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Phones />, div);
});
