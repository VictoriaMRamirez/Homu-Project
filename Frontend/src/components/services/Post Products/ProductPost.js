export default function ProductPost({ address, rating, review, location, map_url, watch,
    title, description, url, categories, features, cities, cancellations, rules, safeties }) {
    const authToken = localStorage.getItem("user");
    return fetch(`http://3.133.114.51:8086/products/addProduct`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            address,
            rating,
            review,
            location,
            map_url,
            watch,
            title,
            description,
            url,
            categories,
            features,
            cities,
            cancellations,
            rules,
            safeties
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, el producto no pudo ser registrado. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}