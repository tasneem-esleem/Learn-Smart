import React from 'react'

export default function EmptyState({type}) {
  return (
    <div className="py-16 flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 mb-4">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h3 className="text-xs font-bold text-gray-800 mb-1 capitalize">No {type} Available</h3>
      <p className="text-[11px] text-gray-400 max-w-xs leading-relaxed">
        You currently don't have any {type} assigned.<br />Please check again later.
      </p>
    </div>
  )
}
