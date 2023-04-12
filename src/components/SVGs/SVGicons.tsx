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
          <path fillRule="evenodd" clipRule="evenodd" d="M6.25 8.33331C6.94036 8.33331 7.5 8.78103 7.5 9.33331L7.5 14C7.5 14.5523 6.94036 15 6.25 15C5.55964 15 5 14.5523 5 14L5 9.33331C5 8.78103 5.55964 8.33331 6.25 8.33331Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.25 5C12.9404 5 13.5 5.4797 13.5 6.07143V13.9286C13.5 14.5203 12.9404 15 12.25 15C11.5596 15 11 14.5203 11 13.9286V6.07143C11 5.4797 11.5596 5 12.25 5Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4C0 1.79086 1.79086 0 4 0H14C16.2091 0 18 1.79086 18 4V14C18 16.2091 16.2091 18 14 18H4C1.79086 18 0 16.2091 0 14V4Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M6.25 8.33331C6.94036 8.33331 7.5 8.78103 7.5 9.33331L7.5 14C7.5 14.5523 6.94036 15 6.25 15C5.55964 15 5 14.5523 5 14L5 9.33331C5 8.78103 5.55964 8.33331 6.25 8.33331Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12.25 5C12.9404 5 13.5 5.4797 13.5 6.07143V13.9286C13.5 14.5203 12.9404 15 12.25 15C11.5596 15 11 14.5203 11 13.9286V6.07143C11 5.4797 11.5596 5 12.25 5Z" fill="white" />
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
          <path fillRule="evenodd" clipRule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.65116 3.76744C5.81769 3.76744 5.9774 3.8336 6.09516 3.95135C6.21291 4.06911 6.27907 4.22882 6.27907 4.39535V5.44186H7.32558C7.49211 5.44186 7.65182 5.50801 7.76958 5.62577C7.88733 5.74353 7.95349 5.90324 7.95349 6.06977C7.95349 6.2363 7.88733 6.39601 7.76958 6.51376C7.65182 6.63152 7.49211 6.69767 7.32558 6.69767H6.27907V7.74419C6.27907 7.91072 6.21291 8.07043 6.09516 8.18818C5.9774 8.30594 5.81769 8.37209 5.65116 8.37209C5.48463 8.37209 5.32492 8.30594 5.20717 8.18818C5.08941 8.07043 5.02326 7.91072 5.02326 7.74419V6.69767H3.97674C3.81021 6.69767 3.6505 6.63152 3.53275 6.51376C3.41499 6.39601 3.34884 6.2363 3.34884 6.06977C3.34884 5.90324 3.41499 5.74353 3.53275 5.62577C3.6505 5.50801 3.81021 5.44186 3.97674 5.44186H5.02326V4.39535C5.02326 4.22882 5.08941 4.06911 5.20717 3.95135C5.32492 3.8336 5.48463 3.76744 5.65116 3.76744ZM10.0465 6.06977C10.0465 5.90324 10.1127 5.74353 10.2304 5.62577C10.3482 5.50801 10.5079 5.44186 10.6744 5.44186H14.0233C14.1898 5.44186 14.3495 5.50801 14.4673 5.62577C14.585 5.74353 14.6512 5.90324 14.6512 6.06977C14.6512 6.2363 14.585 6.39601 14.4673 6.51376C14.3495 6.63152 14.1898 6.69767 14.0233 6.69767H10.6744C10.5079 6.69767 10.3482 6.63152 10.2304 6.51376C10.1127 6.39601 10.0465 6.2363 10.0465 6.06977ZM10.0465 11.093C10.0465 10.9265 10.1127 10.7668 10.2304 10.649C10.3482 10.5313 10.5079 10.4651 10.6744 10.4651H14.0233C14.1898 10.4651 14.3495 10.5313 14.4673 10.649C14.585 10.7668 14.6512 10.9265 14.6512 11.093C14.6512 11.2596 14.585 11.4193 14.4673 11.537C14.3495 11.6548 14.1898 11.7209 14.0233 11.7209H10.6744C10.5079 11.7209 10.3482 11.6548 10.2304 11.537C10.1127 11.4193 10.0465 11.2596 10.0465 11.093ZM3.95163 10.6493C4.06936 10.5317 4.22895 10.4657 4.39535 10.4657C4.56174 10.4657 4.72134 10.5317 4.83907 10.6493L5.65116 11.4614L6.46326 10.6493C6.52074 10.5876 6.59006 10.5381 6.66708 10.5038C6.74411 10.4695 6.82725 10.451 6.91156 10.4496C6.99587 10.4481 7.07962 10.4636 7.1578 10.4952C7.23599 10.5267 7.30701 10.5737 7.36664 10.6334C7.42626 10.693 7.47327 10.764 7.50485 10.8422C7.53643 10.9204 7.55194 11.0041 7.55045 11.0884C7.54896 11.1727 7.53051 11.2559 7.49619 11.3329C7.46187 11.4099 7.41239 11.4793 7.3507 11.5367L6.5386 12.3488L7.3507 13.1609C7.41239 13.2184 7.46187 13.2877 7.49619 13.3648C7.53051 13.4418 7.54896 13.5249 7.55045 13.6092C7.55194 13.6935 7.53643 13.7773 7.50485 13.8555C7.47327 13.9337 7.42626 14.0047 7.36664 14.0643C7.30701 14.1239 7.23599 14.1709 7.1578 14.2025C7.07962 14.2341 6.99587 14.2496 6.91156 14.2481C6.82725 14.2466 6.74411 14.2282 6.66708 14.1939C6.59006 14.1595 6.52074 14.1101 6.46326 14.0484L5.65116 13.2363L4.83907 14.0484C4.72004 14.1593 4.5626 14.2197 4.39993 14.2168C4.23726 14.2139 4.08206 14.148 3.96701 14.033C3.85197 13.9179 3.78607 13.7627 3.7832 13.6001C3.78033 13.4374 3.84071 13.28 3.95163 13.1609L4.76372 12.3488L3.95163 11.5367C3.83404 11.419 3.76799 11.2594 3.76799 11.093C3.76799 10.9266 3.83404 10.767 3.95163 10.6493ZM10.0465 13.6047C10.0465 13.4381 10.1127 13.2784 10.2304 13.1607C10.3482 13.0429 10.5079 12.9767 10.6744 12.9767H14.0233C14.1898 12.9767 14.3495 13.0429 14.4673 13.1607C14.585 13.2784 14.6512 13.4381 14.6512 13.6047C14.6512 13.7712 14.585 13.9309 14.4673 14.0486C14.3495 14.1664 14.1898 14.2326 14.0233 14.2326H10.6744C10.5079 14.2326 10.3482 14.1664 10.2304 14.0486C10.1127 13.9309 10.0465 13.7712 10.0465 13.6047Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M5.65116 3.76744C5.81769 3.76744 5.9774 3.8336 6.09516 3.95135C6.21291 4.06911 6.27907 4.22882 6.27907 4.39535V5.44186H7.32558C7.49211 5.44186 7.65182 5.50801 7.76958 5.62577C7.88733 5.74353 7.95349 5.90324 7.95349 6.06977C7.95349 6.2363 7.88733 6.39601 7.76958 6.51376C7.65182 6.63152 7.49211 6.69767 7.32558 6.69767H6.27907V7.74419C6.27907 7.91072 6.21291 8.07043 6.09516 8.18818C5.9774 8.30594 5.81769 8.37209 5.65116 8.37209C5.48463 8.37209 5.32492 8.30594 5.20717 8.18818C5.08941 8.07043 5.02326 7.91072 5.02326 7.74419V6.69767H3.97674C3.81021 6.69767 3.6505 6.63152 3.53275 6.51376C3.41499 6.39601 3.34884 6.2363 3.34884 6.06977C3.34884 5.90324 3.41499 5.74353 3.53275 5.62577C3.6505 5.50801 3.81021 5.44186 3.97674 5.44186H5.02326V4.39535C5.02326 4.22882 5.08941 4.06911 5.20717 3.95135C5.32492 3.8336 5.48463 3.76744 5.65116 3.76744ZM10.0465 6.06977C10.0465 5.90324 10.1127 5.74353 10.2304 5.62577C10.3482 5.50801 10.5079 5.44186 10.6744 5.44186H14.0233C14.1898 5.44186 14.3495 5.50801 14.4673 5.62577C14.585 5.74353 14.6512 5.90324 14.6512 6.06977C14.6512 6.2363 14.585 6.39601 14.4673 6.51376C14.3495 6.63152 14.1898 6.69767 14.0233 6.69767H10.6744C10.5079 6.69767 10.3482 6.63152 10.2304 6.51376C10.1127 6.39601 10.0465 6.2363 10.0465 6.06977ZM10.0465 11.093C10.0465 10.9265 10.1127 10.7668 10.2304 10.649C10.3482 10.5313 10.5079 10.4651 10.6744 10.4651H14.0233C14.1898 10.4651 14.3495 10.5313 14.4673 10.649C14.585 10.7668 14.6512 10.9265 14.6512 11.093C14.6512 11.2596 14.585 11.4193 14.4673 11.537C14.3495 11.6548 14.1898 11.7209 14.0233 11.7209H10.6744C10.5079 11.7209 10.3482 11.6548 10.2304 11.537C10.1127 11.4193 10.0465 11.2596 10.0465 11.093ZM3.95163 10.6493C4.06936 10.5317 4.22895 10.4657 4.39535 10.4657C4.56174 10.4657 4.72134 10.5317 4.83907 10.6493L5.65116 11.4614L6.46326 10.6493C6.52074 10.5876 6.59006 10.5381 6.66708 10.5038C6.74411 10.4695 6.82725 10.451 6.91156 10.4496C6.99587 10.4481 7.07962 10.4636 7.1578 10.4952C7.23599 10.5267 7.30701 10.5737 7.36664 10.6334C7.42626 10.693 7.47327 10.764 7.50485 10.8422C7.53643 10.9204 7.55194 11.0041 7.55045 11.0884C7.54896 11.1727 7.53051 11.2559 7.49619 11.3329C7.46187 11.4099 7.41239 11.4793 7.3507 11.5367L6.5386 12.3488L7.3507 13.1609C7.41239 13.2184 7.46187 13.2877 7.49619 13.3648C7.53051 13.4418 7.54896 13.5249 7.55045 13.6092C7.55194 13.6935 7.53643 13.7773 7.50485 13.8555C7.47327 13.9337 7.42626 14.0047 7.36664 14.0643C7.30701 14.1239 7.23599 14.1709 7.1578 14.2025C7.07962 14.2341 6.99587 14.2496 6.91156 14.2481C6.82725 14.2466 6.74411 14.2282 6.66708 14.1939C6.59006 14.1595 6.52074 14.1101 6.46326 14.0484L5.65116 13.2363L4.83907 14.0484C4.72004 14.1593 4.5626 14.2197 4.39993 14.2168C4.23726 14.2139 4.08206 14.148 3.96701 14.033C3.85197 13.9179 3.78607 13.7627 3.7832 13.6001C3.78033 13.4374 3.84071 13.28 3.95163 13.1609L4.76372 12.3488L3.95163 11.5367C3.83404 11.419 3.76799 11.2594 3.76799 11.093C3.76799 10.9266 3.83404 10.767 3.95163 10.6493ZM10.0465 13.6047C10.0465 13.4381 10.1127 13.2784 10.2304 13.1607C10.3482 13.0429 10.5079 12.9767 10.6744 12.9767H14.0233C14.1898 12.9767 14.3495 13.0429 14.4673 13.1607C14.585 13.2784 14.6512 13.4381 14.6512 13.6047C14.6512 13.7712 14.585 13.9309 14.4673 14.0486C14.3495 14.1664 14.1898 14.2326 14.0233 14.2326H10.6744C10.5079 14.2326 10.3482 14.1664 10.2304 14.0486C10.1127 13.9309 10.0465 13.7712 10.0465 13.6047Z" fill="white" />
        </svg>
      }
    </>
  )
};

export function JournalIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {inverted ?
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0Z" fill="white" />
          <path d="M3 4H8V11.2L5.5 9.85L3 11.2V4Z" fill="black" />
        </svg> :
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.95228 0H9.04772C10.9808 0 12.4953 4.47035e-08 13.6775 0.15907C14.8864 0.321488 15.8408 0.661395 16.5901 1.40986C17.3394 2.15916 17.6785 3.11358 17.8409 4.32335C18 5.50465 18 7.01916 18 8.95228V9.04772C18 10.9808 18 12.4953 17.8409 13.6775C17.6785 14.8864 17.3386 15.8408 16.5901 16.5901C15.8408 17.3394 14.8864 17.6785 13.6767 17.8409C12.4953 18 10.9808 18 9.04772 18H8.95228C7.01916 18 5.50465 18 4.32251 17.8409C3.11358 17.6785 2.15916 17.3386 1.40986 16.5901C0.660558 15.8408 0.321488 14.8864 0.15907 13.6767C4.47035e-08 12.4953 0 10.9808 0 9.04772V8.95228C0 7.01916 4.47035e-08 5.50465 0.15907 4.32251C0.321488 3.11358 0.661395 2.15916 1.40986 1.40986C2.15916 0.660558 3.11358 0.321488 4.32335 0.15907C5.50465 4.47035e-08 7.01916 0 8.95228 0ZM4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M4.48995 1.40316C3.42 1.54716 2.77451 1.82177 2.29814 2.29814C1.82093 2.77535 1.54716 3.42 1.40316 4.49079C1.25749 5.57916 1.25581 7.00912 1.25581 9C1.25581 10.9909 1.25749 12.4208 1.40316 13.5092C1.54716 14.58 1.82177 15.2255 2.29814 15.7027C2.77535 16.1791 3.42 16.4528 4.49079 16.5968C5.57916 16.7425 7.00912 16.7442 9 16.7442C10.9909 16.7442 12.4208 16.7425 13.5092 16.5968C14.58 16.4528 15.2255 16.1782 15.7027 15.7019C16.1791 15.2247 16.4528 14.58 16.5968 13.5092C16.7425 12.4208 16.7442 10.9909 16.7442 9C16.7442 7.00912 16.7425 5.57916 16.5968 4.49079C16.4528 3.42 16.1782 2.77451 15.7019 2.2973C15.2247 1.82093 14.58 1.54716 13.5092 1.40316C12.4208 1.25749 10.9909 1.25581 9 1.25581C7.00912 1.25581 5.57833 1.25749 4.48995 1.40316Z" fill="black" />
          <path d="M3 4H8V11.2L5.5 9.85L3 11.2V4Z" fill="white" />
        </svg>
      }
    </>
  )
};

export function PriceDownIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3321 10.5584L0.642334 1.17888L1.35788 0.821106L6.04764 10.2006C6.07816 10.2617 6.15953 10.2749 6.20779 10.2266L10.1767 6.25774C10.6356 5.7988 11.4147 5.96177 11.6512 6.56617L15.594 16.6423C15.6203 16.7094 15.7069 16.7276 15.7579 16.6766L18.6869 13.7475C19.1411 13.2934 19.911 13.4474 20.1555 14.0412L23.0023 20.9547L24.0155 18.5231C24.1005 18.3191 24.3346 18.2227 24.5386 18.3077C24.7425 18.3927 24.8389 18.6268 24.754 18.8308L23.3693 22.1538C23.2844 22.3578 23.0502 22.4542 22.8463 22.3692L19.5232 20.9846C19.3193 20.8996 19.2228 20.6654 19.3078 20.4615C19.3928 20.2576 19.627 20.1612 19.8309 20.2461L22.2625 21.2593L19.4158 14.3458C19.3886 14.2798 19.3031 14.2627 19.2526 14.3132L16.3235 17.2422C15.8646 17.7012 15.0855 17.5382 14.849 16.9338L10.9062 6.85769C10.8799 6.79053 10.7934 6.77243 10.7424 6.82342L6.77348 10.7923C6.3391 11.2267 5.60682 11.1078 5.3321 10.5584Z" fill="url(#paint0_linear_23_18)" />
      <defs>
        <linearGradient id="paint0_linear_23_18" x1="12.0001" y1="0.999991" x2="12.0001" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DC143C" stopOpacity="0" />
          <stop offset="1" stopColor="#DC143C" />
        </linearGradient>
      </defs>
    </svg>
  )
};

export function PriceUpIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4.68976 11.8417L0 21.2212L0.715542 21.579L5.4053 12.1995C5.43583 12.1384 5.51719 12.1252 5.56546 12.1735L9.53434 16.1423C9.99328 16.6013 10.7723 16.4383 11.0089 15.8339L14.9517 5.7578C14.978 5.69064 15.0645 5.67253 15.1155 5.72353L18.0446 8.65261C18.4987 9.10673 19.2687 8.95273 19.5132 8.35889L22.36 1.44534L23.3732 3.87702C23.4581 4.08094 23.6923 4.17737 23.8962 4.0924C24.1002 4.00743 24.1966 3.77325 24.1116 3.56933L22.727 0.246248C22.642 0.0423279 22.4078 -0.0541019 22.2039 0.0308647L18.8808 1.41548C18.6769 1.50045 18.5805 1.73464 18.6655 1.93856C18.7504 2.14248 18.9846 2.23891 19.1885 2.15394L21.6202 1.14074L18.7735 8.05429C18.7463 8.12027 18.6607 8.13738 18.6103 8.08692L15.6812 5.15784C15.2223 4.6989 14.4432 4.86187 14.2067 5.46628L10.2639 15.5424C10.2376 15.6096 10.151 15.6277 10.1 15.5767L6.13114 11.6078C5.69676 11.1734 4.96449 11.2922 4.68976 11.8417Z" fill="url(#paint0_linear_23_19)" />
      <defs>
        <linearGradient id="paint0_linear_23_19" x1="11.3578" y1="21.4001" x2="11.3578" y2="0.400095" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C514" stopOpacity="0" />
          <stop offset="1" stopColor="#00C514" />
        </linearGradient>
      </defs>
    </svg>
  )
};

export function SearchIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {
        inverted ?
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945Z" fill="white" />
          </svg> :
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2049 12.952L18 16.7462L16.7462 18L12.952 14.2049C11.5402 15.3366 9.78419 15.9522 7.9748 15.9496C3.57271 15.9496 0 12.3769 0 7.9748C0 3.57271 3.57271 0 7.9748 0C12.3769 0 15.9496 3.57271 15.9496 7.9748C15.9522 9.78419 15.3366 11.5402 14.2049 12.952ZM12.4274 12.2945C13.5519 11.138 14.18 9.58786 14.1774 7.9748C14.1774 4.54741 11.4013 1.77218 7.9748 1.77218C4.54741 1.77218 1.77218 4.54741 1.77218 7.9748C1.77218 11.4013 4.54741 14.1774 7.9748 14.1774C9.58786 14.18 11.138 13.5519 12.2945 12.4274L12.4274 12.2945Z" fill="black" />
          </svg>
      }
    </>
  )
};

export function InfoIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {
        inverted ?
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 13.5C9.255 13.5 9.4689 13.4136 9.6417 13.2408C9.8145 13.068 9.9006 12.8544 9.9 12.6V9C9.9 8.745 9.8136 8.5311 9.6408 8.3583C9.468 8.1855 9.2544 8.0994 9 8.1C8.745 8.1 8.5311 8.1864 8.3583 8.3592C8.1855 8.532 8.0994 8.7456 8.1 9V12.6C8.1 12.855 8.1864 13.0689 8.3592 13.2417C8.532 13.4145 8.7456 13.5006 9 13.5ZM9 6.3C9.255 6.3 9.4689 6.2136 9.6417 6.0408C9.8145 5.868 9.9006 5.6544 9.9 5.4C9.9 5.145 9.8136 4.9311 9.6408 4.7583C9.468 4.5855 9.2544 4.4994 9 4.5C8.745 4.5 8.5311 4.5864 8.3583 4.7592C8.1855 4.932 8.0994 5.1456 8.1 5.4C8.1 5.655 8.1864 5.8689 8.3592 6.0417C8.532 6.2145 8.7456 6.3006 9 6.3ZM9 18C7.755 18 6.585 17.7636 5.49 17.2908C4.395 16.818 3.4425 16.1769 2.6325 15.3675C1.8225 14.5575 1.1814 13.605 0.7092 12.51C0.237 11.415 0.0006 10.245 0 9C0 7.755 0.2364 6.585 0.7092 5.49C1.182 4.395 1.8231 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.1814 5.49 0.7092C6.585 0.237 7.755 0.0006 9 0C10.245 0 11.415 0.2364 12.51 0.7092C13.605 1.182 14.5575 1.8231 15.3675 2.6325C16.1775 3.4425 16.8189 4.395 17.2917 5.49C17.7645 6.585 18.0006 7.755 18 9C18 10.245 17.7636 11.415 17.2908 12.51C16.818 13.605 16.1769 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8189 12.51 17.2917C11.415 17.7645 10.245 18.0006 9 18Z" fill="white" />
          </svg> :
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 13.5C9.255 13.5 9.4689 13.4136 9.6417 13.2408C9.8145 13.068 9.9006 12.8544 9.9 12.6V9C9.9 8.745 9.8136 8.5311 9.6408 8.3583C9.468 8.1855 9.2544 8.0994 9 8.1C8.745 8.1 8.5311 8.1864 8.3583 8.3592C8.1855 8.532 8.0994 8.7456 8.1 9V12.6C8.1 12.855 8.1864 13.0689 8.3592 13.2417C8.532 13.4145 8.7456 13.5006 9 13.5ZM9 6.3C9.255 6.3 9.4689 6.2136 9.6417 6.0408C9.8145 5.868 9.9006 5.6544 9.9 5.4C9.9 5.145 9.8136 4.9311 9.6408 4.7583C9.468 4.5855 9.2544 4.4994 9 4.5C8.745 4.5 8.5311 4.5864 8.3583 4.7592C8.1855 4.932 8.0994 5.1456 8.1 5.4C8.1 5.655 8.1864 5.8689 8.3592 6.0417C8.532 6.2145 8.7456 6.3006 9 6.3ZM9 18C7.755 18 6.585 17.7636 5.49 17.2908C4.395 16.818 3.4425 16.1769 2.6325 15.3675C1.8225 14.5575 1.1814 13.605 0.7092 12.51C0.237 11.415 0.0006 10.245 0 9C0 7.755 0.2364 6.585 0.7092 5.49C1.182 4.395 1.8231 3.4425 2.6325 2.6325C3.4425 1.8225 4.395 1.1814 5.49 0.7092C6.585 0.237 7.755 0.0006 9 0C10.245 0 11.415 0.2364 12.51 0.7092C13.605 1.182 14.5575 1.8231 15.3675 2.6325C16.1775 3.4425 16.8189 4.395 17.2917 5.49C17.7645 6.585 18.0006 7.755 18 9C18 10.245 17.7636 11.415 17.2908 12.51C16.818 13.605 16.1769 14.5575 15.3675 15.3675C14.5575 16.1775 13.605 16.8189 12.51 17.2917C11.415 17.7645 10.245 18.0006 9 18Z" fill="black" />
          </svg>
      }
    </>
  )
};

export function ArrowDownIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {
        inverted ?
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.89968 8.96959C6.29998 9.48998 7.08464 9.48997 7.48493 8.96959L13.1464 1.60971C13.6522 0.95209 13.1834 -4.76837e-07 12.3538 -4.76837e-07H1.03086C0.20119 -4.76837e-07 -0.267622 0.952091 0.238239 1.60971L5.89968 8.96959Z" fill="white" />
          </svg> :
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.89968 8.96959C6.29998 9.48998 7.08464 9.48997 7.48493 8.96959L13.1464 1.60971C13.6522 0.95209 13.1834 -4.76837e-07 12.3538 -4.76837e-07H1.03086C0.20119 -4.76837e-07 -0.267622 0.952091 0.238239 1.60971L5.89968 8.96959Z" fill="black" />
          </svg>
      }
    </>
  )
};

export function MinusIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {
        inverted ?
          <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H14C14.5523 0 15 0.447715 15 1C15 1.55228 14.5523 2 14 2H1C0.447715 2 0 1.55228 0 1Z" fill="white" />
          </svg> :
          <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H14C14.5523 0 15 0.447715 15 1C15 1.55228 14.5523 2 14 2H1C0.447715 2 0 1.55228 0 1Z" fill="black" />
          </svg>
      }
    </>
  )
};

export function PlusIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <>
      {
        inverted ?
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5C8.05228 0.5 8.5 0.947715 8.5 1.5V7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H8.5V14.5C8.5 15.0523 8.05228 15.5 7.5 15.5C6.94772 15.5 6.5 15.0523 6.5 14.5V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H6.5V1.5C6.5 0.947715 6.94772 0.5 7.5 0.5Z" fill="white" />
          </svg> :
          <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 0.5C8.05228 0.5 8.5 0.947715 8.5 1.5V7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H8.5V14.5C8.5 15.0523 8.05228 15.5 7.5 15.5C6.94772 15.5 6.5 15.0523 6.5 14.5V9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H6.5V1.5C6.5 0.947715 6.94772 0.5 7.5 0.5Z" fill="black" />
          </svg>
      }
    </>
  )
};

export function TradeSaveTimeIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4289 12.6667C15.2384 12.381 15.0479 12.1905 14.8574 11.9048C15.1431 12 15.4289 12.2857 15.4289 12.6667Z" fill="#D1AFFF" />
      <path d="M15.429 14.1904V28.5714C15.429 29.1428 14.9528 29.619 14.3814 29.619H9.33375C8.76232 29.619 8.28613 29.1428 8.28613 28.5714V12.7619C8.28613 12.1904 8.76232 11.7142 9.33375 11.7142H13.429C14.0004 12.6666 14.6671 13.5238 15.429 14.1904Z" fill="#D1AFFF" />
      <path d="M6.09524 26H1.04762C0.476191 26 0 25.5238 0 24.9524V16.4762C0 15.9048 0.476191 15.4286 1.04762 15.4286H6.09524C6.66667 15.4286 7.14286 15.9048 7.14286 16.4762V24.9524C7.04762 25.5238 6.57143 26 6.09524 26Z" fill="#D1AFFF" />
      <path d="M3.52321 18.3809C4.09463 18.3809 4.57082 17.9048 4.57082 17.3333V10.5714C4.57082 9.99999 4.09463 9.5238 3.52321 9.5238C2.95178 9.5238 2.47559 9.99999 2.47559 10.5714V17.3333C2.47559 17.9048 2.95178 18.3809 3.52321 18.3809Z" fill="#D1AFFF" />
      <path d="M20.2859 26C20.8573 26 21.3335 25.5238 21.3335 24.9523V18.1904C21.3335 17.619 20.8573 17.1428 20.2859 17.1428C19.7145 17.1428 19.2383 17.619 19.2383 18.1904V24.9523C19.2383 25.5238 19.7145 26 20.2859 26Z" fill="#D1AFFF" />
      <path d="M11.8093 32C12.3808 32 12.857 31.5238 12.857 30.9523V24.1904C12.857 23.619 12.3808 23.1428 11.8093 23.1428C11.2379 23.1428 10.7617 23.619 10.7617 24.1904V30.9523C10.7617 31.619 11.2379 32 11.8093 32Z" fill="#D1AFFF" />
      <path d="M23.8095 10.4761C23.8095 10.6666 23.7143 10.8571 23.619 10.9523C23.4286 11.1428 23.3333 11.1428 23.0476 11.1428C22.8571 11.1428 22.6667 11.0475 22.4762 10.9523L20.2857 8.85707C20.1905 8.76183 20.0952 8.66659 20.0952 8.57135C20.0952 8.47612 20 8.38088 20 8.28564V7.80945H21.5238V7.99993L23.5238 9.90469C23.7143 9.99993 23.8095 10.1904 23.8095 10.4761Z" fill="#D1AFFF" />
      <path d="M23.8084 12.8572V14.5715C22.9512 14.9524 21.9036 15.1429 20.856 15.1429C19.9036 15.1429 18.9512 14.9524 18.0941 14.6667C17.6179 14.4762 17.1417 14.1905 16.7607 13.9048V11.9048C16.856 12 16.856 12.0953 16.9512 12.0953C17.9988 13.1429 19.3322 13.6191 20.856 13.6191C21.9988 13.6191 22.9512 13.3334 23.8084 12.8572Z" fill="#D1AFFF" />
      <path d="M20.8565 16.1905C21.9041 16.1905 22.8565 16.0001 23.8089 15.7143V17.4286C23.8089 18.0001 23.3327 18.4763 22.7613 18.4763H17.7136C17.1422 18.4763 16.666 18.0001 16.666 17.4286V15.2382C17.9993 15.8096 19.3327 16.1905 20.8565 16.1905Z" fill="#D1AFFF" />
      <path d="M27.6191 7.80952C27.4286 7.61905 27.2381 7.61905 27.0477 7.61905C26.8572 7.61905 26.6667 7.71429 26.4762 7.90476C26.2858 8.09524 26.2858 8.28572 26.2858 8.47619C26.2858 9.90476 25.7143 11.2381 24.6667 12.1905C24.381 12.4762 24.0953 12.6667 23.7143 12.9524C22.8572 13.5238 21.9048 13.7143 20.762 13.7143C19.2381 13.7143 17.9048 13.2381 16.8572 12.1905C16.762 12.0952 16.6667 12 16.6667 12C15.7143 11.0476 15.3334 9.80952 15.3334 8.47619C15.3334 6.95238 15.9048 5.71429 16.9524 4.66667C18 3.61905 19.3334 3.14286 20.8572 3.14286C20.9524 3.14286 21.0477 3.14286 21.1429 3.14286C21.2381 3.14286 21.3334 3.14286 21.4286 3.14286C21.7143 3.14286 21.9048 3.14286 22.0953 2.95238C22.2858 2.85714 22.381 2.66667 22.381 2.38095C22.381 2.19048 22.2858 2 22.1905 1.90476C22.0953 1.80952 21.9048 1.71429 21.8096 1.61905C21.6191 1.61905 21.5239 1.61905 21.3334 1.52381C21.1429 1.52381 21.0477 1.52381 20.8572 1.52381C18.8572 1.52381 17.2381 2.19048 15.9048 3.52381C14.5715 4.85714 13.8096 6.47619 13.8096 8.38095C13.8096 9.33333 14 10.1905 14.381 11.0476C14.4762 11.3333 14.6667 11.7143 14.8572 12C15.0477 12.2857 15.2381 12.5714 15.4286 12.7619C15.5239 12.9524 15.7143 13.0476 15.9048 13.2381C16.1905 13.5238 16.4762 13.7143 16.762 14C17.1429 14.2857 17.6191 14.5714 18.0953 14.7619C18.9524 15.1429 19.9048 15.2381 20.8572 15.2381C21.9048 15.2381 22.9524 15.0476 23.8096 14.6667C24.5715 14.381 25.2381 13.9048 25.9048 13.2381C27.2381 11.9048 27.9048 10.2857 27.9048 8.38095C27.9048 8.09524 27.8096 7.90476 27.6191 7.80952ZM30 2.47619C29.8096 2.28571 29.6191 2.28571 29.4286 2.28571H27.9048V0.761905C27.9048 0.571429 27.8096 0.380952 27.7143 0.190476C27.5239 0.0952379 27.4286 0 27.1429 0C26.9524 0 26.762 0.0952379 26.5715 0.190476C26.381 0.380952 26.381 0.476191 26.381 0.761905V2.28571H24.762C24.5715 2.28571 24.381 2.38095 24.1905 2.47619C24 2.66667 24 2.7619 24 3.04762C24 3.2381 24.0953 3.42857 24.1905 3.61905C24.381 3.80952 24.5715 3.80952 24.762 3.80952H26.2858V5.33333C26.2858 5.52381 26.381 5.71429 26.4762 5.90476C26.6667 6 26.762 6.09524 27.0477 6.09524C27.2381 6.09524 27.4286 6 27.6191 5.90476C27.8096 5.71429 27.8096 5.61905 27.8096 5.33333V3.80952H29.3334C29.5239 3.80952 29.7143 3.71429 29.9048 3.61905C30.0953 3.42857 30.0953 3.33333 30.0953 3.04762C30.2858 2.7619 30.1905 2.57143 30 2.47619ZM23.6191 9.90476L21.6191 8V5.2381C21.6191 5.04762 21.5239 4.85714 21.4286 4.66667C21.2381 4.47619 21.1429 4.47619 20.8572 4.47619C20.6667 4.47619 20.4762 4.57143 20.2858 4.66667C20.0953 4.76191 20.0953 4.95238 20.0953 5.2381V8.28571C20.0953 8.38095 20.0953 8.47619 20.1905 8.57143C20.1905 8.66667 20.2858 8.76191 20.381 8.85714L22.5715 10.9524C22.762 11.1429 22.8572 11.1429 23.1429 11.1429C23.3334 11.1429 23.5239 11.0476 23.7143 10.9524C23.8096 10.8571 23.9048 10.6667 23.9048 10.4762C23.8096 10.1905 23.7143 10 23.6191 9.90476Z" fill="#D1AFFF" />
    </svg>
  )
};

export function UpdateNotificationIcon({ width, height, className, fontSize, style, onClick, inverted }: any) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 13.5C30 15.43 28.43 17 26.5 17C24.57 17 23 15.43 23 13.5C23 11.57 24.57 10 26.5 10C28.43 10 30 11.57 30 13.5ZM26.5 19C25.0421 18.9974 23.6447 18.417 22.6138 17.3862C21.583 16.3553 21.0026 14.9579 21 13.5C21 13 21.08 12.5 21.21 12H12C10.89 12 10 12.89 10 14V28C10 28.5304 10.2107 29.0391 10.5858 29.4142C10.9609 29.7893 11.4696 30 12 30H26C27.11 30 28 29.11 28 28V18.79C27.5 18.92 27 19 26.5 19Z" fill="#D1AFFF" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="url(#paint0_linear_72_222)" />
      <defs>
        <linearGradient id="paint0_linear_72_222" x1="20" y1="0" x2="20" y2="38.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#D1AFFF" />
          <stop offset="1" stop-color="#D1AFFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
};

export function SelectionIcon({ width, height, className, fontSize, style, onClick, inverted, checked }: any) {
  return (
    <>
      {
        checked ?
          <>
            {
              inverted ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="white" />
                  <path d="M6.46786 9.84886L4.81213 8.19313C4.72291 8.10392 4.60191 8.05379 4.47573 8.05379C4.34956 8.05379 4.22856 8.10392 4.13934 8.19313C4.05012 8.28235 4 8.40336 4 8.52953C4 8.592 4.01231 8.65386 4.03621 8.71158C4.06012 8.7693 4.09516 8.82175 4.13934 8.86592L6.13385 10.8604C6.31994 11.0465 6.62055 11.0465 6.80664 10.8604L11.8549 5.81213C11.9442 5.72291 11.9943 5.60191 11.9943 5.47573C11.9943 5.34956 11.9442 5.22856 11.8549 5.13934C11.7657 5.05012 11.6447 5 11.5185 5C11.3924 5 11.2714 5.05012 11.1822 5.13934L6.46786 9.84886Z" fill="black" />
                </svg> :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="#232323" />
                  <path d="M6.46786 9.84886L4.81213 8.19313C4.72291 8.10392 4.60191 8.05379 4.47573 8.05379C4.34956 8.05379 4.22856 8.10392 4.13934 8.19313C4.05012 8.28235 4 8.40336 4 8.52953C4 8.592 4.01231 8.65386 4.03621 8.71158C4.06012 8.7693 4.09516 8.82175 4.13934 8.86592L6.13385 10.8604C6.31994 11.0465 6.62055 11.0465 6.80664 10.8604L11.8549 5.81213C11.9442 5.72291 11.9943 5.60191 11.9943 5.47573C11.9943 5.34956 11.9442 5.22856 11.8549 5.13934C11.7657 5.05012 11.6447 5 11.5185 5C11.3924 5 11.2714 5.05012 11.1822 5.13934L6.46786 9.84886Z" fill="white" />
                </svg>
            }
          </> :
          <>
            {
              inverted ?
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7.5" stroke="white" />
                </svg> :
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7.5" stroke="black" />
                </svg>
            }
          </>
      }
    </>
  )
};