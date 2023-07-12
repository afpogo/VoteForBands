import { Chart, BarController, BarElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

import { Bar } from "react-chartjs-2";

import { useContext, useEffect, useMemo, useState } from 'react';
import { ISocketContext, SocketContext } from '@/context/SocketContext';

Chart.register(BarController, BarElement, PointElement, LinearScale, Title, CategoryScale);

const options = {
    responsive: true,
}

function BandChart() {
    const {socket} = useContext(SocketContext) as ISocketContext;
    const [bandas, setBandas] = useState<{ id: string, name: string, votes: number }[]>()
    useEffect(() => {
        socket?.on('band-list', (bands) => {
            setBandas(bands);
        })
    }, [socket, bandas]);
    // Lo unico que nos pide react-chartjs es un objeto que contenga una clave llamado {datasets, labels, etc}
    const data = useMemo(() => {
        return ({
            datasets: [
                {
                    axis: 'y',
                    label: "Datos",
                    data: bandas?.map(band => band.votes),
                    fill: false,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(201, 203, 207)'
                    ],
                    borderWidth: 3,
                }
            ],
            labels: bandas?.map(band => band.name)
        })
    }, [bandas])
    return (
        <>
            <Bar data={data} options={options} />
        </>
    );
}

export default BandChart;