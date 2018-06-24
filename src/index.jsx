import React from 'react';
import ReactDOM from 'react-dom';

import DemoPage from '@/js/components/DemoPage';
import '@/styles/main.scss';


const mountElement = document.getElementById('content');

if (mountElement) {
  ReactDOM.render(<DemoPage />, mountElement);
}
