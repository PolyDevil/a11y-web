import { useCallback, useEffect, useState } from "react";

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
  set: (b: boolean) => void;
}

type UseBoolean = [boolean, Actions];

export const useBoolean = (initialValue = false): UseBoolean => {
  const [value, setValue] = useState(initialValue ?? false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, { setTrue, setFalse, toggle, set: setValue }];
};
