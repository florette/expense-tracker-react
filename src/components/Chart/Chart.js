import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const maxValuesArgs = props.dataPoints.map((dataPoint) => dataPoint.value);
    const maxValue = Math.max(...maxValuesArgs);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}
export default Chart;
