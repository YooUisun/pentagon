

export default function StatsHeader({ data }) {


    // reduce함수 => 배열.reduce(콜백, (누적값, 현재값) => {누적값 + 현재값, 초기값} )
    const totalTime = data.reduce((sum, item) => sum + item.time, 0);
    const totalSets = data.reduce((sum, item) => sum + item.sets, 0);


    return (
        <div style={{ height: '25%' }}>

            <div className="stats_content_main">

                <h1>Today's Record</h1>

                <div>
                    <div className="stats_content_box">총 운동 시간
                        <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#bb86fc' }}>{Number(totalTime)} 분</p>
                    </div>

                    <div className="stats_content_box">총 세트수
                        <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#bb86fc' }}>{Number(totalSets)} 세트</p>
                    </div>

                </div>

            </div>

        </div>
    )
}