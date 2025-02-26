"use client"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { motion } from "framer-motion"
import { validationSchema } from "./validationSchema"
import { initialValues, handleSubmit } from "./formLogic"

const SignUpForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Tech-inspired background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl p-8 max-w-md w-full relative z-10"
      >
        <h2 className="text-4xl font-bold text-center text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Data Hackathon Series
          </span>
        </h2>
        <p className="text-center text-white text-xl mb-8">Unleash Your Coding Potential!</p>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-black">
                  Full Name
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent placeholder-gray-500 text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                  placeholder="John Doe"
                />
                <ErrorMessage name="fullName" component="div" className="text-red-300 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                  Email Address
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent placeholder-gray-500 text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                  placeholder="john@example.com"
                />
                <ErrorMessage name="email" component="div" className="text-red-300 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-black">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent placeholder-gray-500 text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                  placeholder="1234567890"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-300 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-black">
                  Organization/Institution (optional)
                </label>
                <Field
                  type="text"
                  id="organization"
                  name="organization"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent placeholder-gray-500 text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                  placeholder="Tech Company Inc."
                />
              </div>

              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-black">
                  Experience Level
                </label>
                <Field
                  as="select"
                  id="experienceLevel"
                  name="experienceLevel"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                >
                  <option value="">Select your experience level</option>
                  <option value="Newbie Coder">Newbie Coder</option>
                  <option value="Code Wizard">Code Wizard</option>
                  <option value="AI Warlord">AI Warlord</option>
                </Field>
                <ErrorMessage name="experienceLevel" component="div" className="text-red-300 text-sm mt-1" />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-black">
                  Course
                </label>
                <Field
                  as="select"
                  id="course"
                  name="course"
                  className="mt-1 block w-full rounded-md bg-white bg-opacity-70 border-transparent text-black focus:border-white focus:bg-opacity-90 focus:ring-0 transition-all duration-200"
                >
                  <option value="">Select a course</option>
                  <option value="Data Science">Data Science (16 months)</option>
                  <option value="Data Analytics">Data Analytics (8 months)</option>
                  <option value="ProDev Front-End Developer">ProDev Front-End Developer (8 months)</option>
                  <option value="Front-End Web Development">Front-End Web Development (8 months)</option>
                  <option value="ProDev Back-End Developer">ProDev Back-End Developer (8 months)</option>
                  <option value="Back-End Web Development">Back-End Web Development (8 months)</option>
                  <option value="AWS Cloud Computing">AWS Cloud Computing (10 months)</option>
                  <option value="Salesforce Administrator">Salesforce Administrator (9 months)</option>
                  <option value="Virtual Assistant">Virtual Assistant (2 months)</option>
                  <option value="Professional Foundations">Professional Foundations (3 months)</option>
                  <option value="AI Career Essentials">AI Career Essentials (6 weeks)</option>
                  <option value="AI Starter Kit">AI Starter Kit (4 weeks)</option>
                </Field>
                <ErrorMessage name="course" component="div" className="text-red-300 text-sm mt-1" />
              </div>

              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-black">
                  I agree to the terms and conditions
                </label>
              </div>
              <ErrorMessage name="consent" component="div" className="text-red-300 text-sm mt-1" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                {isSubmitting ? "Submitting..." : "Join the Hackathon!"}
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  )
}

export default SignUpForm

