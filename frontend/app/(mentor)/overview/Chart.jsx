import { Chart as ChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Well Performed', 'Medium Performed', 'Low Performed'],
  datasets: [
    {
      label: 'Scores',
      data: [80, 30, 10],
      backgroundColor: [
        'rgb(41 41 41)',
        'rgb(68 71 70)',
        'rgb(217 217 217)',
      ],
      hoverOffset: 4,
      borderColor: 'rgb(76 141 246)',
      hoverBorderColor: 'rgb(76 141 246)',
      borderRadius: 17,
      borderWidth:4,
      cutout: '73%'

    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    textInside: true ,
    legend: {
      display: false,
      position: 'bottom',
    },
  },
  elements: {
    center: {
      text: 'Red is 2/3 the total numbers',
      color: '#FF6384', 
      fontStyle: 'Poppins', 
      sidePadding: 20, 
      minFontSize: 20, 
      lineHeight: 25 
    }
  }
};


const Chart = () => {
  return (
    <div className='relative'>
      <Doughnut data={data} options={options}/>
      <h1 className='font-semibold text-3xl absolute center-absolute'>70</h1>
    </div>
  );
};

export default Chart;
