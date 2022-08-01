import { useFormik } from "formik";
import * as yup from "yup";
import "../styles/styles.css";
interface Validate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordDos: string;
}

export const ForkmikYupPage = () => {
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
    validationSchema: yup.object({
      firstName: yup
        .string()
        .max(15, "debe de tener 15 caracteres")
        .required("Campo requerido"),
      lastName: yup
        .string()
        .max(15, "debe de tener 15 caracteres")
        .required("Campo requerido"),
      email: yup
        .string()
        .email("El email debe de tener un formato valido")
        .required("Campo requerido"),
      password: yup
        .string()
        .max(15, "debe de tener 15 caracteres")
        .required("Campo requerido"),
      passwordDos: yup
        .string()
        .max(15, "debe de tener 15 caracteres")
        .required("Campo requerido"),
    }),
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
