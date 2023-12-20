import React from 'react'

export default function Close({
  size = 22,
  color = "#fff"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      width={size}
      height={size}
      fill={color}
    >
    <path fillRule="evenodd" clipRule="evenodd" d="M10.4378 17.766C10.8853 17.3185 10.8853 16.593 10.4378 16.1455L6.43556 12.1432L18.3359 12.1432C18.9688 12.1432 19.4818 11.6302 19.4818 10.9974C19.4818 10.3646 18.9688 9.85156 18.3359 9.85156L6.43556 9.85156L10.4378 5.84929C10.8853 5.40181 10.8853 4.67631 10.4378 4.22884C9.99036 3.78136 9.26485 3.78136 8.81738 4.22884L2.85904 10.1872C2.41157 10.6346 2.41157 11.3601 2.85904 11.8076L8.81738 17.766C9.26485 18.2134 9.99035 18.2134 10.4378 17.766Z"/>
    </svg>
  )
}