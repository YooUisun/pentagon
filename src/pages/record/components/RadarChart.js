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

const RadarChart = ( {countType} ) => {


    // const statData = data.reduce((sum, item) => sum + item.type.length + 1, 0);

    console.log('레이다')
    // console.log(Object.values(countType));
    console.log(countType);


    const data = {
        labels: ['등','어깨','가슴','팔','복근','허벅지'], //운동부위
        datasets: [
            {
                label: '부위별 통계',
                data: Object.values(countType),
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
                suggestedMin: 0,
                suggestedMax: 5,
            },
        },
        plugins: {
            title: {
                display: true,
                text: '운동 부위별 통계',
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
