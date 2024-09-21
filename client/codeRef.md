## Simple React Form

```js
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("User values: ", user);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          placeholder="John"
          onChange={handleChange}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          placeholder="John@email.com"
          onChange={handleChange}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        <p>
          Already a member?{" "}
          <span>
            {" "}
            Go to <Link to="/login">Login page</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
```

## Handling CORS Errors

There are three scenarios which are tested. The following code is added at app.tsx and second code is added in the server file in express.

```js title='App.tsx'
// Test-Route for checking CORS errors in App.tsx

fetch("http://localhost:5501/api/v1/test01")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

```js title='server.js'
// Test-Route for checking CORS errors on Server.js

app.get("/api/v1/test01", (req, res) => {
  res.json({ msg: "CORS not blocked" });
});
```

### Scenario-1:

The fetch request is added in the app.tsx and a server route is added in server.js. Both servers are independentally run on different ports. And as page is refreshed, the fetch request is made on the apps.tsx page but it shows error in the terminal that request is blocked by CORS policy.

### Scenario-2:

With the above code in place, client side is built and served from server.js. And application is run on only one port i.e. server-side port.
In that case, the message is successfully communicated and the required message from the server is seen in the console.
The server is run in dev mode.

### Scenario-3:

The above scenario is mimiced with a slight change. No localhost is added on frontend side in the fetch request. Build is made and served from the server side. The result is the same as above.
