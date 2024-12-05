import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import StatatisticWorkInfo from "./StatatisticWorkInfo";
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
                        <Tab>차트</Tab>
                        <Tab>차트</Tab>
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
                </Tabs>
            </div>

        </div>
    )
}