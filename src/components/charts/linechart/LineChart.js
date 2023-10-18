import React from 'react'
import {CategoryScale, registerables } from 'chart.js';
import { Chart } from 'chart.js';
import {Line} from 'react-chartjs-2'


Chart.register(CategoryScale);
const LineChart = ({chartData, priceType, multiAxis}) => {
Chart.register(...registerables);
    const config = {
        type: 'line',
            options: {
                plugins:{
                    legend:{
                        display:true,
                        position:'top',
                    },
                },
            responsive:true,
            interaction:{
                mode:'LinesChart',
                intersect: false,
            },
            scales:{
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
                    }
                },
                 
        }
    }
     
    return <Line data={chartData} options={config.options} />
}

export default LineChart