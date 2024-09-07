import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];



function DetailCard({ title, subtitle, grow, month, day, chart }) {
    return (
        <div className='bg-white w-full p-5'>
            <div className='flex justify-between items-center my-5'>
                <h1 className='font-poppins text-lg font-extrabold'>{title}</h1>
                <p className='font-poppins text-[#198754] font-normal text-xs'>{subtitle}</p>
            </div>
            <table className="table-auto my-5">
                <thead>
                    <tr className="text-left">
                        <td className="px-1">Overall Growth</td>
                        <td className="px-1">Monthly</td>
                        <td className="px-1">Day</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-left">
                        <th className="px-1">{grow}</th>
                        <th className="px-1">{month}</th>
                        <th className="px-1">{day}</th>
                    </tr>
                </tbody>
            </table>

            <div className='w-full h-64 my-5'>
                {chart}
            </div>

        </div>
    )
}

export default DetailCard
