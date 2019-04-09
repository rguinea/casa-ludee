import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.css';
import registerServiceWorker from './registerServiceWorker';
import App from './views/App/App';

ReactDOM.hydrate(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
