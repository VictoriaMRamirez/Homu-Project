import { useCallback } from "react";
import PostCancellations from "./PostCancellations";
export default function useCancellations() {
    const Cancellations = useCallback(
        (description) => {
            PostCancellations(description);
        }, []
    );

    return {
        Cancellations,
    }
}