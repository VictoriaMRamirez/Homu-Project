import { useCallback } from "react";
import SafetiesPost from "./SafetiesPost";
export default function useSafeties() {
    const Safeties = useCallback(
        (description) => {
            SafetiesPost(description);
        }, []
    );

    return {
        Safeties,
    }
}