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
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
    const data = {
        labels: [ 'Running', 'Swimming', 'Cycling', 'Climbing', 'Jumping', 'Walking' ],
        datasets: [
            {
                label: 'Activity Level',
                data: [ 65, 59, 90, 81, 56, 40 ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Radar Chart Example',
            },
        },
    };

    return <Radar data={data} options={options} />;
};

export default RadarChart;
