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

const RadarChart = ( {data1} ) => {

    
    const categories = ['등','어깨','가슴','팔','복근','허벅지'];
    const workoutData = categories.map ( (categories) => {
        return data1.filter( (item) => item.type === categories).length;
    })


    console.log('레이다');
    console.log(workoutData);
    
    const data = {
        labels: categories, //운동부위
        datasets: [
            {
                label: '부위별 통계',
                data: workoutData,
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
                    lineWidth: 4, // 내부 선의 두께
                },
                ticks: {
                    display: false, // 축에 표시되는 숫자 숨기기
                },
                suggestedMin: 0,
                suggestedMax: Math.max(...workoutData)+1, // workout배열에서 +1로 최대값 동적으로 변경
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
