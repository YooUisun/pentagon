import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import StatatisticWorkInfo from "./StatatisticWorkInfo";
import StatatisticWeeksChart from "./StatatisticWeeksChart";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";

export default function Statistics() {


    return (
        <div className="stats_container">
            <StatsHeader />
            <div className="stats_content_container">
                <h1>일반</h1>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <section>
                            <StatatisticWorkInfo/>
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className="stats_content_chart">
                            <RadarChart/>
                            <DoughnutChart/>
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section>
                            <StatatisticWeeksChart/>
                        </section>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}