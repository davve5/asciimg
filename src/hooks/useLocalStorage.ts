import { useState, } from "react";

type SetValue<T> = (value: T) => void;

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
			console.log(error);
			console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue;
    }
  });
  const setValue: SetValue<T> = (value: T) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
			console.warn(`Error setting localStorage key "${key}":`, error)
		}
  };
  return [storedValue, setValue];
}

export default useLocalStorage;