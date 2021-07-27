import React from 'react'

import './scss/_App.scss';


import Header from "./mainComponents/Headre";
import MainBenefits from "./mainComponents/MainBenefits";
import MainHowFyloWorks from "./mainComponents/MainHowFyloWorks";
import Navigation from "./mainComponents/Navigation";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <MainBenefits/>
        <MainHowFyloWorks/>



    </div>
  );
}

export default App;
