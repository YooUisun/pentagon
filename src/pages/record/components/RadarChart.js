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
    layouts,
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

const RadarChart = ({ data1 }) => {

    const categories = ['등', '어깨', '가슴', '팔', '복근', '허벅지'];
    const workoutData = categories.map((categories) => {
        return data1.filter((item) => item.type === categories).length;
    })

    //    console.log(workoutData);

    const data = {
        labels: categories, //운동부위
        datasets: [
            {
                label: '부위별 운동 횟수',
                data: workoutData,
                fill: true,
                backgroundColor: '#bb86fc',
                borderColor: 'rgb(31, 49, 111)',
                borderWidth: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                top: 35,
                bottom: 50,
                left: 0,
                right: 0,
            }
        },
        scales: {
            r: {
                grid: {
                    color: '#121212', // 내부 6각형 선의 색상
                    lineWidth: 3, // 내부 선의 두께
                },
                ticks: {
                    display: false, // 축에 표시되는 숫자 숨기기
                },
                pointLabels: {
                    font: {
                        size: 12, // 축 라벨 폰트 크기
                        family: 'Arial', //폰트종류
                    },
                    color: 'white', //축라벨 폰트색상
                },
                suggestedMin: 0,
                suggestedMax: Math.max(...workoutData) + 1, // workout배열에서 +1로 최대값 동적으로 변경
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 15, // 범례 폰트 크기
                    },
                    color: 'white', // 범례 폰트 색상
                    padding: 10,
                    boxWidth: 10,
                },
            },
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
