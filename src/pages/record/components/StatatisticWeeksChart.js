import BarChart from "./BarChart";
import LineChart from "./LineChart";


export default function StatatisticWeeksChart() {

    return (
        <div className="stats_content_bottom">
            <div>
                <h2>주간 운동</h2>
                <div>
                    <BarChart/>
                </div>
            </div>
            <div>
                <h2>3대 운동 1RM 기록</h2>
                <div>운동명 셀렉트 태그? 사용 (벤치, 스쿼트, 데드 3개 넣음)</div>
                <div>N kg x n 회 (record Modal에서 데이터값 받아와야됨)</div>
                <LineChart/>
            </div>
        </div>
    )
}