import { useCallback } from "react";
import FavsPost from "../components/services/FavsPost";
export default function useFavs() {
    const Favs = useCallback(
        (products, users) => {
            FavsPost(products, users);
        }, []
    );

    return {
        Favs
    }
}