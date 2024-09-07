import React from 'react'
import { FaHome, FaAngleRight } from "react-icons/fa";
import Card from './Card';
import HospitalSurvey from './HospitalSurvey';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, LineChart, Line, Legend, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { circle, area, tinyLine, data } from '../data/data'
import DetailCard from './DetailCard';
import Table from './Table';

const COLORS = ['#b2bcbc', '#5171bc', '#40c7c2'];



function Dashboard() {
  return (
    <div className='bg-[#EAEEF3] w-full h-full '>
      <div className="flex justify-between items-center p-5">
        <h2 className='hidden sm:flex text-[#666666] font-poppins text-2xl font-semibold tracking-widest'>Dashboard</h2>
        <p className='flex justify-center items-center gap-1 w-52 h-14 rounded-full bg-[#DCD0D04D] text-[#888888] font-poppins'> <FaHome className='text-[#AAAAAA]' /> Home <FaAngleRight className='text-[#AAAAAA]' /> <span className='text-black'>Dashboard</span> </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 px-5">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">

          <Card
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={circle}
                    cx="50%"
                    cy="50%"
                    outerRadius={25} // Adjust the outer radius for smaller size
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {circle.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            }
            title='New Patients'
            number='125'
            color='#834D9B'
          />
          <Card
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={250} height={40} data={area}>
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            }
            title='OPD Patients'
            number='218'
            color='#FBAAA2'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2'>
          <Card
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <LineChart width={300} height={100} data={tinyLine}>
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            }
            title="Today's Operations"
            number='25'
            color='#56AB2F'
          />
          <Card
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={200}
                  height={60}
                  data={tinyLine}

                >
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            }
            title="Today's Operations"
            number='2,479'
            color='#F7971E'
          />
        </div>

        <div className="lg:col-span-2 md:col-span-2 ">
          <HospitalSurvey />
        </div>

      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 p-5'>
        <DetailCard
          title="New Patient"
          subtitle="25% High then last month"
          grow="35.80%"
          month="45.20%"
          day="5.50%"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stackId="1" strokeWidth={5} stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="pv" stackId="1" strokeWidth={5} stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          }


        />
        <DetailCard
          title="Heart Surgeries"
          subtitle="30% Low then last month"
          grow="20.60%"
          month="65.30%"
          day="4.90%"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <BarChart

                data={data}

              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                <Bar dataKey="amt" stackId="a" fill="#F7971E" />
              </BarChart>
            </ResponsiveContainer>
          }


        />
        <DetailCard
          title="Medical Treatment"
          subtitle="20% High then last month"
          grow="38.40%"
          month="52.49%"
          day="4.70%"
          chart={
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={tinyLine}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="basis" dataKey="pv" stroke="#FEB019" strokeWidth={6} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="pv" stackId="1" strokeWidth={4} dot={false} stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={6} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>

          }
        />
      </div>
    <div className="grid grid-cols-1 p-5">
      <Table />
    </div>

    </div>
  )
}

export default Dashboard
