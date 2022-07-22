import { useCallback } from "react";
import ProductPost from "./ProductPost";

export default function useProducts() {
    const Products = useCallback(
        (address, rating, review, location, map_url, watch,
            title, description, url, categories, features, cities, cancellations, rules, safeties) => {
            ProductPost(address, rating, review, location, map_url, watch,
                title, description, url, categories, features, cities, cancellations, rules, safeties);
        }, []
    );

    return {
        Products,
    }
}