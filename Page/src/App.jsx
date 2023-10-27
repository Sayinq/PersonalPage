import React, { useEffect, useState } from 'react';
import Home from './page/Home';
import PageLoader from './components/PageLoader';

function App() {

  return (
    <>
      <PageLoader />
      <Home />
    </>
  )
}

export default App
