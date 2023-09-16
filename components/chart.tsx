import React from 'react';
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js/auto';
// Register the necessary scales
ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend);
ChartJS.defaults.datasets.bar.maxBarThickness = 35;
ChartJS.defaults.datasets.bar.categoryPercentage = 0.4;


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: true,
            text: '',
        },
        scales: {
            y: {
                grid: {
                    drawOnChartArea: false
                }
            }
        }
    },
};

const labels = ['Week1', 'Week2', 'Week3', 'Week4'];

const ChartBar = () => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Guest',
                data: [500, 350, 200, 400],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#98D89E',
            },
            {
                label: 'User',
                data: [400, 430, 300, 340],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: '#EE8484',
            },
        ],
    };

    return (
        <div className="rounded-2xl px-8" style={{height: "30vh"}}>
            <Bar className="" data={data} options={options}/>
        </div>
    );
};

export default ChartBar;


