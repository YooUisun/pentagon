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
import '../Record.css'; // CSS 파일 추가


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
<<<<<<< HEAD
                data: [65, 59, 90, 81, 56, 55],
=======
                data: [65, 59, 900, 81, 56, 55],
>>>>>>> ab50fbf6b2b5a4cc6e5019b574da65de0f2c9791
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
        <div className="radar-chart-container">
            <Radar data={data} options={options} />
        </div>
    );
};

export default RadarChart;
