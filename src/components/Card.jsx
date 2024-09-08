import React from 'react'
import ProgressBar from './ProgressBar'

function Card({ title, number, chart, color }) {
    return (
        <div className='w-full h-40 bg-white rounded-lg p-4 flex flex-col justify-between'>
            <h1 className='font-poppins text-lg font-semibold'>{title}</h1>
            <div className="flex justify-between items-center">
                <p className='text-[#28A745] font-poppins text-3xl font-semibold'>{number}</p>
                <div className='w-28 h-16 flex items-center justify-center'>
                    {chart}
                </div>
            </div>
            <ProgressBar progress={65} color={color} />
        </div>
    )
}

export default Card
