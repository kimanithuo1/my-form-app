export const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    experienceLevel: "",
    course: "",
    consent: false,
  }
  
  export const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
      alert("Form submitted successfully!")
      resetForm()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while submitting the form. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }
  
  