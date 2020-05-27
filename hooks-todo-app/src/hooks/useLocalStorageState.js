import {
    useState,
    useEffect
} from "react";

function useLocalStorageState(key, defaultVal) {
    // make piece of state, based on off of value from localStorage
    const [state, setState] = useState(() => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key)) || String(defaultVal);
        } catch (e) {
            val = defaultVal;
        }
        return val;
    });
    // use useEffect to update localStorage when state changes
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state]);
    return [state, setState];
}
export default useLocalStorageState;