

const UseToken = (user) => {

  const { email } = user;
  fetch(`https://hilly-view.herokuapp.com/user/${email}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { token } = data;
      localStorage.setItem("accessKey", token);
      return token;
    });
};
export default UseToken;
