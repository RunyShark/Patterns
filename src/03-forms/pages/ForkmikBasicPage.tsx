import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";
interface Validate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordDos: string;
}
const validate = ({
  firstName,
  lastName,
  email,
  password,
  passwordDos,
}: Validate) => {
  const errors: FormikErrors<Validate> = {};
  if (!firstName.trim()) {
    errors.firstName = "Required";
  } else if (firstName.length >= 15) {
    errors.firstName = "Must be 15 character of less";
  }
  if (!lastName.trim()) {
    errors.lastName = "Required";
  } else if (lastName.length >= 10) {
    errors.lastName = "Must be 10 character of less";
  }
  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password.trim()) {
    errors.password = "Required";
  } else if (password.length > 15) {
    errors.password = "Must be 15 character of less";
  }
  if (!passwordDos.trim()) {
    errors.passwordDos = "Required";
  } else if (passwordDos.length > 15) {
    errors.passwordDos = "Must be 15 character of less";
  }

  return errors;
};

export const ForkmikBasicPage = () => {
  const {
    handleChange,
    values: { firstName, lastName, email, password, passwordDos },
    handleSubmit,
    errors,
    touched,
    handleBlur,
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
    validate,
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
          onBlur={handleBlur}
        />

        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={lastName}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={password}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && <span>{errors.password}</span>}
        <input
          type="password"
          placeholder="Repeat password"
          name="passwordDos"
          onChange={handleChange}
          value={passwordDos}
          onBlur={handleBlur}
        />
        {touched.passwordDos && errors.passwordDos && (
          <span>{errors.passwordDos}</span>
        )}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};
