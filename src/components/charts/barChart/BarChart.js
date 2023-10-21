import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
    
  
    const config = {
      type: 'candlestick',
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
        },
        elements: {
          candle: {
            borderColor: 'black', // You can customize border color
            upBorderColor: 'green', // Custom color for up (big) candles
            downBorderColor: 'red', // Custom color for down (small) candles
          },
        },
      },
    };
  
    return (
      <Bar
        data={chartData}
        options={config.options}
      
      />
    );
  };
  
  export default BarChart;
  