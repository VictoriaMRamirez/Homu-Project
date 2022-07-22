const API_URL = "http://3.133.114.51:8086";

export default function LoginAuthService({ email, password }) {
  return fetch(`${API_URL}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then(res => {
    if (res.status !== 200) {
      throw new Error("Lo sentimos, no pudimos iniciar sesión. Intentelo más tarde");
    };
    return res.json();
    
  }).then(res => {   
    if(res){
      localStorage.setItem("username", email);
      localStorage.setItem("avatar", email[0].toUpperCase());
      console.log(localStorage.getItem("username"));
      window.location.href = '/';
    }
    const { jwt } = res;
    return jwt;
  });
}