import * as React from "react";

function SvgMessenger(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 30"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M5.5 20.5A.5.5 0 015 20l-.4-4A7.34 7.34 0 013 11.5c0-4.41 4-8 9-8s9 3.59 9 8-4 8-9 8a10 10 0 01-2.67-.36l-3.66 1.33a.49.49 0 01-.17.03zm6.5-16c-4.41 0-8 3.14-8 7a6.37 6.37 0 001.47 4 .5.5 0 01.11.26l.35 3.51 3.21-1.17a.5.5 0 01.31 0 9 9 0 002.55.4c4.41 0 8-3.14 8-7s-3.59-7-8-7z" />
      <path d="M12.5 13.5a.5.5 0 01-.47-.33l-.81-2.32-3.5 1.74a.5.5 0 11-.45-.89l4-2a.5.5 0 01.73.3l.82 2.34 3.5-1.62a.5.5 0 01.42.91l-4 1.86a.5.5 0 01-.24.01z" />
      <text
        y={39}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        {"Created by Henning Gross"}
      </text>
      <text
        y={44}
        fontSize={5}
        fontWeight="bold"
        fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >

      </text>
    </svg>
  );
}

export default SvgMessenger;
