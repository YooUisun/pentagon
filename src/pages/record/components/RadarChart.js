import React from 'react';
import { Radar } from 'react-chartjs-2'; // Radar를 올바르게 가져옵니다.
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
        labels: ['가슴', '허벅지', '이두', '삼두', '어깨', '엉덩이'],
        datasets: [
            {
                label: 'My First Dataset',
                data: [50, 50, 50, 50, 50, 50],
                fill: true,
                backgroundColor: 'rgb(236, 223, 204)',
                borderColor: 'rgb(31, 49, 111)',
                borderWidth: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                grid: {
                    color: 'black', // 내부 6각형 선의 색상
                    lineWidth: 3, // 내부 선의 두께
                },
                ticks: {
                    display: false, // 축에 표시되는 숫자 숨기기
                },
                suggestedMin: 10,
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
