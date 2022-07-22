import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://3.133.114.51:8086" + url);
            const datas = await response.json();
            setData(datas);
            setIsLoaded(true);
        }
        fetchData();
    }, [url])

    return { data, isLoaded }
}
