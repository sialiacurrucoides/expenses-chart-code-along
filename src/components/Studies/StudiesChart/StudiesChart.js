import Chart from "../../Chart/Chart";
import topics from '../../../constants/topics.json';

const StudiesChart = ({filteredStudies}) => {
    
    const chartDataPoints = topics.map(topic => ({label: topic, value: 0}));
    
    if (filteredStudies){
        for (const study of filteredStudies){
            const currentTopic = chartDataPoints.find(dataPoint => dataPoint.label === study.topic);
            currentTopic.value += study.amount;
        }
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default StudiesChart;