import { useCallback } from "react";
import CityPost from "./CityPost";
export default function useCities() {
    const Cities = useCallback(
        (name, country) => {
            CityPost(name, country);
        }, []
    );

    return {
        Cities,
    }
    
}