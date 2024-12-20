import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

import React from 'react';

const data = {
	labels: [
	],
	datasets: [{
	  label: 'My First Dataset',
	  data: [300, 50, 100],
	  backgroundColor: [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)'
	  ],
	  hoverOffset: 4
	}]
  };

  const config = {
	type: 'doughnut',
	data: data,
  };

const Chart = () => {
	
	return (<div><Doughnut data={data} /></div>);
};

export default Chart;
