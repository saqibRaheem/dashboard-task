import React from 'react'


function DetailCard({ title, subtitle, grow, month, day, chart }) {
    return (
        <div className='bg-white w-full p-5 '>
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
