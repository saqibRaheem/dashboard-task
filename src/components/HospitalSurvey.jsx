import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'Jan',
      uv: 400,
      pv: 240,
      amt: 240,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jly',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Sep',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Oct',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Nov',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Dec',
      uv: 90,
      pv: 300,
      amt: 100,
    },
  ];

  
function HospitalSurvey() {
  return (
    <div className="bg-white w-full h-[336px] rounded-md p-5">
    <div className='flex justify-between'>
      <h1 className='font-poppins text-sm font-semibold text-[#3A405B]'>HOSPITAL SURVEY</h1>
      <div className='flex gap-2 text-[#97A0B3]'>
        <FaAngleDown />
        <RxCross2 />
      </div>
    </div>
    <hr className='my-2'/>
    
    {/* Parent div with fixed height for chart */}
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 3" />
          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeDasharray="5 5" dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  )
}

export default HospitalSurvey
