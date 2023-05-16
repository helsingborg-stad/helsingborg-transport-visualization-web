import { FC } from 'react';

type LoadingProps = {
  width?: number;
  height?: number;
};

export const Loading: FC<LoadingProps> = ({ width, height }) => (
  <svg
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 120"
  >
    <defs>
      <linearGradient id="gradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#000000" />
        <stop offset="100%" stopColor="#E5E5E5" />
      </linearGradient>
    </defs>
    <circle
      cx="60"
      cy="60"
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="10"
      r="50"
      strokeDasharray="120 188.49555921538757"
      strokeDashoffset="0"
      strokeLinecap="round"
      transform="rotate(-90 60 60)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 60 60"
        to="360 60 60"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>
  </svg>
);

Loading.defaultProps = {
  width: 100,
  height: 100,
};
