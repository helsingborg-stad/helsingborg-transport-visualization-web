import React, { FC, useRef } from 'react';
import { useHandleClickOutside } from 'hooks/useHandleClickOutside';

type InputProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const ClickOutsideCloser: FC<InputProps> = ({ children, onClick }) => {
  const ref = useRef(null);
  useHandleClickOutside({
    ref,
    setVisiblity: () => {
      onClick();
    },
  });
  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
