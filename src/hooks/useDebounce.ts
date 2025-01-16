import {useCallback, useRef} from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function useDebounce(callback:Function, delay:number) {
    const timer = useRef<NodeJS.Timeout>(setTimeout(() => {}));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const debouncedCallback = useCallback((...args:any) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
};