import * as React from "react";

function SvgNews(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M77 90.4H23c-5.8 0-10.6-4.7-10.6-10.6v-54c0-5.8 4.7-10.6 10.6-10.6h54c5.8 0 10.6 4.7 10.6 10.6v54c0 5.8-4.7 10.6-10.6 10.6zM23.1 18.2c-4.2 0-7.6 3.4-7.6 7.6v54c0 4.2 3.4 7.6 7.6 7.6h54c4.2 0 7.6-3.4 7.6-7.6v-54c0-4.2-3.4-7.6-7.6-7.6h-54z" />
      <path d="M14 31h72v3H14z" />
      <circle cx={25.3} cy={24.8} r={3.7} />
      <path d="M58.8 89.3L39.5 70 20.3 89.1 18.2 87l20.2-20.2c.6-.6 1.6-.6 2.1 0l20.4 20.4-2.1 2.1z" />
      <path d="M84.3 81.5L62.7 59.9 47.1 75.4 45 73.3l16.7-16.7c.6-.6 1.5-.6 2.1 0l22.7 22.7-2.2 2.2zM60 25H37c-.8 0-1.5-.7-1.5-1.5S36.2 22 37 22h23c.8 0 1.5.7 1.5 1.5S60.8 25 60 25zM60 29H37c-.8 0-1.5-.7-1.5-1.5S36.2 26 37 26h23c.8 0 1.5.7 1.5 1.5S60.8 29 60 29z" />
      <text
        y={115}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
      </text>
      <text
        y={120}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >

      </text>
    </svg>
  );
}

export default SvgNews;
