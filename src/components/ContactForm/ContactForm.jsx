import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useId } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  let userSchema = object({
    name: string().required().min(3).max(50),
    number: string().required().max(9),
  });

  const nameFieldId = useId();
  const emailFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    if (!Object.values(values).every((value) => value.trim() !== "")) {
      return;
    }
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div className={styles.fieldGroup}>
            <label htmlFor={nameFieldId} className={styles.label}>
              Name
            </label>
            <Field
              id={nameFieldId}
              name="name"
              type="text"
              className={styles.input}
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor={emailFieldId} className={styles.label}>
              Number
            </label>
            <Field
              id={emailFieldId}
              name="number"
              type="text"
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
