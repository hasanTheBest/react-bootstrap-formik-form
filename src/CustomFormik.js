import {Form, Formik} from "formik";
import {Button} from "react-bootstrap"

import MyTextInput from "./Input/MyTextInput";
import MyCheckbox from "./Input/MyCheckbox";
import MySelect from "./Input/MySelect";

import {formikProps} from "./data/formikProps.js"

export default function CustomFormik () {

  return(
    <Formik {...formikProps}>
        <Form as="Form">
          <MyTextInput
            label="First Name"
            placeholder="Jowel"
            type="text"
            name="firstName"
          />

          <MyTextInput
            label="Last Name"
            placeholder="Jony"
            type="text"
            name="lastName"
          />

          <MyTextInput
            label="Email"
            placeholder="example@example.com"
            type="email"
            name="email"
          />

          <MyCheckbox label="I accepted terms and comditions" name="terms" />

          <MySelect name="jobType" label="Your Preferrence">
            <option>Developer</option>
            <option>Architecture</option>
            <option>Engineer</option>
            <option>Doctor</option>
            <option>Professor</option>
            <option>Businessman</option>
          </MySelect>

          <div className="d-flex py-3 justify-content-between">
            <Button type="submit" variant="success">
              Subscribe
            </Button>
            <Button type="reset" variant="danger">
              Reset
            </Button>
          </div>
        </Form>
      </Formik>
  )
}