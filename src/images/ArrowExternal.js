import React from 'react'

export default function ArrowExternal({
  size = 24,
  color = "#fff"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M17.6538 16.7824C16.9634 16.7824 16.4038 16.2228 16.4038 15.5324V9.35779L7.22397 18.5376C6.73582 19.0258 5.94436 19.0258 5.4562 18.5376C4.96805 18.0495 4.96805 17.258 5.4562 16.7699L14.636 7.59003H8.46141C7.77105 7.59003 7.21141 7.03038 7.21141 6.34003C7.21141 5.64967 7.77105 5.09003 8.46141 5.09003H17.6538C18.3442 5.09003 18.9038 5.64967 18.9038 6.34003V15.5324C18.9038 16.2228 18.3442 16.7824 17.6538 16.7824Z"/>
    </svg>
  )
}