import React from 'react';
import MainPage from '../main-page/main-page';

const Settings = {
  'PlACES_COUNT': '5',
};


function App() {
  return (
    <MainPage
      placesCount={Settings.PlACES_COUNT}
    />
  );
}

export default App;
