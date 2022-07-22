export default function CityPost({
    name
}) {
    const authToken = localStorage.getItem("user");

    return fetch(`http://3.133.114.51:8086/cities/addCity`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
                name,
                country: "Argentina"
            
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la ciudad no pudo ser registrada. Intentelo más tarde" +
                    res.status,                    
                );
            return res.json();
        })
        .then((res) => console.log(res));
}