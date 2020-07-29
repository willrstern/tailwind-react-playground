import React from "react"

export default function Radio({ checked = false, onClick }) {
  return (
    <svg
      onClick={() => onClick()}
      className="cursor-pointer"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7" stroke="#C6C6C6" />
      {checked && <circle cx="7.5" cy="7.5" r="4.5" fill="#4285F4" />}
    </svg>
  )
}
