export default function ReservationPost({
    seller_info,
    vaccinated,
    start_time,
    start_date,
    finish_date,
    products,
    users,
}) {
    const authToken = localStorage.getItem("user");

    return fetch(`http://3.133.114.51:8086/bookings/addBooking`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${authToken}`,
            "content-type": "application/json",
        },
        body: JSON.stringify({
            seller_info,
            vaccinated,
            start_time,
            start_date,
            finish_date,
            products,
            users
        }),
    })
        .then((res) => {
            if (res.status !== 201)
                throw new Error(
                    "Lo sentimos, la reserva no pudo ser registrada. Intentelo más tarde" +
                    res.status,
                );
            return res.json();
        })
        .then((res) => console.log(res));
}