import React, { useState, useEffect } from "react";

function FunctionComponent() {
  let [num, setNum] = useState(0);
  useEffect(() => {
    console.log("likeComponentDidMount");
    let url = "https://todo-redev.herokuapp.com/api/auth/login";
    let getResourse = async () => {
      await fetch(url, {
        headers: {
          "content-type": "application/json",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZsYWQ4QG1haWwucnUiLCJpZCI6MjkyLCJpYXQiOjE3MDU1MjM0ODJ9.n6eokA4Ma5wWiM0zSwzzr33gkqYzN5Vnf3xec-mF3q8",
        },
        method: "POST",
        body: JSON.stringify({
          email: "vlad8@mail.ru",
          password: "Hello_34",
        }),
      })
        .then((res) => console.log(res))
        .then((data) => console.log(data))
        .catch(console.log("error2"));
    };
    getResourse();
  }, []);
  useEffect(() => {
    if ((num + 1) % 2 == 0) {
      console.log("likeComponentDidUpdate");
    }
  }, [num]);

  return (
    <div>
      <p>Вы нажали {(num + 1) % 2 == 0 ? num - 1 : num} раз</p>
      <button onClick={() => setNum((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default FunctionComponent;
