import React from 'react'

export function HomeIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {inverted ?
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V6.5C1.69779e-06 6.18333 0.0710015 5.88333 0.213002 5.6C0.355002 5.31667 0.550669 5.08333 0.800002 4.9L6.8 0.4C6.98334 0.266667 7.175 0.166667 7.375 0.0999999C7.575 0.0333332 7.78334 0 8 0C8.21667 0 8.425 0.0333332 8.625 0.0999999C8.825 0.166667 9.01667 0.266667 9.2 0.4L15.2 4.9C15.45 5.08333 15.646 5.31667 15.788 5.6C15.93 5.88333 16.0007 6.18333 16 6.5V16C16 16.55 15.804 17.021 15.412 17.413C15.02 17.805 14.5493 18.0007 14 18H10V13.5C10 12.9477 9.55229 12.5 9 12.5H7C6.44772 12.5 6 12.9477 6 13.5V18H2Z" fill="white" />
        </svg> :
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16V6.5C1.69779e-06 6.18333 0.0710015 5.88333 0.213002 5.6C0.355002 5.31667 0.550669 5.08333 0.800002 4.9L6.8 0.4C6.98334 0.266667 7.175 0.166667 7.375 0.0999999C7.575 0.0333332 7.78334 0 8 0C8.21667 0 8.425 0.0333332 8.625 0.0999999C8.825 0.166667 9.01667 0.266667 9.2 0.4L15.2 4.9C15.45 5.08333 15.646 5.31667 15.788 5.6C15.93 5.88333 16.0007 6.18333 16 6.5V16C16 16.55 15.804 17.021 15.412 17.413C15.02 17.805 14.5493 18.0007 14 18H10V13.5C10 12.9477 9.55229 12.5 9 12.5H7C6.44772 12.5 6 12.9477 6 13.5V18H2Z" fill="black" />
        </svg>
      }
    </>
  )
};

export function MarketIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {inverted ?
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.33331C6.94036 8.33331 7.5 8.78103 7.5 9.33331L7.5 14C7.5 14.5523 6.94036 15 6.25 15C5.55964 15 5 14.5523 5 14L5 9.33331C5 8.78103 5.55964 8.33331 6.25 8.33331Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 5C12.9404 5 13.5 5.4797 13.5 6.07143V13.9286C13.5 14.5203 12.9404 15 12.25 15C11.5596 15 11 14.5203 11 13.9286V6.07143C11 5.4797 11.5596 5 12.25 5Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.33331C6.94036 8.33331 7.5 8.78103 7.5 9.33331L7.5 14C7.5 14.5523 6.94036 15 6.25 15C5.55964 15 5 14.5523 5 14L5 9.33331C5 8.78103 5.55964 8.33331 6.25 8.33331Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 5C12.9404 5 13.5 5.4797 13.5 6.07143V13.9286C13.5 14.5203 12.9404 15 12.25 15C11.5596 15 11 14.5203 11 13.9286V6.07143C11 5.4797 11.5596 5 12.25 5Z" fill="white" />
        </svg>
      }
    </>
  )
};

export function PriceIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {inverted ?
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="white" />
          <path d="M17.0893 3C17.5905 3 17.9317 3.37446 17.998 3.87126L18 10.5H16.9648C16.6887 10.5 16.4648 10.2761 16.4648 10V5.80783C16.4648 5.71874 16.3571 5.67412 16.2941 5.73712L7.8184 14.2129C7.62313 14.4081 7.30655 14.4081 7.11129 14.2129L3.31813 10.4197C3.12297 10.2245 2.8066 10.2244 2.61129 10.4194L0 13.5V11.5L2.61129 8.28761C2.80651 8.09213 3.12328 8.09203 3.31863 8.28738L7.11129 12.08C7.30655 12.2753 7.62314 12.2753 7.8184 12.08L15.2277 4.67071C15.2907 4.60771 15.2461 4.5 15.157 4.5H10.9648C10.6887 4.5 10.4648 4.27614 10.4648 4V3.5C10.4648 3.22386 10.6887 3 10.9648 3H17.0893Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="black" />
          <path d="M17.0893 3C17.5905 3 17.9317 3.37446 17.998 3.87126L18 10.5H16.9648C16.6887 10.5 16.4648 10.2761 16.4648 10V5.80783C16.4648 5.71874 16.3571 5.67412 16.2941 5.73712L7.8184 14.2129C7.62313 14.4081 7.30655 14.4081 7.11129 14.2129L3.31813 10.4197C3.12297 10.2245 2.8066 10.2244 2.61129 10.4194L0 13.5V11.5L2.61129 8.28761C2.80651 8.09213 3.12328 8.09203 3.31863 8.28738L7.11129 12.08C7.30655 12.2753 7.62314 12.2753 7.8184 12.08L15.2277 4.67071C15.2907 4.60771 15.2461 4.5 15.157 4.5H10.9648C10.6887 4.5 10.4648 4.27614 10.4648 4V3.5C10.4648 3.22386 10.6887 3 10.9648 3H17.0893Z" fill="white" />
        </svg>
      }
    </>
  )
};

export function CalculatorIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {inverted ?
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="white" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="white" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65116 3.76744C5.81769 3.76744 5.9774 3.8336 6.09516 3.95135C6.21291 4.06911 6.27907 4.22882 6.27907 4.39535V5.44186H7.32558C7.49211 5.44186 7.65182 5.50801 7.76958 5.62577C7.88733 5.74353 7.95349 5.90324 7.95349 6.06977C7.95349 6.2363 7.88733 6.39601 7.76958 6.51376C7.65182 6.63152 7.49211 6.69767 7.32558 6.69767H6.27907V7.74419C6.27907 7.91072 6.21291 8.07043 6.09516 8.18818C5.9774 8.30594 5.81769 8.37209 5.65116 8.37209C5.48463 8.37209 5.32492 8.30594 5.20717 8.18818C5.08941 8.07043 5.02326 7.91072 5.02326 7.74419V6.69767H3.97674C3.81021 6.69767 3.6505 6.63152 3.53275 6.51376C3.41499 6.39601 3.34884 6.2363 3.34884 6.06977C3.34884 5.90324 3.41499 5.74353 3.53275 5.62577C3.6505 5.50801 3.81021 5.44186 3.97674 5.44186H5.02326V4.39535C5.02326 4.22882 5.08941 4.06911 5.20717 3.95135C5.32492 3.8336 5.48463 3.76744 5.65116 3.76744ZM10.0465 6.06977C10.0465 5.90324 10.1127 5.74353 10.2304 5.62577C10.3482 5.50801 10.5079 5.44186 10.6744 5.44186H14.0233C14.1898 5.44186 14.3495 5.50801 14.4673 5.62577C14.585 5.74353 14.6512 5.90324 14.6512 6.06977C14.6512 6.2363 14.585 6.39601 14.4673 6.51376C14.3495 6.63152 14.1898 6.69767 14.0233 6.69767H10.6744C10.5079 6.69767 10.3482 6.63152 10.2304 6.51376C10.1127 6.39601 10.0465 6.2363 10.0465 6.06977ZM10.0465 11.093C10.0465 10.9265 10.1127 10.7668 10.2304 10.649C10.3482 10.5313 10.5079 10.4651 10.6744 10.4651H14.0233C14.1898 10.4651 14.3495 10.5313 14.4673 10.649C14.585 10.7668 14.6512 10.9265 14.6512 11.093C14.6512 11.2596 14.585 11.4193 14.4673 11.537C14.3495 11.6548 14.1898 11.7209 14.0233 11.7209H10.6744C10.5079 11.7209 10.3482 11.6548 10.2304 11.537C10.1127 11.4193 10.0465 11.2596 10.0465 11.093ZM3.95163 10.6493C4.06936 10.5317 4.22895 10.4657 4.39535 10.4657C4.56174 10.4657 4.72134 10.5317 4.83907 10.6493L5.65116 11.4614L6.46326 10.6493C6.52074 10.5876 6.59006 10.5381 6.66708 10.5038C6.74411 10.4695 6.82725 10.451 6.91156 10.4496C6.99587 10.4481 7.07962 10.4636 7.1578 10.4952C7.23599 10.5267 7.30701 10.5737 7.36664 10.6334C7.42626 10.693 7.47327 10.764 7.50485 10.8422C7.53643 10.9204 7.55194 11.0041 7.55045 11.0884C7.54896 11.1727 7.53051 11.2559 7.49619 11.3329C7.46187 11.4099 7.41239 11.4793 7.3507 11.5367L6.5386 12.3488L7.3507 13.1609C7.41239 13.2184 7.46187 13.2877 7.49619 13.3648C7.53051 13.4418 7.54896 13.5249 7.55045 13.6092C7.55194 13.6935 7.53643 13.7773 7.50485 13.8555C7.47327 13.9337 7.42626 14.0047 7.36664 14.0643C7.30701 14.1239 7.23599 14.1709 7.1578 14.2025C7.07962 14.2341 6.99587 14.2496 6.91156 14.2481C6.82725 14.2466 6.74411 14.2282 6.66708 14.1939C6.59006 14.1595 6.52074 14.1101 6.46326 14.0484L5.65116 13.2363L4.83907 14.0484C4.72004 14.1593 4.5626 14.2197 4.39993 14.2168C4.23726 14.2139 4.08206 14.148 3.96701 14.033C3.85197 13.9179 3.78607 13.7627 3.7832 13.6001C3.78033 13.4374 3.84071 13.28 3.95163 13.1609L4.76372 12.3488L3.95163 11.5367C3.83404 11.419 3.76799 11.2594 3.76799 11.093C3.76799 10.9266 3.83404 10.767 3.95163 10.6493ZM10.0465 13.6047C10.0465 13.4381 10.1127 13.2784 10.2304 13.1607C10.3482 13.0429 10.5079 12.9767 10.6744 12.9767H14.0233C14.1898 12.9767 14.3495 13.0429 14.4673 13.1607C14.585 13.2784 14.6512 13.4381 14.6512 13.6047C14.6512 13.7712 14.585 13.9309 14.4673 14.0486C14.3495 14.1664 14.1898 14.2326 14.0233 14.2326H10.6744C10.5079 14.2326 10.3482 14.1664 10.2304 14.0486C10.1127 13.9309 10.0465 13.7712 10.0465 13.6047Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.65116 3.76744C5.81769 3.76744 5.9774 3.8336 6.09516 3.95135C6.21291 4.06911 6.27907 4.22882 6.27907 4.39535V5.44186H7.32558C7.49211 5.44186 7.65182 5.50801 7.76958 5.62577C7.88733 5.74353 7.95349 5.90324 7.95349 6.06977C7.95349 6.2363 7.88733 6.39601 7.76958 6.51376C7.65182 6.63152 7.49211 6.69767 7.32558 6.69767H6.27907V7.74419C6.27907 7.91072 6.21291 8.07043 6.09516 8.18818C5.9774 8.30594 5.81769 8.37209 5.65116 8.37209C5.48463 8.37209 5.32492 8.30594 5.20717 8.18818C5.08941 8.07043 5.02326 7.91072 5.02326 7.74419V6.69767H3.97674C3.81021 6.69767 3.6505 6.63152 3.53275 6.51376C3.41499 6.39601 3.34884 6.2363 3.34884 6.06977C3.34884 5.90324 3.41499 5.74353 3.53275 5.62577C3.6505 5.50801 3.81021 5.44186 3.97674 5.44186H5.02326V4.39535C5.02326 4.22882 5.08941 4.06911 5.20717 3.95135C5.32492 3.8336 5.48463 3.76744 5.65116 3.76744ZM10.0465 6.06977C10.0465 5.90324 10.1127 5.74353 10.2304 5.62577C10.3482 5.50801 10.5079 5.44186 10.6744 5.44186H14.0233C14.1898 5.44186 14.3495 5.50801 14.4673 5.62577C14.585 5.74353 14.6512 5.90324 14.6512 6.06977C14.6512 6.2363 14.585 6.39601 14.4673 6.51376C14.3495 6.63152 14.1898 6.69767 14.0233 6.69767H10.6744C10.5079 6.69767 10.3482 6.63152 10.2304 6.51376C10.1127 6.39601 10.0465 6.2363 10.0465 6.06977ZM10.0465 11.093C10.0465 10.9265 10.1127 10.7668 10.2304 10.649C10.3482 10.5313 10.5079 10.4651 10.6744 10.4651H14.0233C14.1898 10.4651 14.3495 10.5313 14.4673 10.649C14.585 10.7668 14.6512 10.9265 14.6512 11.093C14.6512 11.2596 14.585 11.4193 14.4673 11.537C14.3495 11.6548 14.1898 11.7209 14.0233 11.7209H10.6744C10.5079 11.7209 10.3482 11.6548 10.2304 11.537C10.1127 11.4193 10.0465 11.2596 10.0465 11.093ZM3.95163 10.6493C4.06936 10.5317 4.22895 10.4657 4.39535 10.4657C4.56174 10.4657 4.72134 10.5317 4.83907 10.6493L5.65116 11.4614L6.46326 10.6493C6.52074 10.5876 6.59006 10.5381 6.66708 10.5038C6.74411 10.4695 6.82725 10.451 6.91156 10.4496C6.99587 10.4481 7.07962 10.4636 7.1578 10.4952C7.23599 10.5267 7.30701 10.5737 7.36664 10.6334C7.42626 10.693 7.47327 10.764 7.50485 10.8422C7.53643 10.9204 7.55194 11.0041 7.55045 11.0884C7.54896 11.1727 7.53051 11.2559 7.49619 11.3329C7.46187 11.4099 7.41239 11.4793 7.3507 11.5367L6.5386 12.3488L7.3507 13.1609C7.41239 13.2184 7.46187 13.2877 7.49619 13.3648C7.53051 13.4418 7.54896 13.5249 7.55045 13.6092C7.55194 13.6935 7.53643 13.7773 7.50485 13.8555C7.47327 13.9337 7.42626 14.0047 7.36664 14.0643C7.30701 14.1239 7.23599 14.1709 7.1578 14.2025C7.07962 14.2341 6.99587 14.2496 6.91156 14.2481C6.82725 14.2466 6.74411 14.2282 6.66708 14.1939C6.59006 14.1595 6.52074 14.1101 6.46326 14.0484L5.65116 13.2363L4.83907 14.0484C4.72004 14.1593 4.5626 14.2197 4.39993 14.2168C4.23726 14.2139 4.08206 14.148 3.96701 14.033C3.85197 13.9179 3.78607 13.7627 3.7832 13.6001C3.78033 13.4374 3.84071 13.28 3.95163 13.1609L4.76372 12.3488L3.95163 11.5367C3.83404 11.419 3.76799 11.2594 3.76799 11.093C3.76799 10.9266 3.83404 10.767 3.95163 10.6493ZM10.0465 13.6047C10.0465 13.4381 10.1127 13.2784 10.2304 13.1607C10.3482 13.0429 10.5079 12.9767 10.6744 12.9767H14.0233C14.1898 12.9767 14.3495 13.0429 14.4673 13.1607C14.585 13.2784 14.6512 13.4381 14.6512 13.6047C14.6512 13.7712 14.585 13.9309 14.4673 14.0486C14.3495 14.1664 14.1898 14.2326 14.0233 14.2326H10.6744C10.5079 14.2326 10.3482 14.1664 10.2304 14.0486C10.1127 13.9309 10.0465 13.7712 10.0465 13.6047Z" fill="white" />
        </svg>
      }
    </>
  )
};

export function JournalIcon({ width, height, className, fontSize, style, onClick, inverted}: any) {
  return (
    <>
      {inverted ?
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="white" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="white" />
          <path d="M3 4H8V11.2L5.5 9.85L3 11.2V4Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M3 4H8V11.2L5.5 9.85L3 11.2V4Z" fill="white" />
        </svg>
      }
    </>
  )
};