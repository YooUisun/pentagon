import React from 'react';


import './App.css';
import DoughnutChart from './pages/record/components/DoughnutChart';
import LineChart from './pages/record/components/LineChart';
import BarChart from './pages/record/components/BarChart';
import RadarChart from './pages/record/components/RadarChart';



function App() {
  return (

    <>
      <DoughnutChart />
      <LineChart />
      <BarChart />
      <RadarChart />
    </>

  );
}

export default App;
