import { useCallback } from "react";
import FeaturesPost from "./FeaturesPost";
export default function useFeatures() {
    const Features = useCallback(
        (icon, description, products) => {
            FeaturesPost(icon, description, products);
        }, []
    );

    return {
        Features,
    }
}