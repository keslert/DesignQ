import { useEffect } from 'react';

export function useKeyDown(cb) {
  useEffect(() => {
    window.addEventListener('keydown', cb);
    // window.addEventListener('keyup', upHandler);
    
    return () => {
      window.removeEventListener('keydown', cb);
      // window.removeEventListener('keyup', upHandler);
    };
  }, []);
}