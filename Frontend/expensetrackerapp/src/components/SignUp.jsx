import { useState } from "react";
import css from "./SignUp.module.css";
import { signupUser, loginUser } from "../api";

function SignUp({ onLogin }) {
  const [isLogin, setIsLogin] = useState(false);

  //deaclration
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  //validation of register
  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const user = await signupUser(form);

      localStorage.setItem("user", JSON.stringify(user));

      alert("Registration Successful!");
      onLogin();
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  //validation of login
  const handleLogin = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const user = await loginUser(form);
      console.log(user);

      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Successful!");
      onLogin();
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className={css.container}>
      <div className={css["form-container"]}>
        {/* create an Account */}
        {isLogin ? (
          <>
            <div className={css.form}>
              <h2>Create a Account</h2>
              <input
                type="text"
                placeholder="Enter a Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <button onClick={handleRegister}>Register </button>
              <p>
                Already have an Account?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Login
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            {/* for login */}
            <div className={css.form}>
              <h2>LoginForm</h2>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button onClick={handleLogin}>Login</button>
              <p>
                Don't have an Account?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Register
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp;
