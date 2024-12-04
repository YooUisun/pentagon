import { useState } from "react"


export default function StatsHeader({ totalHour, totalSet }) {



    return (
        <div style={{ height: '25%' }}>
            <div className="stats_content_main">
                <div>
                    <div className="stats_content_box">총 시간
                        <p>{totalHour}</p>
                        
                    </div>
                    <div className="stats_content_box">총 세트수
                        <p>{totalSet}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}