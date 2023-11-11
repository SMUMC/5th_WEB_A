import { useState } from "react";

export const useLoading = (action) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleData = async (...arg) => {
        setIsLoading(true);
        return await action(...arg).finally(() => setIsLoading(false));
    }

    return [isLoading, handleData];
}