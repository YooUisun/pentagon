import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    RadarController,
} from 'chart.js';

// 필요한 요소들을 Chart.js에 등록
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    RadarController
);

const RadarChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 0,
                suggestedMax: 100,
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default RadarChart;
