import { useEffect } from 'react';

export function makeDebounceEffectHook(useDebounce) {
  return function (cb, deps, ms) {
    const debouncedCb = useDebounceHook(cb, ms);

    useEffect(() => {
      debouncedCb();
    }, [...deps]);
  };
}
