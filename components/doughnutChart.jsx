import React from 'react';
import {Bar, Doughnut} from "react-chartjs-2";
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
// ChartJS.defaults.datasets.doughnut.borderRadius = 10;
// ChartJS.defaults.datasets.doughnut.spacing = 5;



const options = {
    type: 'doughnut',
    responsive: true,
    maintainAspectRatio: false,
    // aspectRatio: 2.5,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: true,
            text: '',
        },
    },
};

const labels = ['Basic Trees', 'Custom Short Pants', 'Super Hoodies'];

const DoughnutChart = () => {
    const data = {
        labels,
        datasets: [
            {
                label: 'Data1',
                data: [55, 31, 14],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                // hoverOffset: 4
            },
        ],
    };

    return (
        <div className="rounded-2xl -mt-4" style={{height: "15vh"}}>
            <Doughnut className="" data={data} options={options}/>
        </div>
    );
};

export default DoughnutChart;



