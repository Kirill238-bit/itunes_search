import {useCallback, useRef} from "react";

export default function useDebounce(callback:Function, delay:number) {
    const timer = useRef<NodeJS.Timeout>(setTimeout(() => {}));

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