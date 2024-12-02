import React from 'react';
import BarChart from './record/components/BarChart'; // 경로 수정
import DoughnutChart from './record/components/DoughnutChart'; // 경로 수정
import LineChart from './record/components/LineChart'; // 경로 수정
import RadarChart from './record/components/RadarChart'; // 경로 수정

function RecordMain() {
    return (
        <div>
            <RadarChart />
        </div>
    );
}

export default RecordMain;
