import { Field, Form, ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import "../styles/styles.css";

export const ForkmikComponents = () => {
  return (
    <div>
      <h1>FormikBases</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordDos: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={yup.object({
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
          terms: yup
            .boolean()
            .oneOf([true], "Debe de aceptar terminos y condiciones"),
          jobType: yup.string().required("Campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <Field name="email" type="text" />
            <ErrorMessage name="email" component="span" />
            <Field name="password" type="text" />
            <ErrorMessage name="password" component="span" />
            <Field name="passwordDos" type="text" />
            <ErrorMessage name="passwordDos" component="span" />

            <label>Job Type</label>
            <Field name="terms" as="select">
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="it-senior">it-senio</option>
              <option value="it-jr">it-jr</option>
            </Field>
            <ErrorMessage name="terms" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terminos y condiciones
            </label>

            <ErrorMessage name="terms" component="span" />
            <button type="submit">Crear</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
