import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import {tableData} from '../data/data'

function Table() {
  return (
    <div className="overflow-x-auto rounded-md bg-white p-2">
         <div className='flex justify-between p-3'>
      <h1 className='font-poppins text-sm font-semibold text-[#3A405B]'>HOSPITAL SURVEY</h1>
      <div className='flex gap-2 text-[#97A0B3]'>
        <FaAngleDown />
        <RxCross2 />
      </div>
    </div>
  <table className="min-w-full mt-3 ">
    <thead>
      <tr className="w-full text-left border-b-2 border-gray-200">
        <th className="px-4 py-2">No</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Assigned Doctor</th>
        <th className="px-4 py-2">Date Of Admit</th>
        <th className="px-4 py-2">Diseases</th>
        <th className="px-4 py-2">Room No</th>
        <th className="px-4 py-2">Edit</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((patient, index) => (
        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
          <td className="px-4 py-2">{patient.no}</td>
          <td className="px-4 py-2">{patient.name}</td>
          <td className="px-4 py-2">{patient.doctor}</td>
          <td className="px-4 py-2">{patient.date}</td>
          <td className="px-4 py-2">
            <span className={`text-white px-2 py-1 rounded ${patient.color}`}>
              {patient.disease}
            </span>
          </td>
          <td className="px-4 py-2">{patient.room}</td>
          <td className="px-4 py-2">
            <div className="flex gap-2">
              <button className="text-green-600">
                <i className="fas fa-edit"></i> {/* Replace with proper icon */}
              </button>
              <button className="text-red-600">
                <i className="fas fa-trash-alt"></i> {/* Replace with proper icon */}
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Table
