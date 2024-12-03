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
        labels: ['가슴', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
        maintainAspectRatio: false, // 비율 유지 비활성화
        scales: {
            r: {
                angleLines: {
                    display: false,
                },
                suggestedMin: 50,
                suggestedMax: 100,
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Exercise Performance',
            },
        },
    };

    return (
        <div className="radarChart">
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
