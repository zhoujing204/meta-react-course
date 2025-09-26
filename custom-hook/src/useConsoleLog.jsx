import { useEffect } from "react";

export const useConsoleLog = (value) => {
    useEffect(() => {
        console.log(value);
    }, [value]);
};