import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";
import RadarChart from "./components/RadarChart";

import './Record/Record.css';


export default function RecordMain () {

    return (
        <div className="container">
            <BarChart/>
            <LineChart/>
            <DoughnutChart/>
            <RadarChart/>
        </div>
    )
}