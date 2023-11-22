import React from 'react';
import './ChartBar.css';

const ChartBar = ({ data }) => {

  return (

    <div className="chart-bar">

      {data.map((chartValue, index) => (
        <div key={index} >
          <p>{chartValue.month}</p>
          <div className="bar" style={{ height: `${(chartValue.value * 100) / 1000}px` }}></div>
        </div>
      ))}
    </div>

  );
};

export default ChartBar;
