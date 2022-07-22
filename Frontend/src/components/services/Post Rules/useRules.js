import { useCallback } from "react";
import RulesPost from "./RulesPost";
export default function useRules() {
    const Rules = useCallback(
        (description) => {
            RulesPost(description);
        }, []
    );

    return {
        Rules,
    }
}