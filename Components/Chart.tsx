import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Data',
        },
    },
};

export const data = ({temperature, humidity, timestamp}: {temperature: [number], humidity: [number], timestamp: [number]}) => {
    return {
        labels: timestamp.map(ts => (new Date(ts)).toLocaleTimeString()),
        datasets: [
            {
                label: 'Temperature',
                data: temperature,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Humidity',
                data: humidity,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }
}


// @ts-ignore
export function MyChart(props) {
    const myData = data(props)

    return <Line options={options} data={myData}/>;
}
