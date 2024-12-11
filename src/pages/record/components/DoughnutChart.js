import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data1 }) => {

    const categories = ['등', '어깨', '가슴', '팔', '복근', '허벅지'];

    // reduce함수를 통해 acc객체에 key, value값 대입함
    // ex) countSets = {등 : 3} 이런식으로 저장됨
    const countSets = data1.reduce((acc, item) => {
        acc[item.type] = (acc[item.type] || 0) + item.sets;
        return acc;
    }, {});

    // console.log(countSets);

    // countSets변수의 밸류값을 map함수를 통해 뽑아냄
    const totalSets = categories.map(categories => countSets[categories] || 0);


    const data = {
        labels: categories,
        datasets: [
            {
                label: '부위별 세트수',
                data: totalSets, // 데이터 동적으로 변환
                backgroundColor: [
                    '#BB86FC',
                    '#03DAC6',
                    '#FF6D00',
                    '#FFC400',
                    '#3700B3',
                    '#CF6679',
                ],
                borderColor: '#121212',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        size: 15, // 폰트 사이즈
                        family: 'Arial', // 폰트종류
                    },
                    color: 'white',
                },
            },
            title: {
                display: true,
                text: 'Doughnut Chart',
            },
        },
    };

    return (
        <div className='doughNutChart'>
            <Doughnut data={data} options={options} />
        </div>
    )
};

export default DoughnutChart;