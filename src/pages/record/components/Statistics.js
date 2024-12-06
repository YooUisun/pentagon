import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import StatatisticWorkInfo from "./StatatisticWorkInfo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from "react";

export default function Statistics( {data, setData, countType} ) {

    return (
        <div className="stats_container">
            <StatsHeader data={data}/>
            <div className="stats_content_container">
                <h1>일반</h1>
                <Tabs>
                    <TabList>
                        <Tab>Memo</Tab>
                        <Tab>Data</Tab>
                    </TabList>

                    <TabPanel>
                        <section>
                            <StatatisticWorkInfo data={data} setData={setData}/>
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className="stats_content_chart">
                            <RadarChart countType={countType}/>
                            <DoughnutChart/>
                        </section>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    )
}