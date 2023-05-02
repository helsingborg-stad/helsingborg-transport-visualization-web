import React, { useEffect } from 'react';

type Props = {
  setVisiblity: () => void;
  ref: React.RefObject<HTMLElement>;
};

export const useHandleClickOutside = ({ ref, setVisiblity }: Props) => {
  const handleClickOutside = ({ target }: MouseEvent) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      setVisiblity();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ref]);
};
