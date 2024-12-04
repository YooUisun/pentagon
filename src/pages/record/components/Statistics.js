import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import RecordModal from "./RecordModal";

import StatatisticWeeksChart from "./StatatisticWeeksChart";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Statatistic1RM from "./Statatistic1RM";

export default function Statistics({ totalHour, totalSet }) {


    return (
        <div className="stats_container">
            <StatsHeader totalHour={totalHour} totalSet={totalSet} />

            <div className="stats_content_container" >

                <Tabs>
                    <TabList>
                        <Tab>운동 일지</Tab>
                        <Tab>기록 그래프</Tab>
                    </TabList>

                    <TabPanel>
                        <section>
                            <div>운동일지추가</div>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className="stats_content_chart">
                            <RadarChart />
                            <DoughnutChart />
                        </section>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}