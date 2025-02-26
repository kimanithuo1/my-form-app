import * as Yup from "yup"

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  organization: Yup.string(),
  experienceLevel: Yup.string().required("Experience level is required"),
  course: Yup.string().required("Course selection is required"),
  consent: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
})

