import React from 'react'
import { Save } from 'lucide-react';

export default function Card({jobs}) {
  return (
    <div className='m-4'>
      
    <div
  title="card"
  className="w-full max-w-sm bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 p-5"
>
  <div
    title="top"
    className="flex items-center justify-between"
  >
    <img
      className="h-14 w-14 rounded-xl object-cover border border-gray-200"
      src={jobs.brandLogo}
      alt=""
    />

    <button
      className="cursor-pointer flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-black hover:text-white transition"
    >
      Save
      <Save size={18} />
    </button>
  </div>

  <div title="center" className="mt-5 border-t-2 border-gray-400">
    <div className="flex items-center justify-between">
      <h3 className="text-lg font-bold text-gray-900">
        {jobs.company}
      </h3>

      <span className="text-sm text-gray-500">
       {jobs.datePosted}
      </span>
    </div>

    <div className="mt-3">
      <h2 className="text-2xl font-bold text-gray-900">
      {jobs.post}
      </h2>
    </div>

    <div className="flex flex-wrap gap-2 mt-5">
      <h4 className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
        {jobs.tag1}
      </h4>

      <h4 className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
        {jobs.tag2}
      </h4>
    </div>
  </div>

  <div
    title="bottom"
    className="mt-6 border-t border-gray-400 pt-5"
  >
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold text-green-600">
         {jobs.pay}
        </h3>

        <span className="text-sm text-gray-500">
          📍 {jobs.location}
        </span>
      </div>

      <div>
        <button
          className="cursor-pointer bg-white text-black px-5 py-2 rounded-xl border-2 border-gray-400 font-medium hover:bg-black hover:text-white transition"
        >
          Apply Now
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
