import React from 'react'

import './scss/_App.scss';


import Header from "./mainComponents/Headre";
import MainBenefits from "./mainComponents/MainBenefits";
import MainHowFyloWorks from "./mainComponents/MainHowFyloWorks";
import Navigation from "./mainComponents/Navigation";
import MainOpinions from "./mainComponents/MainOpinions"
import MainAccess from "./mainComponents/MainAccess";


function App() {
  return (
    <div className="App">
        <Navigation/>
        <Header/>
        <MainBenefits/>
        <MainHowFyloWorks/>
        <MainOpinions/>
        <MainAccess/>



    </div>
  );
}

export default App;
