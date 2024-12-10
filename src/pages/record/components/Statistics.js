import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import StatatisticWorkInfo from "./StatatisticWorkInfo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiPieChartFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";

export default function Statistics({ data, setData1 }) {
    
    return (
        <div className="stats_container">
            <StatsHeader data={data} />

            <div className="stats_content_container">
                <h1>일반</h1>
                <Tabs>
                    <TabList>
                        <Tab><CiMemoPad /></Tab>
                        <Tab><RiPieChartFill /></Tab>
                    </TabList>

                    <TabPanel>
                        <section>
                            <StatatisticWorkInfo data={data} setData1={setData1} />
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className="stats_content_chart">
                            <RadarChart data1={data}/>
                            <DoughnutChart data1={data}/>
                        </section>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
