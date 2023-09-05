import { LegacyRef, MouseEventHandler, useRef, useState } from 'react';

export const useIsRefFocused = () => {
  const [isRefFocused, setIsRefFocused] = useState<boolean>(false);
  const ref: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const handleRefClick: MouseEventHandler<HTMLElement> = e => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsRefFocused(false);
    } else {
      setIsRefFocused(true);
    }
  };

  return [ref, isRefFocused, handleRefClick] as const;
};
