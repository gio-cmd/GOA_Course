import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import ChildComponent from './ChildComponent'

const App = () => (
  <ErrorBoundary>
    <ChildComponent />
  </ErrorBoundary>
);

export default App;
