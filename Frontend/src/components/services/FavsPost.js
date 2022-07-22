export default function FavsPost({
    products,
    users,
}) {
    const authToken = localStorage.getItem("user");

    return fetch(`http://3.133.114.51:8086/favourites/addFavourite`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            products,
            users

        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, el favorito no pudo ser registrado. " +
                    res.status,
                );
            return res.json();
        })
        .then((res) => {
            console.log(res);
            const { favs } = res;
            return favs;

        })
}




