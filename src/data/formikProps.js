import * as Yup from "yup";

export const formikProps = {
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    terms: false, // checkbox
    jobType: "" // select
  },
  validationSchema: Yup.object({
    firstName: Yup.string()
      .max(12, "Maximum 12 character")
      .required("Required"),
    lastName: Yup.string().max(12, "Maximum 12 character").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must agree our terms and condition"),
    jobType: Yup.string()
      .required("Required")
      .oneOf(
        [
          "Developer",
          "Architecture",
          "Engineer",
          "Doctor",
          "Professor",
          "Businessman"
        ],
        "You need to select at least one"
      )
  }),

  onSubmit: (value) => {
    alert(JSON.stringify(value, null, 2));
  }
};
