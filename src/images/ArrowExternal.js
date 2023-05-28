import React from 'react'

export default function ArrowExternal({
  size = 24,
  color = "#282725"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M14.5292 7.99792L6.62292 15.95C6.40903 16.1639 6.16061 16.2708 5.87767 16.2708C5.59533 16.2708 5.34722 16.1639 5.13333 15.95C4.91944 15.7361 4.8125 15.4877 4.8125 15.2047C4.8125 14.9224 4.91944 14.6743 5.13333 14.4604L13.0854 6.55417H6.41667C6.12639 6.55417 5.87828 6.45089 5.67233 6.24433C5.46578 6.03839 5.3625 5.79028 5.3625 5.5C5.3625 5.20972 5.46578 4.96131 5.67233 4.75475C5.87828 4.54881 6.12639 4.44583 6.41667 4.44583H15.5833C15.8736 4.44583 16.1217 4.54881 16.3277 4.75475C16.5342 4.96131 16.6375 5.20972 16.6375 5.5V14.6667C16.6375 14.9569 16.5342 15.2051 16.3277 15.411C16.1217 15.6176 15.8736 15.7208 15.5833 15.7208C15.2931 15.7208 15.0449 15.6176 14.839 15.411C14.6324 15.2051 14.5292 14.9569 14.5292 14.6667V7.99792Z"/>
    </svg>
  )
}