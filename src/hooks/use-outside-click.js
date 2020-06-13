import React, { useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    console.log('outside click activated');
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
