import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";


export default function Statistics() {

    return (
        <div className="stats_container">

            <StatsHeader />
            <br /><br />




            <div className="stats_content_container">
                
                <h1>일반</h1>

                <div className="stats_content_main">
                    <div>
                        <div className="stats_content_box">운동 세션 (record Modal란에서 데이터값 받아옴)</div>
                        <div className="stats_content_box">총 시간(시간)(record Modal란에서 데이터값 받아옴)</div>
                    </div>
                    <div>
                        <div className="stats_content_box">평균 세션 시간(record Modal란에서 데이터값 받아옴)</div>
                        <div className="stats_content_box">세트 완료 (총 세트수 : record Modal란에서 데이터값 받아옴)</div>
                    </div>
                </div>


                <div className="stats_content_chart">
                    <RadarChart />
                    <DoughnutChart />
                </div>

            </div>

            <br />

            <div className="stats_content_bottom">
                <div>
                    <h2>주간 운동</h2>
                    <div>
                        <BarChart />
                    </div>
                </div>

                <div>
                    <h2>3대 운동 1RM 기록</h2>
                    <div>운동명 셀렉트 태그? 사용 (벤치, 스쿼트, 데드 3개 넣음)</div>
                    <div>N kg x n 회 (record Modal에서 데이터값 받아와야됨)</div>
                    <LineChart />
                </div>
            </div>

        </div>


    )
}