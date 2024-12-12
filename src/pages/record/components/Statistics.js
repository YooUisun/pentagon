import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import StatsHeader from "./StatsHeader";
import StatatisticWorkInfo from "./StatatisticWorkInfo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiPieChartFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";

export default function Statistics({ selData, handleDeleteWorkout }) {
    
    return (
        <div className="stats_container">
            <StatsHeader selData={selData} />

            <div className="stats_content_container">
                <Tabs style={ {marginTop : '40px'}}>
                    <TabList>
                        <Tab><CiMemoPad /></Tab>
                        <Tab><RiPieChartFill /></Tab>
                    </TabList>

                    <TabPanel>
                        <section style={ {height : '100%'}}>
                            <StatatisticWorkInfo selData={selData} handleDeleteWorkout={handleDeleteWorkout} />
                        </section>
                    </TabPanel>

                    <TabPanel>
                        <section className="stats_content_chart">
                            <RadarChart selData={selData}/>
                            <DoughnutChart selData={selData}/>
                        </section>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
