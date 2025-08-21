import React from 'react'

export default function CheckBoxes({ label, options, selected, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={option}
              checked={selected.includes(option)}
              onChange={(e) => onChange(e)} 
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
