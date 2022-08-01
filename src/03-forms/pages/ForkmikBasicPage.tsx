import { useFormik } from "formik";
import "../styles/styles.css";
export const ForkmikBasicPage = () => {
  const {
    handleChange,
    values: { firstName, lastName, email, password, passwordDos },
    handleSubmit,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordDos: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>FormikBases</h1>

      <form noValidate onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <input
          type="password"
          placeholder="Repeat password"
          name="passwordDos"
          onChange={handleChange}
          value={passwordDos}
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
