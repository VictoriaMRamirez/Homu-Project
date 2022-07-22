export default function FeaturesPost({ icon, description, products }) {
    const authToken = localStorage.getItem("user");

    return fetch(`http://3.133.114.51:8086/features/addFeature`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            icon, 
            description, 
            products
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la feature no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}