import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: [ 'January', 'February', 'March', 'April', 'May', 'June' ],
        datasets: [
            {
                label: 'Sales',
                data: [ 1200, 19000, 3000, 5000, 2000, 3000 ],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barThickness: 18
            },
        ],
    };

    const options = {
        responsive: true, // 부모요소 크기에 맞게 동적으로 조절
        maintainAspectRatio : false,
        // aspectRatio: 2,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Sales Data',
            },
        },
    };

    return (
        <div className='chart'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
