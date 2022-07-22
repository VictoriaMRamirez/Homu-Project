const API_URL = "http://3.133.114.51:8086";

export default function SignUpAuthService({ name, surname, email, password, city, roles }) {
  return fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      surname,
      email,
      password,
      city,
      roles: {
        id: 2,
        name: "USER"
      }
    }
    )

  }).then(res => {
    if (res.status !== 201) throw new Error("Lo sentimos, el usuario no pudo ser registrado. Intentelo más tarde");
    return res.json();
  }).then(res => console.log(res));
}