import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //transform a dataPoint object into a number 
  const totalMaximum = Math.max(...dataPointValues); //receives the 12 values (Jan - Dec) from the array with the spread operator 

  return <div className="chart">
    {props.dataPoints.map(dataPoint => (
      <ChartBar 
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={totalMaximum} 
        label={dataPoint.label} 
      />
    ))}
  </div>
};

export default Chart; 