import { useEffect, useState } from "react";

export const UseDebouncing = (value, delay) => {
  const [deboucing, setDebouncing] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncing(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return deboucing;
};
