import { useState, ChangeEvent, FormEvent } from "react";

import "../styles/styles.css";

export const RegisterPages = () => {
  const [{ name, email, password, passwordDos }, setInput] = useState({
    name: "",
    email: "",
    password: "",
    passwordDos: "",
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput({ name: "", email: "", password: "", passwordDos: "" });
  };
  return (
    <div>
      <h1>Register pages</h1>

      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Repeat password"
          value={passwordDos}
          name="passwordDos"
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
