import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#e03',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <mask id="mask0_2_49" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
        <path
            className={classes.path}
            d="M0 102C0 45.667 45.667 0 102 0H410C466.333 0 512 45.667 512 102V410C512 466.333 466.333 512 410 512H102C45.667 512 0 466.333 0 410V102Z"/>
      </mask>
      <g mask="url(#mask0_2_49)">
        <rect width="512" height="512" fill="#EE0033"/>
        <path d="M397.987 110.5C377.34 110.5 360.363 122.935 352.104 140.437L265.844 324.664C263.55 328.809 259.421 336.178 256.209 336.178C252.997 336.178 248.868 329.269 246.573 324.664L159.854 140.437C151.595 122.935 134.16 110.5 113.513 110.5H63.5L200.69 376.708C214.455 402.96 241.985 402.499 256.209 402.499C275.939 402.499 298.88 401.578 311.268 376.708L448 110.5H397.987Z" fill="white"/>
      </g>
    </svg>
  );
};

export default LogoIcon;
