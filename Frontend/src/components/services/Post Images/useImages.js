import { useCallback } from "react";
import ImagesPost from "./ImagesPost";

export default function useImages() {
    const Images = useCallback(
        (title, url, products) => {
            ImagesPost(title, url, products);
        }, []
    );

    return {
        Images,
    }
}